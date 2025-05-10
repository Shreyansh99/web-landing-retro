'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaTwitter, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: 'Static Websites', href: '/services#static' },
    { name: 'WordPress Development', href: '/services#wordpress' },
    { name: 'Shopify Stores', href: '/services#shopify' },
    { name: 'Custom Web Apps', href: '/services#webapps' },
  ]

  const niches = [
    { name: 'Real Estate', href: '/services#realestate' },
    { name: 'Restaurants', href: '/services#restaurants' },
    { name: 'E-commerce', href: '/services#ecommerce' },
  ]

  const socialLinks = [
    { icon: <FaTwitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <FaInstagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
    { icon: <FaGithub className="w-5 h-5" />, href: '#', label: 'GitHub' },
    { icon: <FaLinkedinIn className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-dark-300 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-noise opacity-5"></div>

      {/* Grid lines */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="h-full w-full border-[0.5px] border-white/20 grid grid-cols-6">
          <div className="border-r border-white/20 h-full"></div>
          <div className="border-r border-white/20 h-full"></div>
          <div className="border-r border-white/20 h-full"></div>
          <div className="border-r border-white/20 h-full"></div>
          <div className="border-r border-white/20 h-full"></div>
        </div>
      </div>

      <div className="container-custom py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="text-2xl font-bold font-display text-white flex items-center gap-2 mb-4">
              <span className="text-accent-yellow">●</span> Polo
            </Link>
            <p className="text-gray-400 mb-6">
              Creating beautiful, functional websites and web applications that help businesses grow and succeed online.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="bg-dark-200 hover:bg-dark-100 p-2 rounded-full transition-colors duration-300"
                  aria-label={social.label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-accent-yellow transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="text-xs">→</span> {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Industries</h3>
            <ul className="space-y-3">
              {niches.map((niche) => (
                <li key={niche.name}>
                  <Link
                    href={niche.href}
                    className="text-gray-400 hover:text-accent-blue transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="text-xs">→</span> {niche.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mb-4 mt-8 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/portfolio"
                  className="text-gray-400 hover:text-accent-purple transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="text-xs">→</span> Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-accent-purple transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="text-xs">→</span> About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <address className="text-gray-400 not-italic space-y-3">
              <p className="flex items-start gap-2">
                <span className="text-accent-yellow">●</span> 123 Web Agency Street, Suite 456, San Francisco, CA 94107
              </p>
              <p className="flex items-start gap-2">
                <span className="text-accent-blue">●</span> info@poloagency.com
              </p>
              <p className="flex items-start gap-2">
                <span className="text-accent-purple">●</span> (123) 456-7890
              </p>
            </address>

            <div className="mt-8">
              <Link href="/contact" className="btn-primary py-2 px-4 inline-block">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Polo Agency. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-white transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
