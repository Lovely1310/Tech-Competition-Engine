import React from 'react'
import MiddleInfo from '../components/MiddleInfo'
import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'

const Home = () => {
  return (
    <section>
    <div className="bg-white">
      <Navigation />
      <HeroSection />
    </div>
        <MiddleInfo />
    </section>
  )
}

export default Home
