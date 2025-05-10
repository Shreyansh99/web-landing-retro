'use client'

import { motion } from 'framer-motion'

interface FloatingDevicesProps {
  className?: string
}

export default function FloatingDevices({ className = '' }: FloatingDevicesProps) {
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
        r="200"
        fill="url(#gradientCircle)"
        opacity="0.1"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1 }}
      />
      
      <motion.circle
        cx="400"
        cy="300"
        r="150"
        stroke="url(#gradientStroke)"
        strokeWidth="1"
        strokeDasharray="5 5"
        fill="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
      
      {/* Laptop */}
      <motion.g
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.g
          animate={{ 
            y: [0, -10, 0],
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        >
          {/* Laptop Base */}
          <rect x="250" y="320" width="300" height="20" rx="5" fill="#333" />
          
          {/* Laptop Screen */}
          <rect x="270" y="180" width="260" height="140" rx="5" fill="#222" />
          <rect x="280" y="190" width="240" height="120" rx="2" fill="#0A0A0A" />
          
          {/* Screen Content */}
          <rect x="290" y="200" width="100" height="10" rx="2" fill="#8A6FFF" opacity="0.8" />
          <rect x="290" y="220" width="220" height="5" rx="2" fill="#555" />
          <rect x="290" y="235" width="180" height="5" rx="2" fill="#555" />
          <rect x="290" y="250" width="200" height="5" rx="2" fill="#555" />
          <rect x="290" y="265" width="150" height="5" rx="2" fill="#555" />
          <rect x="290" y="280" width="220" height="5" rx="2" fill="#555" />
          
          <rect x="400" y="220" width="30" height="30" rx="2" fill="#00A3FF" opacity="0.6" />
          <rect x="440" y="220" width="30" height="30" rx="2" fill="#FF6FE6" opacity="0.6" />
          <rect x="400" y="260" width="70" height="25" rx="2" fill="#0CFFE1" opacity="0.6" />
        </motion.g>
      </motion.g>
      
      {/* Tablet */}
      <motion.g
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <motion.g
          animate={{ 
            y: [0, -8, 0],
            rotate: [-2, 0, -2]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5
          }}
        >
          {/* Tablet Frame */}
          <rect x="150" y="250" width="120" height="180" rx="10" fill="#333" />
          <rect x="155" y="260" width="110" height="160" rx="5" fill="#222" />
          
          {/* Tablet Content */}
          <rect x="165" y="270" width="90" height="60" rx="2" fill="#0A0A0A" />
          <rect x="165" y="340" width="90" height="70" rx="2" fill="#0A0A0A" />
          
          <rect x="175" y="280" width="40" height="5" rx="2" fill="#8A6FFF" opacity="0.8" />
          <rect x="175" y="295" width="70" height="25" rx="2" fill="#00A3FF" opacity="0.6" />
          
          <rect x="175" y="350" width="70" height="5" rx="2" fill="#555" />
          <rect x="175" y="365" width="50" height="5" rx="2" fill="#555" />
          <rect x="175" y="380" width="70" height="5" rx="2" fill="#555" />
          <rect x="175" y="395" width="40" height="5" rx="2" fill="#555" />
        </motion.g>
      </motion.g>
      
      {/* Phone */}
      <motion.g
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <motion.g
          animate={{ 
            y: [0, -12, 0],
            rotate: [2, 0, 2]
          }}
          transition={{ 
            duration: 4.5, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        >
          {/* Phone Frame */}
          <rect x="530" y="270" width="70" height="140" rx="10" fill="#333" />
          <rect x="535" y="275" width="60" height="130" rx="5" fill="#222" />
          
          {/* Phone Content */}
          <rect x="540" y="285" width="50" height="110" rx="2" fill="#0A0A0A" />
          
          <rect x="545" y="295" width="30" height="5" rx="2" fill="#FF6FE6" opacity="0.8" />
          <rect x="545" y="310" width="40" height="40" rx="2" fill="#0CFFE1" opacity="0.6" />
          
          <rect x="545" y="360" width="40" height="5" rx="2" fill="#555" />
          <rect x="545" y="375" width="30" height="5" rx="2" fill="#555" />
          <rect x="545" y="390" width="40" height="5" rx="2" fill="#555" />
        </motion.g>
      </motion.g>
      
      {/* Floating Elements */}
      <motion.circle
        cx="200"
        cy="200"
        r="15"
        fill="url(#gradientBlue)"
        animate={{ 
          y: [0, -20, 0],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      
      <motion.circle
        cx="600"
        cy="220"
        r="10"
        fill="url(#gradientPurple)"
        animate={{ 
          y: [0, -15, 0],
          x: [0, -10, 0]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.5
        }}
      />
      
      <motion.rect
        x="500"
        cy="400"
        width="20"
        height="20"
        rx="5"
        fill="url(#gradientTeal)"
        animate={{ 
          y: [400, 380, 400],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />
      
      <motion.polygon
        points="220,400 240,430 200,430"
        fill="url(#gradientPink)"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1.5
        }}
      />
      
      {/* Gradients */}
      <defs>
        <linearGradient id="gradientCircle" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00A3FF" />
          <stop offset="100%" stopColor="#8A6FFF" />
        </linearGradient>
        
        <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00A3FF" />
          <stop offset="100%" stopColor="#8A6FFF" />
        </linearGradient>
        
        <linearGradient id="gradientBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00A3FF" />
          <stop offset="100%" stopColor="#0CFFE1" />
        </linearGradient>
        
        <linearGradient id="gradientPurple" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8A6FFF" />
          <stop offset="100%" stopColor="#FF6FE6" />
        </linearGradient>
        
        <linearGradient id="gradientTeal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0CFFE1" />
          <stop offset="100%" stopColor="#00A3FF" />
        </linearGradient>
        
        <linearGradient id="gradientPink" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6FE6" />
          <stop offset="100%" stopColor="#8A6FFF" />
        </linearGradient>
      </defs>
    </motion.svg>
  )
}
