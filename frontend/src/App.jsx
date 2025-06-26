import React from 'react';
import './index.css';
import { Routes,Route,BrowserRouter } from 'react-router-dom'
import './App.css'
import LandingPage from './Pages/LandingPage'
import BusinessLogin from './Pages/BusinessLogin'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/work/login" element={<BusinessLogin.jsx />} />
        </Routes>
    </BrowserRouter>
    
  )
}

export default App;
