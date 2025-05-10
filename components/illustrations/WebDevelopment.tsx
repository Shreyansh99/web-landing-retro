'use client'

import { motion } from 'framer-motion'

interface WebDevelopmentProps {
  className?: string
}

export default function WebDevelopment({ className = '' }: WebDevelopmentProps) {
  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  }

  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  }

  return (
    <motion.svg
      className={className}
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="initial"
      animate="animate"
      variants={floatVariants}
    >
      {/* Background Elements */}
      <motion.rect
        x="100"
        y="100"
        width="600"
        height="400"
        rx="20"
        fill="#f0f9ff"
        stroke="#0ea5e9"
        strokeWidth="2"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />

      {/* Monitor */}
      <motion.rect
        x="200"
        y="150"
        width="400"
        height="250"
        rx="10"
        fill="#ffffff"
        stroke="#0c4a6e"
        strokeWidth="3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />

      {/* Monitor Stand */}
      <motion.path
        d="M400 400 L350 450 L450 450 L400 400 Z"
        fill="#0c4a6e"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      />

      {/* Code Lines */}
      <motion.path
        d="M250 180 L350 180 M250 200 L320 200 M250 220 L380 220 M250 240 L300 240"
        stroke="#7dd3fc"
        strokeWidth="3"
        strokeLinecap="round"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
      />

      <motion.path
        d="M250 280 L350 280 M250 300 L320 300 M250 320 L380 320 M250 340 L300 340"
        stroke="#8b5cf6"
        strokeWidth="3"
        strokeLinecap="round"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5 }}
      />

      {/* Floating Elements */}
      <motion.circle
        cx="500"
        cy="200"
        r="30"
        fill="#ddd6fe"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          y: [-5, 5, -5],
        }}
        transition={{ 
          opacity: { duration: 0.5, delay: 0.8 },
          y: { duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
        }}
      />

      <motion.rect
        x="480"
        y="280"
        width="60"
        height="60"
        rx="10"
        fill="#bae6fd"
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ 
          opacity: 1,
          rotate: 0,
          y: [0, 8, 0],
        }}
        transition={{ 
          opacity: { duration: 0.5, delay: 1 },
          rotate: { duration: 0.5, delay: 1 },
          y: { duration: 4, delay: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
        }}
      />

      {/* Decorative Elements */}
      <motion.path
        d="M150 500 C200 450, 300 550, 350 500 C400 450, 500 550, 550 500 C600 450, 700 550, 750 500"
        stroke="#0ea5e9"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.2 }}
      />
    </motion.svg>
  )
}
