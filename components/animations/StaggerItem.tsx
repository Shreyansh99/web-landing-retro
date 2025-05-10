'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface StaggerItemProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  className?: string
}

export default function StaggerItem({
  children,
  direction = 'up',
  className = '',
}: StaggerItemProps) {
  const directionOffset = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
    none: { x: 0, y: 0 },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      ...directionOffset[direction],
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0], // Smooth easing
      },
    },
  }

  return (
    <motion.div
      variants={itemVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
