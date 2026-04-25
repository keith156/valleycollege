import React from 'react';
import { motion } from 'motion/react';

interface TextOutlineProps {
  text: string;
  className?: string;
}

export function TextOutline({ text, className = "" }: TextOutlineProps) {
  return (
    <svg 
      viewBox="0 0 1200 250" 
      className={`w-full h-full ${className}`}
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Subtle base layer for readability */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="rgba(255,255,255,0.05)"
        strokeWidth="4"
        fill="none"
        className="font-black tracking-tighter"
        style={{ fontSize: "180px", fontFamily: "'Poppins', sans-serif" }}
      >
        {text}
      </text>

      {/* Rewrite animation layer */}
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        initial={{ strokeDasharray: 5000, strokeDashoffset: 5000 }}
        animate={{ 
          strokeDashoffset: [5000, 0, 5000],
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.02 }}
        stroke="white"
        strokeWidth="2"
        fill="none"
        className="font-black tracking-tighter cursor-default"
        style={{ fontSize: "180px", strokeLinejoin: "round", strokeLinecap: "round", fontFamily: "'Poppins', sans-serif" }}
      >
        {text}
      </motion.text>
    </svg>
  );
}
