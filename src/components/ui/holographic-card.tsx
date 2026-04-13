import React, { useRef, useState, useEffect } from 'react';

interface HolographicCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const HolographicCard: React.FC<HolographicCardProps> = ({ title, description, icon }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const requestRef = useRef<number>();
  const timeRef = useRef<number>(Math.random() * 1000);

  const animate = () => {
    if (!isHovered && cardRef.current) {
      timeRef.current += 0.015;
      const card = cardRef.current;
      const rect = card.getBoundingClientRect();
      
      const x = (Math.sin(timeRef.current) * 0.5 + 0.5) * rect.width;
      const y = (Math.cos(timeRef.current * 0.8) * 0.5 + 0.5) * rect.height;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 30;
      const rotateY = (centerX - x) / 30;

      card.style.setProperty('--x', `${x}px`);
      card.style.setProperty('--y', `${y}px`);
      card.style.setProperty('--bg-x', `${(x / rect.width) * 100}%`);
      card.style.setProperty('--bg-y', `${(y / rect.height) * 100}%`);
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
    }
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isHovered]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovered(true);
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
    card.style.setProperty('--bg-x', `${(x / rect.width) * 100}%`);
    card.style.setProperty('--bg-y', `${(y / rect.height) * 100}%`);
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <style>{`
        .holo-card-wrapper {
          transition: transform 0.2s ease-out;
          transform-style: preserve-3d;
        }
        .holo-glow {
          position: absolute;
          inset: 0;
          z-index: 10;
          border-radius: inherit;
          mix-blend-mode: overlay;
          pointer-events: none;
          opacity: 0.6;
          transition: opacity 0.3s ease;
          background: radial-gradient(
            800px circle at var(--x, 50%) var(--y, 50%), 
            rgba(255,255,255,0.4),
            transparent 40%
          ),
          linear-gradient(
            120deg, 
            transparent 0%, 
            rgba(255, 215, 0, 0.1) 20%, 
            rgba(0, 255, 255, 0.1) 40%, 
            rgba(255, 0, 255, 0.1) 60%, 
            transparent 80%
          );
          background-position: var(--bg-x, 50%) var(--bg-y, 50%);
          background-size: 200% 200%;
        }
        .holo-card-wrapper:hover .holo-glow {
          opacity: 1;
        }
        .holo-content {
          transform: translateZ(30px);
        }
      `}</style>
      <div 
        className="holo-card-wrapper relative bg-white border border-gray-200 rounded-3xl p-10 shadow-sm hover:shadow-2xl cursor-default overflow-hidden h-full"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="holo-content relative z-20 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-6 shadow-inner">
            {icon}
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            {description}
          </p>
        </div>
        <div className="holo-glow"></div>
      </div>
    </>
  );
};
