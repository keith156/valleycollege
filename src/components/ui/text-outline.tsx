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
        <defs>
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
            <stop offset="50%" stopColor="rgba(255,255,255,1)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
            <animate 
              attributeName="x1" 
              from="-100%" 
              to="100%" 
              dur="3s" 
              repeatCount="indefinite" 
            />
            <animate 
              attributeName="x2" 
              from="0%" 
              to="200%" 
              dur="3s" 
              repeatCount="indefinite" 
            />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Floating animation wrapper */}
        <motion.g
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Subtle inner glow for depth */}
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="8"
            fill="none"
            className="font-black tracking-tighter"
            style={{ fontSize: "120px", fontFamily: "'Poppins', sans-serif" }}
          >
            {text}
          </text>

          {/* Glowing pulse layer */}
          <motion.text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            animate={{
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            stroke="white"
            strokeWidth="0.5"
            fill="none"
            filter="url(#glow)"
            className="font-black tracking-tighter"
            style={{ fontSize: "120px", strokeLinejoin: "round", strokeLinecap: "round", fontFamily: "'Poppins', sans-serif" }}
          >
            {text}
          </motion.text>

          {/* Main Clean solid outline with drawing animation */}
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
            whileHover={{ scale: 1.02 }}
            stroke="url(#textGradient)"
            strokeWidth="1.5"
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
