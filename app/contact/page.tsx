'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'Web Design'
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')
    
    try {
      // In a real application, you would send this data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: 'Web Design'
      })
    } catch (error) {
      setSubmitError('There was an error submitting your form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <>
      <Navbar />
      <main className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <p className="text-gray-600 mb-6">
                Have a project in mind or want to learn more about our services? 
                Fill out the form and we'll get back to you as soon as possible.
              </p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Our Office</h3>
                <p className="text-gray-600">
                  123 Web Agency Street<br />
                  Suite 456<br />
                  San Francisco, CA 94107
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
                <p className="text-gray-600">
                  Email: info@youragency.com<br />
                  Phone: (123) 456-7890
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 9:00 AM - 5:00 PM<br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>
            
            <div>
              {submitSuccess ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Thank You!</h3>
                  <p className="text-green-700">
                    Your message has been sent successfully. We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">Phone (optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="service" className="block text-gray-700 font-medium mb-1">Service Interested In</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="Web Design">Web Design</option>
                      <option value="Web Development">Web Development</option>
                      <option value="E-Commerce">E-Commerce</option>
                      <option value="SEO">SEO & Digital Marketing</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    ></textarea>
                  </div>
                  
                  {submitError && (
                    <div className="mb-4 text-red-600 text-sm">
                      {submitError}
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
