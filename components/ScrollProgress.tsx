'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  
  useEffect(() => {
    const handleScroll = () => {
      // Show the progress bar after scrolling down a bit
      if (window.scrollY > 200) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink z-50"
        style={{ scaleX, transformOrigin: '0%' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Scroll to top button */}
      <motion.button
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-dark-100 border border-white/10 flex items-center justify-center z-50 shadow-lg"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg 
          className="w-5 h-5 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 10l7-7m0 0l7 7m-7-7v18" 
          />
        </svg>
      </motion.button>
    </>
  )
}
