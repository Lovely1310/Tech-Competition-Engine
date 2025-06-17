<<<<<<< HEAD
import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import './index.css';
=======
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'

>>>>>>> b0d65ac9fd0779aa7073ae8feee8bb9f48e38122

function App() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
    </div>
  );
=======
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
    
  )
>>>>>>> b0d65ac9fd0779aa7073ae8feee8bb9f48e38122
}

export default App;