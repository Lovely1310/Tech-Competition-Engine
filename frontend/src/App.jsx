import React from 'react';
import './index.css';
import { Routes,Route,BrowserRouter } from 'react-router-dom'
import './App.css'
import LandingPage from './Pages/LandingPage'
import BusinessLogin from './Pages/BusinessLogin'
import LoginPage from './components/LoginPageComponents/LoginPage';
import Footer from './components/Footer';
import DeveloperLogin from './components/LoginPageComponents/DeveloperLogin';
import Apply from './Pages/Apply';
import DeveloperDashboard from  './Pages/Dashboard'


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/work/login" element={<BusinessLogin />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/login/developerlogin" element={<DeveloperLogin />} />
            <Route path='/apply' element={<Apply />}></Route>
            <Route path="/skills-verification" element={<CertifySection />} />
            <Route path="/DeveloperDashboard" element={<DeveloperDashboard />} />

        </Routes>
        <Footer />
    </BrowserRouter>
    
  )
}

export default App;
