import React from 'react';
import { motion } from 'motion/react';

interface TextOutlineProps {
  text: string;
  className?: string;
}

export function TextOutline({ text, className = "" }: TextOutlineProps) {
  return (
    <svg 
      viewBox="0 0 800 200" 
      className={`w-full h-full ${className}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        initial={{ strokeDasharray: 1000, strokeDashoffset: 1000, fill: "rgba(255, 255, 255, 0)" }}
        animate={{ 
          strokeDashoffset: [1000, 0, 0, 1000],
          fill: ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.1)", "rgba(255, 255, 255, 0)"]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.4, 0.6, 1]
        }}
        stroke="white"
        strokeWidth="2"
        className="font-black tracking-tighter"
        style={{ fontSize: "120px" }}
      >
        {text}
      </motion.text>
    </svg>
  );
}
