import React from 'react';
import HeroSection from '../components/Interview/HeroSection';
import CompanyLogos from '../components/Interview/CompanyLogos';
import FeaturesSection from '../components/Interview/FeaturesSection';
import ProductDetails from '../components/Interview/ProductDetails';
import ResourcesAndContact from '../components/Interview/ResourcesAndContact';
import Navigation from '../components/LandingPage/Navigation';

function Interview() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <CompanyLogos />
      <FeaturesSection />
      <ProductDetails />
      <ResourcesAndContact />
    </>
  );
}

export default Interview;