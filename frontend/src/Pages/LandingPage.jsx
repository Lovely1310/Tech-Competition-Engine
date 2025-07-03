import React from 'react'
import MiddleInfo from '../components/LandingPage/MiddleInfo'
import Navigation from '../components/LandingPage/Navigation'
import HeroSection from '../components/LandingPage/HeroSection'
import CompanyCarousel from '../components/LandingPage/CompanyCarousel'
import DeveloperSkills from '../components/LandingPage/DeveloperSkills'


const LandingPage = () => {
  return (
    <section>
    <div className="bg-white">
      <Navigation />
      <HeroSection />
    </div>
        <MiddleInfo />
        <DeveloperSkills />
        <CompanyCarousel />
    
    </section>
  )
}

export default LandingPage
