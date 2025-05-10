'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ScrollReveal } from '@/components/animations'

const faqs = [
  {
    id: 1,
    question: 'What services do you offer?',
    answer: 'We offer a comprehensive range of web development services including static websites, WordPress development, Shopify stores, custom web applications, and full-stack solutions tailored to various industries like real estate, restaurants, and e-commerce.'
  },
  {
    id: 2,
    question: 'How long does it take to build a website?',
    answer: 'The timeline varies depending on the complexity of the project. A simple static website can be completed in 2-3 weeks, while more complex web applications may take 2-3 months. We will provide a detailed timeline during our initial consultation.'
  },
  {
    id: 3,
    question: 'What is your pricing structure?',
    answer: 'Our pricing is project-based and depends on the scope, complexity, and specific requirements. We offer transparent pricing with no hidden fees. Contact us for a custom quote tailored to your needs.'
  },
  {
    id: 4,
    question: 'Do you offer website maintenance?',
    answer: 'Yes, we offer ongoing maintenance and support packages to ensure your website remains secure, up-to-date, and performing optimally. Our maintenance plans include regular updates, security monitoring, and technical support.'
  },
  {
    id: 5,
    question: 'Can you help with website hosting?',
    answer: 'Absolutely! As part of our full-stack services, we can recommend and set up the best hosting solution for your website based on your specific needs, traffic expectations, and budget.'
  },
  {
    id: 6,
    question: 'Do you work with clients internationally?',
    answer: 'Yes, we work with clients from around the world. Our digital workflow and communication tools allow us to collaborate effectively regardless of geographic location or time zones.'
  }
]

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-dark-200 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-noise opacity-5"></div>

      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-4">Frequently Asked <span className="text-gradient">Questions</span></h2>
            <p className="text-xl text-gray-300">
              Find answers to common questions about our services and process.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">
                <motion.button
                  className={`w-full text-left p-5 rounded-lg flex justify-between items-center ${
                    activeIndex === index ? 'bg-dark-100' : 'bg-dark-100/50 hover:bg-dark-100/80'
                  } border border-white/10 transition-colors duration-300`}
                  onClick={() => toggleFAQ(index)}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.span>
                </motion.button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 bg-dark-100/30 rounded-b-lg border-t-0 border border-white/5">
                        <p className="text-gray-300">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <ScrollReveal>
            <p className="text-gray-300 mb-6">
              Still have questions? We are here to help!
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#contact" className="btn-accent">
                Contact Us
              </a>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
