import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';

interface PdfPageImageProps {
  src: string;
  alt: string;
  pageNumber?: number;
  className?: string;
  onClick?: () => void;
  priority?: boolean;
}

export const PdfPageImage: React.FC<PdfPageImageProps> = ({
  src,
  alt,
  pageNumber,
  className = '',
  onClick,
  priority = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <figure className={`group relative flex flex-col ${className}`}>
      <div
        onClick={onClick}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
        onKeyDown={(e) => {
          if (onClick && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            onClick();
          }
        }}
        className={`relative overflow-hidden rounded-lg bg-stone-100 border border-stone-200/80 shadow-sm transition-all duration-300 ${
          onClick ? 'cursor-pointer hover:shadow-md hover:border-stone-400/80' : ''
        }`}
      >
        {/* Aspect ratio container (16:9 for presentation slides) */}
        <div className="aspect-[16/9] w-full relative">
          {!isLoaded && (
            <div className="absolute inset-0 bg-stone-200/60 animate-pulse flex items-center justify-center">
              <span className="font-mono text-xs text-stone-400 uppercase tracking-widest">
                Loading slide...
              </span>
            </div>
          )}

          <img
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.01] ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Hover Overlay with Fullscreen Indicator */}
          {onClick && (
            <div className="absolute inset-0 bg-stone-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-900/80 text-white text-xs font-mono backdrop-blur-sm shadow-lg">
                <Maximize2 className="w-3.5 h-3.5" />
                View Full Page
              </span>
            </div>
          )}

          {/* Page Badge */}
          {pageNumber && (
            <div className="absolute bottom-2.5 right-2.5 px-2 py-1 rounded bg-stone-900/70 text-white text-[11px] font-mono tracking-wider backdrop-blur-sm">
              P.{String(pageNumber).padStart(2, '0')}
            </div>
          )}
        </div>
      </div>
    </figure>
  );
};
