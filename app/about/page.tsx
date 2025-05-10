'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { motion } from 'framer-motion'
import PageTransition from '@/components/PageTransition'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations'

export default function About() {
  return (
    <>
      <Navbar />
      <PageTransition>
        <main className="container-custom py-12">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h1 className="text-4xl font-bold mb-6">About Our Agency</h1>
            </ScrollReveal>

            <ScrollReveal className="mb-12">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
                  alt="Our team"
                  width={1200}
                  height={600}
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </motion.div>
            </ScrollReveal>

            <div className="prose prose-lg max-w-none">
              <StaggerContainer>
                <StaggerItem>
                  <motion.div
                    whileInView={{ x: [50, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
                    <p className="mb-6">
                      Founded in 2020, our agency was born from a passion for creating exceptional digital experiences.
                      We believe that a great website is more than just beautiful design—it's about creating intuitive,
                      functional experiences that help businesses connect with their customers and achieve their goals.
                    </p>
                  </motion.div>
                </StaggerItem>

                <StaggerItem>
                  <motion.div
                    whileInView={{ x: [-50, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
                    <p className="mb-6">
                      We take a collaborative, client-focused approach to every project. We start by understanding your
                      business, your goals, and your audience. Then, we craft a custom solution that meets your specific
                      needs and helps you stand out in your industry.
                    </p>
                  </motion.div>
                </StaggerItem>

                <StaggerItem>
                  <motion.div
                    whileInView={{ x: [50, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
                    <p className="mb-6">
                      Our team consists of experienced designers, developers, and digital strategists who are passionate
                      about creating exceptional digital experiences. We bring together diverse skills and perspectives
                      to deliver innovative solutions for our clients.
                    </p>
                  </motion.div>
                </StaggerItem>

                <StaggerItem>
                  <motion.div
                    whileInView={{ y: [50, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
                    <ul className="list-disc pl-6 mb-6">
                      {[
                        { value: 'Quality', desc: 'We never compromise on quality and attention to detail.' },
                        { value: 'Innovation', desc: 'We stay at the forefront of web technology and design trends.' },
                        { value: 'Collaboration', desc: 'We work closely with our clients throughout the process.' },
                        { value: 'Integrity', desc: 'We\'re honest, transparent, and committed to doing what\'s right.' },
                        { value: 'Results', desc: 'We focus on delivering solutions that drive real business results.' }
                      ].map((item, index) => (
                        <motion.li
                          key={item.value}
                          className="mb-2"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          viewport={{ once: true }}
                        >
                          <strong>{item.value}:</strong> {item.desc}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </div>
        </main>
      </PageTransition>
      <Footer />
    </>
  )
}
