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
      {/* Subtle inner glow for depth */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth="5"
        fill="none"
        className="font-black tracking-tighter"
        style={{ fontSize: "120px" }}
      >
        {text}
      </text>
      {/* Clean solid outline */}
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        initial={{ strokeDasharray: 2000, strokeDashoffset: 2000 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ 
          duration: 3,
          ease: "easeOut",
        }}
        stroke="white"
        strokeWidth="1.5"
        fill="none"
        className="font-black tracking-tighter"
        style={{ fontSize: "120px", strokeLinejoin: "round", strokeLinecap: "round" }}
      >
        {text}
      </motion.text>
    </svg>
  );
}
