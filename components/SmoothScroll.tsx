'use client'

import { useEffect } from 'react'

export default function SmoothScroll() {
  useEffect(() => {
    // Add smooth scrolling to all links
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')
      
      if (!link) return
      
      const href = link.getAttribute('href')
      
      // Check if the link is an anchor link
      if (href && href.startsWith('#') && href.length > 1) {
        e.preventDefault()
        
        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)
        
        if (targetElement) {
          // Smooth scroll to the element
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
          
          // Update URL without page reload
          window.history.pushState(null, '', href)
        }
      }
    }
    
    // Add event listener to the document
    document.addEventListener('click', handleLinkClick)
    
    // Add smooth scrolling to the whole page
    document.documentElement.style.scrollBehavior = 'smooth'
    
    return () => {
      document.removeEventListener('click', handleLinkClick)
      document.documentElement.style.scrollBehavior = ''
    }
  }, [])
  
  return null
}
