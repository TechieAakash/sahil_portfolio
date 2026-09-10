import React from 'react';

interface SectionLabelProps {
  number?: string;
  category: string;
  title?: string;
  dark?: boolean;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  number,
  category,
  title,
  dark = false,
}) => {
  return (
    <div className="mb-6 md:mb-8">
      <div className="flex items-center gap-3 mb-2">
        {number && (
          <span
            className={`font-mono text-xs md:text-sm font-semibold tracking-widest ${
              dark ? 'text-gray-400' : 'text-stone-500'
            }`}
          >
            {number}
          </span>
        )}
        {number && (
          <span
            className={`w-6 h-px ${dark ? 'bg-gray-700' : 'bg-stone-300'}`}
          />
        )}
        <span
          className={`font-mono text-xs tracking-widest2 uppercase font-medium ${
            dark ? 'text-gray-300' : 'text-stone-600'
          }`}
        >
          {category}
        </span>
      </div>
      {title && (
        <h2
          className={`text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight ${
            dark ? 'text-white' : 'text-stone-900'
          }`}
        >
          {title}
        </h2>
      )}
    </div>
  );
};
