'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface StaggerContainerProps {
  children: ReactNode
  delay?: number
  staggerChildren?: number
  className?: string
}

export default function StaggerContainer({
  children,
  delay = 0,
  staggerChildren = 0.1,
  className = '',
}: StaggerContainerProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren: delay,
      },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className={className}
    >
      {children}
    </motion.div>
  )
}
