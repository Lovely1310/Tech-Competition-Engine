import './index.css';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './Pages/LandingPage';
import BusinessLogin from './Pages/BusinessLogin';
import LoginPage from './components/LoginPageComponents/LoginPage';
import DeveloperLogin from './components/LoginPageComponents/DeveloperLogin';
import Apply from './Pages/Apply';
import DeveloperDashboard from  './Pages/Dashboard';
import Compete from './components/Competepage/compete';
import CreateContest from './components/Competepage/Create';
import JobBoard from './components/NavBarContents/JobBoard';
import Certify from './components/Dashboard/Certifications/Certify';
import Onboarding from './components/ApplyPage/Onboarding';
import Footer from './components/Footer'
import Bookmarks from './Pages/Bookmarks';
import Profile from './Pages/Profile';
<<<<<<< HEAD

=======
import Pricing from './Pages/Pricing';
import ResumeBuilder from './Pages/ResumeBuilder';
import AdministrationPage from './Pages/Administration';
import Interview from './Pages/Interview';
import SignUp from './Pages/SignUp';
import Submission from './Pages/Submission';
import EngagePage from './Pages/Engage/EngagePage';
>>>>>>> 97fc10cf43b43364d9911fffdbd4a246a43ee2aa

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
            <Route path="/dashboard" element={<DeveloperDashboard />} />
            <Route path="/compete" element={<Compete />} />
            <Route path="/Compete/create" element={<CreateContest />} />
            <Route path="/profile" element={<Profile />} />
<<<<<<< HEAD
=======
            <Route path="/resumebuilder" element={<ResumeBuilder />} />
            <Route path="/administration" element={<AdministrationPage />} />
            <Route path="/interview" element={<Interview />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/submissions" element={<Submission />} />
>>>>>>> 97fc10cf43b43364d9911fffdbd4a246a43ee2aa


            <Route path="*" element={<h1>404 Not Found</h1>} />
            <Route path="/job-board" element={<JobBoard />} />
           <Route path="/certify" element={<Certify />} />
            <Route path='/apply' element={<Apply />}></Route>
            <Route path="/apply/onboarding" element={<Onboarding />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
            <Route path="/job-board" element={<JobBoard />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
<<<<<<< HEAD
=======
            <Route path="/pricing" element={<Pricing />} />
             <Route path="/engage" element={<EngagePage />} />
>>>>>>> 97fc10cf43b43364d9911fffdbd4a246a43ee2aa

        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
