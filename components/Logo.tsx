'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
}

export default function Logo({ className = '', size = 'md', showText = true }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  }

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  }

  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <motion.div
        className={`relative ${sizeClasses[size]}`}
        whileHover={{ rotate: 10 }}
        transition={{ type: 'spring', stiffness: 300, damping: 10 }}
      >
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Main square */}
          <motion.rect
            x="2"
            y="2"
            width="36"
            height="36"
            fill="#FF6B4A"
            stroke="#FFFFFF"
            strokeWidth="2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />

          {/* Decorative elements */}
          <motion.rect
            x="8"
            y="8"
            width="24"
            height="24"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeDasharray="4 2"
            fill="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />

          <motion.path
            d="M20 10 L26 20 L20 30 L14 20 Z"
            fill="white"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />

          {/* Animated particles */}
          <motion.circle
            cx="28"
            cy="16"
            r="2"
            fill="white"
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />

          <motion.circle
            cx="12"
            cy="16"
            r="1.5"
            fill="white"
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.5
            }}
          />

          <motion.circle
            cx="20"
            cy="32"
            r="1.5"
            fill="white"
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1
            }}
          />

          {/* Gradient definition */}
          <defs>
            <linearGradient id="retroGradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FF6B4A" />
              <stop offset="100%" stopColor="#FFD166" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {showText && (
        <motion.span
          className={`font-bold font-retro tracking-wide text-accent-primary ${textSizeClasses[size]}`}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          RETRO
        </motion.span>
      )}
    </Link>
  )
}
