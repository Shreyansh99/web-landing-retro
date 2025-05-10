'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'Social Media Growth Platform',
    description: 'A comprehensive platform for managing and growing social media presence.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
    category: 'Web App',
    technologies: ['React', 'Node.js', 'MongoDB']
  },
  {
    id: 2,
    title: 'Restaurant Booking System',
    description: 'Online reservation system for a high-end restaurant chain.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
    category: 'Web App',
    technologies: ['Next.js', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 3,
    title: 'E-commerce Fashion Store',
    description: 'Full-featured online store for a fashion brand with payment processing.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
    category: 'E-commerce',
    technologies: ['Shopify', 'Liquid', 'JavaScript']
  },
  {
    id: 4,
    title: 'Real Estate Listings',
    description: 'Property listing website with advanced search and filtering options.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
    category: 'Website',
    technologies: ['WordPress', 'PHP', 'MySQL']
  }
]

export default function PortfolioSection() {
  const [activeProject, setActiveProject] = useState<number | null>(null)

  return (
    <section className="py-24 bg-dark-300 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-noise opacity-5"></div>
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-accent-yellow/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-accent-pink/10 blur-[100px] rounded-full"></div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-4">Recent <span className="text-gradient">Projects</span></h2>
            <p className="subheading text-gray-300">
              Take a look at some of our recent work that showcases our expertise and creativity.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative group overflow-hidden rounded-lg"
                onHoverStart={() => setActiveProject(project.id)}
                onHoverEnd={() => setActiveProject(null)}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative aspect-video overflow-hidden rounded-lg border border-white/10">
                  <Image
                    src={project.image || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80'}
                    alt={project.title}
                    width={600}
                    height={340}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-dark-400/90 to-transparent p-6 flex flex-col justify-end"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <span className="text-sm font-accent tracking-wide px-2 py-1 rounded-full bg-accent-deepBlue/20 text-accent-deepBlue w-fit mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-heading font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm font-body">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-accent tracking-wide px-2 py-1 rounded-full bg-white/10 text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <motion.div
                      className="absolute top-4 right-4"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <button className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/20 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#portfolio" className="btn-outline">
              View All Projects
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
