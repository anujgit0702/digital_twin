'use client';

// Message input bar for the AI twin chat widget.
// Submits on Enter (Shift+Enter for newline) or send button click.

import { useRef } from 'react';
import { RiSendPlane2Fill } from 'react-icons/ri';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export const ChatInput = ({ onSend, disabled = false }: ChatInputProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    const value = textareaRef.current?.value.trim();
    if (!value || disabled) return;
    onSend(value);
    if (textareaRef.current) {
      textareaRef.current.value = '';
      textareaRef.current.style.height = 'auto';
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInput = () => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, 120)}px`;
  };

  return (
    <div className="flex items-end gap-2 border-t border-indigo-100 dark:border-indigo-900 bg-white dark:bg-gray-900 px-3 py-3">
      <textarea
        ref={textareaRef}
        rows={1}
        placeholder="Ask me anything…"
        disabled={disabled}
        onKeyDown={handleKeyDown}
        onInput={handleInput}
        className="flex-1 resize-none rounded-xl border border-indigo-200 dark:border-indigo-700 bg-indigo-50 dark:bg-gray-800 px-3 py-2 text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 disabled:opacity-50 leading-relaxed"
        style={{ minHeight: '38px', maxHeight: '120px' }}
      />
      <button
        onClick={handleSend}
        disabled={disabled}
        aria-label="Send message"
        className="flex-shrink-0 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed text-white p-2.5 transition-colors"
      >
        <RiSendPlane2Fill size={18} />
      </button>
    </div>
  );
};
