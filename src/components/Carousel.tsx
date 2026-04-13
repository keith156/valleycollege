import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Carousel({ children, autoPlayInterval = 5000 }: { children: React.ReactNode, autoPlayInterval?: number }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (!autoPlayInterval) return;
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        // If we reached the end, scroll back to start
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: clientWidth, behavior: 'smooth' });
        }
      }
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlayInterval]);

  return (
    <div className="relative group px-4 sm:px-8">
      <button 
        onClick={() => scroll('left')} 
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl rounded-full p-2 md:p-3 text-primary opacity-0 group-hover:opacity-100 transition-all hover:scale-110 focus:opacity-100 border border-gray-100"
        aria-label="Scroll left"
      >
        <ChevronLeft size={24} />
      </button>
      
      <div 
        ref={scrollRef} 
        className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 pb-8 pt-4" 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {children}
      </div>

      <button 
        onClick={() => scroll('right')} 
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl rounded-full p-2 md:p-3 text-primary opacity-0 group-hover:opacity-100 transition-all hover:scale-110 focus:opacity-100 border border-gray-100"
        aria-label="Scroll right"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
