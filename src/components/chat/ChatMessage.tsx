'use client';

// Individual message bubble for the AI twin chat.
// User messages right-aligned; assistant messages left-aligned.
// Renders URLs as clickable links and **bold** text as <strong>.

import { ChatMessage as ChatMessageType } from '@/types';
import { cn } from '@/lib/utils';

interface ChatMessageProps {
  message: ChatMessageType;
  isStreaming?: boolean;
}

// Parses a string segment into text with **bold** rendered as <strong>
const parseBold = (text: string, baseKey: number): React.ReactNode[] =>
  text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={`${baseKey}-b${i}`}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });

// Splits content into URLs and text, renders URLs as anchor tags
const renderContent = (content: string): React.ReactNode[] =>
  content.split(/(https?:\/\/[^\s]+)/g).map((part, i) => {
    if (/^https?:\/\//.test(part)) {
      return (
        <a
          key={i}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:opacity-80 break-all"
        >
          {part}
        </a>
      );
    }
    return parseBold(part, i);
  });

export const ChatMessage = ({ message, isStreaming = false }: ChatMessageProps) => {
  const isUser = message.role === 'user';

  return (
    <div className={cn('flex w-full', isUser ? 'justify-end' : 'justify-start')}>
      <div
        className={cn(
          'max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap break-words',
          isUser
            ? 'bg-indigo-600 text-white rounded-br-sm'
            : 'bg-indigo-50 text-gray-800 rounded-bl-sm'
        )}
      >
        {renderContent(message.content)}
        {isStreaming && (
          <span className="inline-block w-1.5 h-3.5 ml-0.5 align-middle bg-indigo-400 rounded-sm animate-pulse" />
        )}
      </div>
    </div>
  );
};
