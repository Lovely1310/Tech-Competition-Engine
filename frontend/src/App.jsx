import React from 'react';
import './index.css';
import { Routes,Route,BrowserRouter } from 'react-router-dom'
import './App.css'
import LandingPage from './Pages/LandingPage'
import BusinessLogin from './Pages/BusinessLogin'
import LoginPage from './components/loginpage/LoginPage';
import Footer from './components/Footer';
import PageAfterLogin from './Pages/PageAfterLogin';
import DeveloperLogin from './components/LoginPage/Developerlogin';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/work/login" element={<BusinessLogin />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<PageAfterLogin />} />
            <Route path="/login/developerlogin" element={<DeveloperLogin />} />
        </Routes>
        <Footer />
    </BrowserRouter>
    
  )
}

export default App;
