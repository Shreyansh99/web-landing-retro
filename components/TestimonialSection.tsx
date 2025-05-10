'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations'

const testimonials = [
  {
    id: 1,
    quote: "Working with this agency was a game-changer for our business. Our new website has significantly increased our online presence and customer engagement.",
    name: "Sarah Johnson",
    title: "CEO, TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 2,
    quote: "The team delivered a beautiful, functional website that perfectly captures our brand identity. Their attention to detail and responsiveness made the process smooth and enjoyable.",
    name: "Michael Chen",
    title: "Marketing Director, GrowthBrand",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 3,
    quote: "Our e-commerce sales have increased by 40% since launching our new website. The user experience is fantastic, and the site performs beautifully on all devices.",
    name: "Emily Rodriguez",
    title: "Owner, Boutique Elegance",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
  }
]

export default function TestimonialSection() {
  return (
    <section className="py-16 bg-dark-200 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-noise opacity-5"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent-purple/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent-blue/10 blur-[100px] rounded-full"></div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-lg mb-4">What Our <span className="text-gradient-royal">Clients</span> Say</h2>
            <p className="subheading text-gray-300">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
        </motion.div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={testimonial.id} direction={index % 2 === 0 ? 'up' : 'down'}>
              <motion.div
                className="glass-card p-6 h-full"
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-4">
                  <motion.div
                    className="relative w-12 h-12 rounded-full overflow-hidden mr-4"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <div>
                    <h4 className="font-heading font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-gray-300 text-sm font-accent">{testimonial.title}</p>
                  </div>
                </div>

                <blockquote className="text-gray-200 italic font-body">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                  >
                    "{testimonial.quote}"
                  </motion.span>
                </blockquote>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-accent-blue font-heading font-semibold">
            Join our growing list of satisfied clients!
          </p>
        </motion.div>
      </div>
    </section>
  )
}
