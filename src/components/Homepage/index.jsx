import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import About from './AboutSection'
import Section from './Section'
import Footer from './Footer'
import ContactSection from './contact'

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Section />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Homepage
