import React from 'react';
import { motion } from 'motion/react';

interface TextOutlineProps {
  text: string;
  className?: string;
}

export function TextOutline({ text, className = "" }: TextOutlineProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg 
        viewBox="0 0 800 200" 
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Floating animation wrapper */}
        <motion.g
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
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
            style={{ fontSize: "120px", fontFamily: "'Poppins', sans-serif" }}
          >
            {text}
          </text>

          {/* Rewrite animation layer */}
          <motion.text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
            animate={{ 
              strokeDashoffset: [1000, 0, 0, 1000],
              opacity: [0, 1, 1, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              times: [0, 0.4, 0.7, 1],
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.02 }}
            stroke="white"
            strokeWidth="2"
            fill="none"
            className="font-black tracking-tighter cursor-default"
            style={{ fontSize: "120px", strokeLinejoin: "round", strokeLinecap: "round", fontFamily: "'Poppins', sans-serif" }}
          >
            {text}
          </motion.text>
        </motion.g>
      </svg>
    </div>
  );
}
