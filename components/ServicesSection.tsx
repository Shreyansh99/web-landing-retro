'use client'

import { motion } from 'framer-motion'
import { FaWordpress, FaShopify, FaCode, FaServer, FaBuilding, FaUtensils, FaStore } from 'react-icons/fa'
import { AnimatedButton } from '@/components/ui/animated-button'
import { MotionCard } from '@/components/ui/animated-card'
import { MessageSquare } from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Static Websites',
    description: 'Fast, secure, and SEO-friendly static websites built with modern technologies.',
    icon: <FaCode className="w-8 h-8" />,
    color: 'accent-deepBlue',
    category: 'Websites'
  },
  {
    id: 2,
    title: 'WordPress Development',
    description: 'Custom WordPress themes and plugins for a fully manageable website.',
    icon: <FaWordpress className="w-8 h-8" />,
    color: 'accent-blue',
    category: 'Websites'
  },
  {
    id: 3,
    title: 'Shopify Stores',
    description: 'E-commerce solutions with Shopify for a seamless shopping experience.',
    icon: <FaShopify className="w-8 h-8" />,
    color: 'accent-royal',
    category: 'Websites'
  },
  {
    id: 4,
    title: 'Custom Web Apps',
    description: 'Tailored web applications built to solve your specific business needs.',
    icon: <FaCode className="w-8 h-8" />,
    color: 'accent-lightBlue',
    category: 'Web Apps'
  },
  {
    id: 5,
    title: 'Full-Stack Services',
    description: 'End-to-end solutions including design, development, and hosting.',
    icon: <FaServer className="w-8 h-8" />,
    color: 'accent-navy',
    category: 'Full-Stack'
  },
  {
    id: 6,
    title: 'Real Estate Websites',
    description: 'Specialized websites for real estate agents and property listings.',
    icon: <FaBuilding className="w-8 h-8" />,
    color: 'accent-blue',
    category: 'Niche'
  },
  {
    id: 7,
    title: 'Restaurant Websites',
    description: 'Engaging websites for restaurants with menu and reservation features.',
    icon: <FaUtensils className="w-8 h-8" />,
    color: 'accent-royal',
    category: 'Niche'
  },
  {
    id: 8,
    title: 'E-commerce Solutions',
    description: 'Online stores with payment processing and inventory management.',
    icon: <FaStore className="w-8 h-8" />,
    color: 'accent-lightBlue',
    category: 'Niche'
  }
]

export default function ServicesSection() {
  return (
    <section className="py-24 bg-dark-200 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-noise opacity-5"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent-deepBlue/15 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent-blue/15 blur-[100px] rounded-full"></div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-4">Our <span className="text-gradient-blue">Services</span></h2>
            <p className="subheading text-gray-300">
              We offer a comprehensive range of web development services tailored to your specific needs.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <MotionCard
                variant="deepBlue"
                hover="glow"
                className="h-full p-6"
                whileHover={{
                  y: -10,
                  boxShadow: `0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1), 0 0 15px 2px rgba(var(--${service.color}-rgb)/0.3)`
                }}
                transition={{ duration: 0.3 }}
              >
                <div className={`w-14 h-14 rounded-lg bg-${service.color}/20 flex items-center justify-center mb-4 text-${service.color}`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">{service.title}</h3>
                <p className="body-normal text-gray-400">{service.description}</p>
                <div className="mt-4">
                  <span className={`text-xs font-accent tracking-wide px-2 py-1 rounded-full bg-${service.color}/20 text-${service.color}`}>
                    {service.category}
                  </span>
                </div>
              </MotionCard>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <AnimatedButton
            href="#contact"
            variant="gradientBlue"
            size="lg"
            animation="glow"
            icon={<MessageSquare className="h-4 w-4" />}
          >
            Discuss Your Project
          </AnimatedButton>
        </div>
      </div>
    </section>
  )
}
