import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import ServicesSection from '@/components/ServicesSection'
import PortfolioSection from '@/components/PortfolioSection'
import TestimonialSection from '@/components/TestimonialSection'
// import FAQSection from '@/components/FAQSection'
import CTASection from '@/components/CTASection'
// Removed ShadcnShowcase component
import PageTransition from '@/components/PageTransition'
import SmoothScroll from '@/components/SmoothScroll'
import ScrollProgress from '@/components/ScrollProgress'
import { DesignElements } from '@/components/illustrations'

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <ScrollProgress />
      <Navbar />
      <PageTransition>
        <Hero
          title="Building Digital Experiences That Matter"
          subtitle="We create beautiful, functional websites and web applications that help businesses grow and succeed online."
          ctaText="Get Started"
          ctaLink="/contact"
        />
        <div className="relative">
          <div className="absolute right-0 top-0 w-64 h-64 opacity-20 -z-10">
            <DesignElements className="w-full h-full" />
          </div>
          <ServicesSection />
        </div>
        <PortfolioSection />
        <TestimonialSection />
        <CTASection
          title="Let's Build Something Amazing Together"
          description="Ready to elevate your digital presence? Contact us today to discuss your project and get a free consultation."
          buttonText="Start Your Project"
          buttonLink="/contact"
        />
      </PageTransition>
      <Footer />
    </>
  )
}
