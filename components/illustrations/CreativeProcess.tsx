'use client'

import { motion } from 'framer-motion'

interface CreativeProcessProps {
  className?: string
}

export default function CreativeProcess({ className = '' }: CreativeProcessProps) {
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
        repeatType: "reverse" as const,
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
      {/* Background */}
      <motion.rect
        x="100"
        y="100"
        width="600"
        height="400"
        rx="20"
        fill="#f5f3ff"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Lightbulb */}
      <motion.path
        d="M400 150 C400 150, 350 180, 350 230 C350 280, 450 280, 450 230 C450 180, 400 150, 400 150 Z"
        fill="#ddd6fe"
        stroke="#7c3aed"
        strokeWidth="3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />

      <motion.path
        d="M385 280 L385 310 L415 310 L415 280"
        stroke="#7c3aed"
        strokeWidth="3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      />

      {/* Light Rays */}
      <motion.path
        d="M400 120 L400 80 M450 150 L480 120 M350 150 L320 120 M330 200 L290 200 M470 200 L510 200"
        stroke="#7c3aed"
        strokeWidth="3"
        strokeLinecap="round"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
      />

      {/* Gears */}
      <motion.circle
        cx="250"
        cy="350"
        r="40"
        fill="#c4b5fd"
        stroke="#7c3aed"
        strokeWidth="3"
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 360 }}
        transition={{
          opacity: { duration: 0.5, delay: 0.8 },
          rotate: { duration: 10, repeat: Infinity, ease: "linear" }
        }}
      />

      <motion.circle
        cx="550"
        cy="350"
        r="40"
        fill="#c4b5fd"
        stroke="#7c3aed"
        strokeWidth="3"
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: -360 }}
        transition={{
          opacity: { duration: 0.5, delay: 0.8 },
          rotate: { duration: 10, repeat: Infinity, ease: "linear" }
        }}
      />

      {/* Gear teeth */}
      <motion.path
        d="M250 310 L250 290 M290 350 L310 350 M250 390 L250 410 M210 350 L190 350 M278 322 L292 308 M278 378 L292 392 M222 378 L208 392 M222 322 L208 308"
        stroke="#7c3aed"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      />

      <motion.path
        d="M550 310 L550 290 M590 350 L610 350 M550 390 L550 410 M510 350 L490 350 M578 322 L592 308 M578 378 L592 392 M522 378 L508 392 M522 322 L508 308"
        stroke="#7c3aed"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      />

      {/* Connecting Line */}
      <motion.path
        d="M290 350 L510 350"
        stroke="#7c3aed"
        strokeWidth="3"
        strokeDasharray="10 5"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.2 }}
      />

      {/* Decorative Elements */}
      <motion.path
        d="M150 450 C200 500, 300 400, 400 450 C500 500, 600 400, 650 450"
        stroke="#7c3aed"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.5 }}
      />
    </motion.svg>
  )
}
