import React from 'react';
import HeroSection from './components/HeroSection';
import CompanyLogos from './components/CompanyLogos';
import FeaturesSection from './components/FeaturesSection';
import ProductDetails from './components/ProductDetails';
import ResourcesAndContact from './components/ResourcesAndContact';
import Footer from './components/Footer';

function Interview() {
  return (
    <>
      <HeroSection />
      <CompanyLogos />
      <FeaturesSection />
      <ProductDetails />
      <ResourcesAndContact />
      <Footer />
    </>
  );
}

export default Interview;