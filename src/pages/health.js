import React from 'react'
import Navbar from '../components/healthcare/Navbar'
import Hero from '../components/healthcare/Hero'
import About from '../components/healthcare/About'
import Reports from '../components/healthcare/Reports'
import Features from '../components/healthcare/Features'

import { Lora, Open_Sans, Poppins } from 'next/font/google'
import Footer from '@/components/healthcare/Footer'

const open_sans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open_sans',
})
const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
})

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: "600",
  variable: '--font-poppins',
})
const HealthCare = () => {
  return (
    <div className={`${poppins.variable} ${open_sans.variable} ${lora.variable}`}>
       <Navbar />
       <Hero />
       <About />
       <Reports />
       <Features />
       <Footer />
    </div>
  )
}

export default HealthCare
