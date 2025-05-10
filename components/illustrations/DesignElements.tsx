'use client'

import { motion } from 'framer-motion'

interface DesignElementsProps {
  className?: string
}

export default function DesignElements({ className = '' }: DesignElementsProps) {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Elements */}
      <motion.circle
        cx="400"
        cy="300"
        r="250"
        fill="url(#designGradient)"
        opacity="0.05"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.05 }}
        transition={{ duration: 1 }}
      />

      {/* Grid Lines */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {[...Array(10)].map((_, i) => (
          <motion.line
            key={`horizontal-${i}`}
            x1="150"
            y1={200 + i * 30}
            x2="650"
            y2={200 + i * 30}
            stroke="#8A6FFF"
            strokeWidth="0.5"
            strokeDasharray="5 5"
          />
        ))}

        {[...Array(10)].map((_, i) => (
          <motion.line
            key={`vertical-${i}`}
            x1={200 + i * 50}
            y1="150"
            x2={200 + i * 50}
            y2="450"
            stroke="#00A3FF"
            strokeWidth="0.5"
            strokeDasharray="5 5"
          />
        ))}
      </motion.g>

      {/* Design Elements */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.g
          animate={{
            y: [0, -10, 0],
            rotate: [0, 2, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse" as const
          }}
        >
          {/* Color Palette */}
          <rect x="200" y="200" width="120" height="120" rx="10" fill="#1E1E1E" />
          <rect x="210" y="210" width="20" height="20" rx="5" fill="#00A3FF" />
          <rect x="240" y="210" width="20" height="20" rx="5" fill="#0CFFE1" />
          <rect x="270" y="210" width="20" height="20" rx="5" fill="#8A6FFF" />
          <rect x="300" y="210" width="20" height="20" rx="5" fill="#FF6FE6" />

          <rect x="210" y="240" width="100" height="10" rx="5" fill="#333" />
          <rect x="210" y="260" width="80" height="10" rx="5" fill="#333" />
          <rect x="210" y="280" width="100" height="10" rx="5" fill="#333" />
          <rect x="210" y="300" width="60" height="10" rx="5" fill="#333" />
        </motion.g>
      </motion.g>

      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <motion.g
          animate={{
            y: [0, -15, 0],
            rotate: [0, -2, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse" as const,
            delay: 0.5
          }}
        >
          {/* Typography Sample */}
          <rect x="350" y="200" width="150" height="120" rx="10" fill="#1E1E1E" />
          <rect x="360" y="210" width="80" height="15" rx="2" fill="#00A3FF" />
          <rect x="360" y="235" width="130" height="8" rx="2" fill="#555" />
          <rect x="360" y="250" width="130" height="8" rx="2" fill="#555" />
          <rect x="360" y="265" width="100" height="8" rx="2" fill="#555" />
          <rect x="360" y="290" width="60" height="20" rx="5" fill="#8A6FFF" />
        </motion.g>
      </motion.g>

      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <motion.g
          animate={{
            y: [0, -12, 0],
            rotate: [0, 3, 0]
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            repeatType: "reverse" as const,
            delay: 1
          }}
        >
          {/* UI Components */}
          <rect x="530" y="200" width="120" height="120" rx="10" fill="#1E1E1E" />

          <rect x="540" y="210" width="100" height="25" rx="5" fill="#222" />
          <rect x="550" y="220" width="80" height="5" rx="2" fill="#555" />

          <circle cx="550" cy="260" r="10" fill="#0CFFE1" />
          <rect x="570" y="255" width="70" height="10" rx="2" fill="#555" />

          <circle cx="550" cy="290" r="10" fill="#FF6FE6" />
          <rect x="570" y="285" width="70" height="10" rx="2" fill="#555" />

          <rect x="540" y="310" width="50" height="20" rx="5" fill="#8A6FFF" />
        </motion.g>
      </motion.g>

      {/* Floating Elements */}
      <motion.circle
        cx="180"
        cy="180"
        r="15"
        fill="url(#designGradientBlue)"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse" as const
        }}
      />

      <motion.circle
        cx="620"
        cy="180"
        r="10"
        fill="url(#designGradientPurple)"
        animate={{
          y: [0, -15, 0],
          x: [0, -10, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse" as const,
          delay: 0.5
        }}
      />

      <motion.rect
        x="180"
        y="350"
        width="20"
        height="20"
        rx="5"
        fill="url(#designGradientTeal)"
        animate={{
          y: [350, 330, 350],
          rotate: [0, 10, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse" as const,
          delay: 1
        }}
      />

      <motion.polygon
        points="620,350 640,380 600,380"
        fill="url(#designGradientPink)"
        animate={{
          y: [0, -15, 0],
          rotate: [0, -10, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse" as const,
          delay: 1.5
        }}
      />

      {/* Connecting Lines */}
      <motion.path
        d="M320 260 C350 260, 350 260, 350 260"
        stroke="url(#designGradientLine)"
        strokeWidth="2"
        strokeDasharray="5 5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      />

      <motion.path
        d="M500 260 C515 260, 515 260, 530 260"
        stroke="url(#designGradientLine2)"
        strokeWidth="2"
        strokeDasharray="5 5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
      />

      {/* Gradients */}
      <defs>
        <linearGradient id="designGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00A3FF" />
          <stop offset="100%" stopColor="#8A6FFF" />
        </linearGradient>

        <linearGradient id="designGradientBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00A3FF" />
          <stop offset="100%" stopColor="#0CFFE1" />
        </linearGradient>

        <linearGradient id="designGradientPurple" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8A6FFF" />
          <stop offset="100%" stopColor="#FF6FE6" />
        </linearGradient>

        <linearGradient id="designGradientTeal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0CFFE1" />
          <stop offset="100%" stopColor="#00A3FF" />
        </linearGradient>

        <linearGradient id="designGradientPink" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6FE6" />
          <stop offset="100%" stopColor="#8A6FFF" />
        </linearGradient>

        <linearGradient id="designGradientLine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00A3FF" />
          <stop offset="100%" stopColor="#8A6FFF" />
        </linearGradient>

        <linearGradient id="designGradientLine2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8A6FFF" />
          <stop offset="100%" stopColor="#FF6FE6" />
        </linearGradient>
      </defs>
    </motion.svg>
  )
}
