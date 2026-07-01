// Server-side API route for the AI twin chat — calls DeepSeek API.
// DEEPSEEK_API_KEY is read from env vars only; never reaches the client.

import { NextRequest, NextResponse } from 'next/server';
import { buildSystemPrompt } from '@/data/persona';

const DEEPSEEK_API_URL = 'https://api.deepseek.com/chat/completions';
const MODEL = 'deepseek-chat';
const MAX_MESSAGES_PER_IP = 20;
const MAX_MESSAGES_PER_DAY = 100;

// In-memory rate limiter keyed by IP — resets on server restart
const ipMessageCounts = new Map<string, number>();

// In-memory global daily cap, protects against runaway DeepSeek API costs — resets on server restart or day change
let dailyMessageCount = 0;
let dailyCountDate = new Date().toISOString().slice(0, 10);

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'
  );
}

export async function POST(req: NextRequest) {
  try {
    const today = new Date().toISOString().slice(0, 10);
    if (today !== dailyCountDate) {
      dailyCountDate = today;
      dailyMessageCount = 0;
    }

    if (dailyMessageCount >= MAX_MESSAGES_PER_DAY) {
      return NextResponse.json(
        { error: 'Daily message limit reached. Please try again tomorrow.' },
        { status: 429 }
      );
    }

    const ip = getClientIp(req);
    const count = ipMessageCounts.get(ip) ?? 0;

    if (count >= MAX_MESSAGES_PER_IP) {
      return NextResponse.json(
        { error: 'Message limit reached. Please refresh to start a new session.' },
        { status: 429 }
      );
    }
    ipMessageCounts.set(ip, count + 1);
    dailyMessageCount += 1;

    const apiKey = process.env.DEEPSEEK_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'API not configured.' }, { status: 500 });
    }

    const { messages } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
    }

    const deepseekResponse = await fetch(DEEPSEEK_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: 'system', content: buildSystemPrompt() },
          ...messages,
        ],
        stream: true,
        max_tokens: 220,
        temperature: 0.6,
      }),
    });

    if (!deepseekResponse.ok) {
      console.error('DeepSeek API error:', deepseekResponse.status);
      return NextResponse.json({ error: 'AI service unavailable.' }, { status: 502 });
    }

    // Stream DeepSeek SSE chunks as plain text to the client
    const stream = new ReadableStream({
      async start(controller) {
        const reader = deepseekResponse.body?.getReader();
        if (!reader) {
          controller.close();
          return;
        }

        const decoder = new TextDecoder();

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });

          for (const line of chunk.split('\n')) {
            if (!line.startsWith('data: ')) continue;
            const payload = line.slice(6).trim();
            if (payload === '[DONE]') {
              controller.close();
              return;
            }
            try {
              const parsed = JSON.parse(payload);
              const content = parsed.choices?.[0]?.delta?.content;
              if (content) {
                controller.enqueue(new TextEncoder().encode(content));
              }
            } catch {
              // skip malformed SSE chunks
            }
          }
        }
        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
        'X-Content-Type-Options': 'nosniff',
      },
    });
  } catch (err) {
    console.error('Chat route error:', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
