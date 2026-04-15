import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

export function Typewriter({ text, speed = 100, delay = 2000, className = "" }: TypewriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleTyping = () => {
      if (!isDeleting) {
        if (index < text.length) {
          setDisplayText((prev) => prev + text.charAt(index));
          setIndex((prev) => prev + 1);
          timeout = setTimeout(handleTyping, speed);
        } else {
          timeout = setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        if (index > 0) {
          setDisplayText((prev) => prev.slice(0, -1));
          setIndex((prev) => prev - 1);
          timeout = setTimeout(handleTyping, speed / 2);
        } else {
          setIsDeleting(false);
          timeout = setTimeout(handleTyping, speed);
        }
      }
    };

    timeout = setTimeout(handleTyping, speed);
    return () => clearTimeout(timeout);
  }, [index, isDeleting, text, speed, delay]);

  return (
    <div className={`inline-flex items-center ${className}`}>
      <span>{displayText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="w-1 h-12 md:h-20 bg-white ml-1 inline-block"
      />
    </div>
  );
}
