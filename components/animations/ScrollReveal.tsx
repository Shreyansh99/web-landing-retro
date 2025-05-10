'use client'

import { motion, useInView } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  threshold?: number
  className?: string
}

export default function ScrollReveal({
  children,
  direction = 'up',
  threshold = 0.1,
  className = '',
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: threshold })

  const directionOffset = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 },
    none: { x: 0, y: 0 },
  }

  const variants = {
    hidden: {
      opacity: 0,
      ...directionOffset[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0], // Smooth easing
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
