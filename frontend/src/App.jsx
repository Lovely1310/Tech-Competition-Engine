import './index.css';
import { Routes,Route,BrowserRouter } from 'react-router-dom'
import './App.css'
import LandingPage from './Pages/LandingPage'
import BusinessLogin from './Pages/BusinessLogin'
import LoginPage from './components/LoginPageComponents/LoginPage';
import Footer from './components/Footer';
import DeveloperLogin from './components/LoginPageComponents/DeveloperLogin';
import Apply from './Pages/Apply';
import DeveloperDashboard from  './Pages/Dashboard';
import Compete from './components/Competepage/compete';
import CreateContest from './components/Competepage/Create';
import JobBoard from './components/NavBarContents/JobBoard';
import CertificationPage from './components/Certifypage/Certify';


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/work/login" element={<BusinessLogin />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/login/developerlogin" element={<DeveloperLogin />} />
            <Route path='apply' element={<Apply />}></Route>
            <Route path="/DeveloperDashboard" element={<DeveloperDashboard />} />
            <Route path="/Compete" element={<Compete />} />
            <Route path="/Compete/create" element={<CreateContest />} />

            <Route path="*" element={<h1>404 Not Found</h1>} />
            <Route path="/job-board" element={<JobBoard />} />
            <Route path="/Certify" element={<CertificationPage />} />
        </Routes>
        <Footer />
    </BrowserRouter>
    
  )
}

export default App;
