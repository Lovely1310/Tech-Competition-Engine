import React from 'react'
import MiddleInfo from '../components/LandingPage/MiddleInfo'
import Navigation from '../components/LandingPage/Navigation'
import HeroSection from '../components/LandingPage/HeroSection'
import CompanyCarousel from '../components/LandingPage/CompanyCarousel'

const LandingPage = () => {
  return (
    <section>
    <div className="bg-white">
      <Navigation />
      <HeroSection />
    </div>
        <MiddleInfo />
        <CompanyCarousel />
    
    </section>
  )
}

export default LandingPage
