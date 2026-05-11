import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Carousel({ children, autoPlayInterval = 5000, continuousScroll = false }: { children: React.ReactNode, autoPlayInterval?: number, continuousScroll?: boolean }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    isHoveredRef.current = isHovered;
  }, [isHovered]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (continuousScroll) {
      let animationId: number;
      const step = () => {
        if (scrollRef.current && !isHoveredRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
          
          if (scrollLeft + clientWidth >= scrollWidth - 1) {
            scrollRef.current.scrollLeft = 0;
          } else {
            scrollRef.current.scrollLeft += 1.2; // Increased speed for visibility
          }
        }
        animationId = requestAnimationFrame(step);
      };
      animationId = requestAnimationFrame(step);
      return () => cancelAnimationFrame(animationId);
    } else if (autoPlayInterval) {
      const interval = setInterval(() => {
        if (scrollRef.current && !isHoveredRef.current) {
          const { scrollLeft, scrollWidth, clientWidth, children } = scrollRef.current;
          // Find the width of the first visible child to scroll by one item
          const itemWidth = (children[0] as HTMLElement)?.offsetWidth + 24 || clientWidth; // 24 is gap-6
          
          if (scrollLeft + clientWidth >= scrollWidth - 10) {
            scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            scrollRef.current.scrollBy({ left: itemWidth, behavior: 'smooth' });
          }
        }
      }, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlayInterval, continuousScroll]);

  return (
    <div 
      className="relative group px-4 sm:px-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <button 
        onClick={() => scroll('left')} 
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl rounded-full p-2 md:p-3 text-primary opacity-0 group-hover:opacity-100 transition-all hover:scale-110 focus:opacity-100 border border-gray-100"
        aria-label="Scroll left"
      >
        <ChevronLeft size={24} />
      </button>
      
      <div 
        ref={scrollRef} 
        className={`flex overflow-x-auto ${!continuousScroll ? 'snap-x snap-mandatory' : ''} hide-scrollbar gap-6 pb-8 pt-4`} 
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
