import React from 'react';

interface QuoteBlockProps {
  quote: string;
  authorOrContext?: string;
  tag?: string;
  variant?: 'minimal' | 'highlight' | 'dark';
}

export const QuoteBlock: React.FC<QuoteBlockProps> = ({
  quote,
  authorOrContext,
  tag,
  variant = 'minimal',
}) => {
  if (variant === 'dark') {
    return (
      <div className="relative p-6 md:p-8 rounded-xl bg-navy-900 border border-white/10 text-white my-6">
        {tag && (
          <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono tracking-widest uppercase bg-white/10 text-white/70 mb-4">
            {tag}
          </span>
        )}
        <blockquote className="text-lg md:text-xl font-normal leading-relaxed text-stone-200">
          “{quote}”
        </blockquote>
        {authorOrContext && (
          <cite className="block mt-4 text-xs font-mono text-stone-400 not-italic tracking-wider uppercase">
            — {authorOrContext}
          </cite>
        )}
      </div>
    );
  }

  if (variant === 'highlight') {
    return (
      <div className="relative p-6 md:p-8 rounded-xl bg-stone-100/90 border-l-4 border-stone-800 my-6 shadow-sm">
        {tag && (
          <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono tracking-widest uppercase bg-stone-200 text-stone-700 mb-3">
            {tag}
          </span>
        )}
        <blockquote className="text-base md:text-lg text-stone-900 font-medium leading-relaxed">
          “{quote}”
        </blockquote>
        {authorOrContext && (
          <cite className="block mt-3 text-xs font-mono text-stone-500 not-italic tracking-wider uppercase">
            — {authorOrContext}
          </cite>
        )}
      </div>
    );
  }

  return (
    <div className="p-5 rounded-lg border border-stone-200/80 bg-white/60 hover:bg-white hover:border-stone-300 transition-all duration-200">
      {tag && (
        <span className="inline-block text-[10px] font-mono tracking-widest uppercase text-stone-500 mb-2">
          {tag}
        </span>
      )}
      <blockquote className="text-sm md:text-base text-stone-800 leading-relaxed italic">
        “{quote}”
      </blockquote>
      {authorOrContext && (
        <cite className="block mt-2.5 text-xs font-mono text-stone-400 not-italic">
          {authorOrContext}
        </cite>
      )}
    </div>
  );
};
