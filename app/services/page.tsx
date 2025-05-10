import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    id: 1,
    title: 'Web Design',
    description: 'Beautiful, responsive websites that look great on any device and help you stand out from the competition.',
    icon: '🎨',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 2,
    title: 'Web Development',
    description: 'Custom web applications and websites built with the latest technologies for optimal performance and scalability.',
    icon: '💻',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 3,
    title: 'E-Commerce Solutions',
    description: 'Powerful online stores that make it easy for customers to browse and buy your products.',
    icon: '🛒',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 4,
    title: 'SEO & Digital Marketing',
    description: 'Strategies to improve your search engine rankings and drive more traffic to your website.',
    icon: '📈',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80'
  }
]

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="container-custom py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">
            We offer a comprehensive range of web development services to help your business succeed online.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-3xl mb-2">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link href="/contact" className="btn-primary inline-block">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Need a custom solution?</h2>
          <p className="text-gray-600 mb-6">
            We specialize in creating custom web solutions tailored to your specific business needs.
            Contact us today to discuss your project.
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Get in Touch
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
