import './index.css';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './Pages/LandingPage';
import BusinessLogin from './Pages/BusinessLogin';
import LoginPage from './components/LoginPageComponents/LoginPage';
import DeveloperLogin from './components/LoginPageComponents/DeveloperLogin';
import Apply from './Pages/Apply';
import DeveloperDashboard from './Pages/Dashboard';
import Compete from './components/Competepage/compete';
import CreateContest from './components/Competepage/Create';
import JobBoard from './components/NavBarContents/JobBoard';
import Footer from './components/Footer';
import Onboarding from './components/ApplyPage/Onboarding';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/work/login" element={<BusinessLogin />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/developerlogin" element={<DeveloperLogin />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/DeveloperDashboard" element={<DeveloperDashboard />} />
        <Route path="/Compete" element={<Compete />} />
        <Route path="/Compete/create" element={<CreateContest />} />
        <Route path="/job-board" element={<JobBoard />} />
        <Route path="/onboarding" element={<Onboarding/>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
