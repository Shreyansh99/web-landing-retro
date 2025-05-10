'use client'

import { motion } from 'framer-motion'
import { FloatingDevices } from '@/components/illustrations'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations'

interface HeroProps {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
}

export default function Hero({ subtitle, ctaText, ctaLink }: HeroProps) {
  return (
    <div className="relative text-white overflow-hidden min-h-[90vh] flex items-center">
      {/* Retro grid background is already applied to body */}

      {/* Retro decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-accent-primary rotate-45 opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 border-2 border-accent-secondary rotate-12 opacity-30"></div>
      <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-accent-tertiary rounded-full blur-sm opacity-30"></div>
      <div className="absolute bottom-1/4 left-1/4 w-8 h-8 bg-accent-primary rounded-full blur-sm opacity-30"></div>

      <div className="container-custom relative z-10 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <StaggerContainer className="max-w-3xl">
            <StaggerItem>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="px-4 py-1 border-2 border-accent-primary bg-dark-100 text-sm font-accent tracking-wider mb-6 inline-block retro-blink">
                  &gt; WEB_DESIGN.EXE
                </span>
              </motion.div>
              <h1 className="heading-xl mb-6">
                <span className="text-retro">RETRO</span> WEB DESIGN
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="body-large text-white mb-8 font-accent text-xl">
                {subtitle}
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={ctaLink}
                    className="btn-primary inline-block"
                  >
                    {ctaText}
                  </a>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="/services"
                    className="btn-retro inline-block"
                  >
                    Our Services
                  </a>
                </motion.div>
              </div>
            </StaggerItem>

            {/* Testimonial snippet */}
            <StaggerItem>
              <div className="mt-12 p-4 max-w-md retro-card retro-scan">
                <div className="flex items-start gap-3">
                  <div className="text-accent-secondary text-2xl font-accent">★★★★★</div>
                  <div>
                    <p className="text-sm text-white font-accent">"Working with them was a game-changer for our business. Our new website has significantly increased our online presence."</p>
                    <p className="text-xs text-accent-primary mt-2 font-accent">— Sarah J., CEO at TechStart</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <FadeIn delay={0.4} direction="left">
            <motion.div
              className="relative"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <div className="pixel-border p-4 bg-dark-100">
                <FloatingDevices className="w-full h-auto max-h-[500px]" />

                {/* Retro badges */}
                <motion.div
                  className="absolute top-4 right-4 retro-effect px-3 py-1 text-xs font-accent"
                  animate={{
                    y: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1
                  }}
                >
                  <span className="text-accent-primary">✓</span> Responsive Design
                </motion.div>

                <motion.div
                  className="absolute bottom-4 left-4 retro-effect px-3 py-1 text-xs font-accent"
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.5
                  }}
                >
                  <span className="text-accent-secondary">✓</span> SEO Optimized
                </motion.div>

                <motion.div
                  className="absolute top-4 left-4 retro-effect px-3 py-1 text-xs font-accent"
                  animate={{
                    y: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1.5
                  }}
                >
                  <span className="text-accent-tertiary">✓</span> Retro UI/UX
                </motion.div>

                <motion.div
                  className="absolute bottom-4 right-4 retro-effect px-3 py-1 text-xs font-accent"
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 2
                  }}
                >
                  <span className="text-accent-primary">✓</span> Fast Performance
                </motion.div>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </div>
  )
}
