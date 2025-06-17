import React from 'react'
import MiddleInfo from '../components/MiddleInfo'
import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'
import CompanyCarousel from '../components/CompanyCarousel'

const Home = () => {
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

export default Home
