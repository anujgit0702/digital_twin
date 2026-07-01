'use client';

// Floating chat widget — bubble toggle, message thread, streaming responses.
// Opens bottom-right; calls /api/chat server route; streams DeepSeek replies.

import { useState, useRef, useEffect } from 'react';
import { RiRobot2Line, RiCloseLine } from 'react-icons/ri';
import { ChatMessage as ChatMessageType } from '@/types';
import { TWIN_OPENING_MESSAGE } from '@/data/persona';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';

const OPENING_MESSAGE: ChatMessageType = {
  role: 'assistant',
  content: TWIN_OPENING_MESSAGE,
};

// Throttle streaming re-renders to this interval (ms) for readable pacing
const STREAM_RENDER_INTERVAL = 40;

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessageType[]>([OPENING_MESSAGE]);
  const [isStreaming, setIsStreaming] = useState(false);
  const [rateLimited, setRateLimited] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const streamStartRef = useRef<HTMLDivElement>(null);

  // Open via "Chat with my AI twin" button in Hero
  useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener('open-chat', handler);
    return () => window.removeEventListener('open-chat', handler);
  }, []);

  // Scroll to start of new assistant message when streaming begins
  useEffect(() => {
    if (isStreaming) {
      streamStartRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [isStreaming]);

  // Scroll to bottom when chat opens or a non-streaming message is added
  useEffect(() => {
    if (isOpen && !isStreaming) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isStreaming]);

  const sendMessage = async (userText: string) => {
    if (isStreaming || rateLimited) return;

    const userMessage: ChatMessageType = { role: 'user', content: userText };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);

    const assistantPlaceholder: ChatMessageType = { role: 'assistant', content: '' };
    setMessages([...updatedMessages, assistantPlaceholder]);
    setIsStreaming(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages.map(({ role, content }) => ({ role, content })),
        }),
      });

      if (res.status === 429) {
        setRateLimited(true);
        setMessages([
          ...updatedMessages,
          {
            role: 'assistant',
            content: "You've reached the message limit for this session. Refresh the page to start a new conversation!",
          },
        ]);
        return;
      }

      if (!res.ok || !res.body) {
        setMessages([
          ...updatedMessages,
          { role: 'assistant', content: 'Something went wrong. Please try again.' },
        ]);
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let accumulated = '';
      let lastRender = 0;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        accumulated += decoder.decode(value, { stream: true });

        // Throttle state updates so streaming is readable, not a blur
        const now = performance.now();
        if (now - lastRender > STREAM_RENDER_INTERVAL) {
          lastRender = now;
          setMessages([...updatedMessages, { role: 'assistant', content: accumulated }]);
        }
      }

      // Final render with complete content
      setMessages([...updatedMessages, { role: 'assistant', content: accumulated }]);
    } catch {
      setMessages([
        ...updatedMessages,
        { role: 'assistant', content: 'Connection error. Please try again.' },
      ]);
    } finally {
      setIsStreaming(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat panel */}
      {isOpen && (
        <div className="flex flex-col w-[360px] sm:w-[400px] h-[520px] rounded-2xl shadow-2xl border border-indigo-100 bg-white overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-indigo-600">
            <div className="flex items-center gap-2">
              <RiRobot2Line className="text-white" size={20} />
              <span className="text-white font-semibold text-sm">Chat with Anuj</span>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="text-white/80 hover:text-white transition-colors"
            >
              <RiCloseLine size={22} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3">
            {messages.map((msg, i) => {
              const isStreamingThisMessage =
                isStreaming && i === messages.length - 1 && msg.role === 'assistant';
              return (
                <div key={i}>
                  {/* Anchor to scroll to the start of a new assistant reply */}
                  {isStreamingThisMessage && <div ref={streamStartRef} />}
                  <ChatMessage message={msg} isStreaming={isStreamingThisMessage} />
                </div>
              );
            })}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <ChatInput onSend={sendMessage} disabled={isStreaming || rateLimited} />
        </div>
      )}

      {/* Floating bubble toggle */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        className="w-14 h-14 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg flex items-center justify-center transition-colors"
      >
        {isOpen ? <RiCloseLine size={26} /> : <RiRobot2Line size={26} />}
      </button>
    </div>
  );
};
