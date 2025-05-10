'use client'

import { motion } from 'framer-motion'
import { FadeIn } from '@/components/animations'
import { AnimatedButton } from '@/components/ui/animated-button'
import { ArrowRight } from 'lucide-react'

interface CTASectionProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

export default function CTASection({ title, description, buttonText, buttonLink }: CTASectionProps) {
  return (
    <section className="py-16 bg-gradient-to-r from-accent-navy via-accent-deepBlue to-accent-blue text-white relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white opacity-10"
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white opacity-10"
        animate={{
          x: [0, -40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Glass overlay */}
      <div className="absolute inset-0 backdrop-blur-sm bg-gradient-to-b from-transparent to-black/10"></div>

      <div className="container-custom text-center relative z-10">
        <FadeIn className="max-w-3xl mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>

          <motion.p
            className="text-xl mb-8"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.4
            }}
            viewport={{ once: true }}
          >
            <AnimatedButton
              href={buttonLink}
              variant="neon"
              size="xl"
              animation="glow"
              icon={<ArrowRight className="h-4 w-4" />}
              iconPosition="right"
            >
              {buttonText}
            </AnimatedButton>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  )
}
