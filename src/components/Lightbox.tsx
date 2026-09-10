import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export interface LightboxItem {
  src: string;
  title: string;
  pageNumber?: number;
  caption?: string;
}

interface LightboxProps {
  isOpen: boolean;
  items: LightboxItem[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const currentItem = items[currentIndex];

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    } else {
      onNavigate(items.length - 1);
    }
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex < items.length - 1) {
      onNavigate(currentIndex + 1);
    } else {
      onNavigate(0);
    }
  }, [currentIndex, items.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handlePrev, handleNext, onClose]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 md:p-8 select-none transition-opacity duration-300"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between text-white/80 border-b border-white/10 pb-4 z-10">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-white/50 tracking-widest uppercase">
            PDF Page {currentItem.pageNumber ? String(currentItem.pageNumber).padStart(2, '0') : String(currentIndex + 1).padStart(2, '0')} / {items.length}
          </span>
          <span className="text-white/30">•</span>
          <span className="font-medium text-sm text-white/90 truncate max-w-xs md:max-w-md">
            {currentItem.title}
          </span>
        </div>

        <button
          onClick={onClose}
          aria-label="Close full view"
          className="p-2 rounded-full hover:bg-white/10 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/40"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Stage */}
      <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
        <img
          src={currentItem.src}
          alt={currentItem.title}
          className="max-h-[82vh] max-w-full object-contain rounded shadow-2xl transition-transform duration-200"
          loading="eager"
        />

        {/* Previous Button */}
        {items.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous slide"
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-white text-white hover:text-black border border-white/20 transition-all focus:outline-none"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Next Button */}
        {items.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next slide"
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-white text-white hover:text-black border border-white/20 transition-all focus:outline-none"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Bottom Information */}
      <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 pt-3 border-t border-white/10 z-10 gap-2">
        <div className="font-mono text-center sm:text-left">
          {currentItem.caption || 'High-Resolution PDF Portfolio Original Artifact'}
        </div>
        <div className="flex items-center gap-4 text-white/40 font-mono text-[11px]">
          <span>Use [← / →] to navigate</span>
          <span>•</span>
          <span>[ESC] to close</span>
        </div>
      </div>
    </div>
  );
};
