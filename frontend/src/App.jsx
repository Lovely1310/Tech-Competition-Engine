import './index.css';
import { Routes,Route,BrowserRouter } from 'react-router-dom'
import './App.css'
import LandingPage from './Pages/LandingPage'
import BusinessLogin from './Pages/BusinessLogin'
import LoginPage from './components/LoginPageComponents/LoginPage';
import Footer from './components/Footer';
import DeveloperLogin from './components/LoginPageComponents/DeveloperLogin';
import Apply from './Pages/Apply';
<<<<<<< HEAD
import CertifySection from './components/pageAfterlogin/CertifySection';
import DeveloperDashboard from  './Pages/Dashboard';
import Compete from './components/Competepage/compete';
import CreateContest from './components/Competepage/Create';
=======
import DeveloperDashboard from  './Pages/Dashboard'
import JobBoard from './components/NavBarContents/JobBoard';

>>>>>>> d92c1621e03cb611850672090f5fb80f4ef44091

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
<<<<<<< HEAD
            <Route path="/Compete" element={<Compete />} />
            <Route path="/Compete/create" element={<CreateContest />} />

=======
            <Route path="*" element={<h1>404 Not Found</h1>} />
            <Route path="/job-board" element={<JobBoard />} />
>>>>>>> d92c1621e03cb611850672090f5fb80f4ef44091
        </Routes>
        <Footer />
    </BrowserRouter>
    
  )
}

export default App;
