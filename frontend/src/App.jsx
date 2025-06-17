import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
    </div>
  );
}

export default App;