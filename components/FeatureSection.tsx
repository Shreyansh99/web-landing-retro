'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations'
import { CreativeProcess } from '@/components/illustrations'

const features = [
  {
    id: 1,
    title: 'Beautiful Design',
    description: 'We create visually stunning websites that capture your brand identity and engage your audience.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Responsive Development',
    description: 'Our websites work flawlessly on all devices, from desktop computers to smartphones and tablets.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Performance Optimization',
    description: 'We build fast-loading websites that provide an excellent user experience and improve your SEO rankings.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'SEO Friendly',
    description: 'Our websites are built with search engine optimization in mind, helping you rank higher in search results.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  },
  {
    id: 5,
    title: 'Easy Content Management',
    description: 'Update your website content easily with our user-friendly content management systems.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    )
  },
  {
    id: 6,
    title: 'Ongoing Support',
    description: 'We provide reliable support and maintenance to ensure your website continues to perform at its best.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  }
]

export default function FeatureSection() {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <ScrollReveal>
              <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
              <p className="text-xl text-gray-600 mb-6">
                We deliver high-quality web solutions that help your business stand out and succeed online.
              </p>
              <p className="text-gray-600">
                Our team of experts combines creativity, technical expertise, and industry best practices to create websites that not only look great but also perform exceptionally well.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="left">
            <CreativeProcess className="w-full h-auto max-h-[400px]" />
          </ScrollReveal>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <StaggerItem key={feature.id}>
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md h-full"
                whileHover={{
                  y: -10,
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="text-primary-600 mb-4"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
