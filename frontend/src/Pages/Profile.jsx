import React, { useEffect, useState } from 'react';
import ProfileHeader from '../components/ProfilePage/ProfileHeader';
import ProfileProgress from '../components/ProfilePage/ProfileProgress';
import DeveloperNavbar from '../components/DeveloperNavbar';
import PersonalInfo from '../components/ProfilePage/PersonalInfo';
import ResumeCard from '../components/ProfilePage/ResumeCard';
import BadgeSection from '../components/ProfilePage/BadgeSection';
import Certifications from '../components/ProfilePage/Certifications';
import Experience from '../components/ProfilePage/Experience';
import Education from '../components/ProfilePage/Education';
import LinksSection from '../components/ProfilePage/LinksSection';
import SkillsSection from '../components/ProfilePage/SkillsSection';


// ...other imports

const LOCAL_KEY = 'profile_header_data';

const Profile = () => {
  const [profile, setProfile] = useState(() => {
  const stored = localStorage.getItem(LOCAL_KEY);
  return stored
    ? JSON.parse(stored)
    : {
        firstName: 'Ajay',
        lastName: 'Khan',
        username: '@ajaykhan6433',
        headline: 'Nothing to show here',
        email: 'ajaykhan6433@gmail.com',
        phone: '+91-9717965986',
        location: 'Gurugram',
      };
});


  const updateProfile = (newData) => {
    const updated = { ...profile, ...newData };
    setProfile(updated);
    localStorage.setItem(LOCAL_KEY, JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen pt-24 pb-8 bg-gradient-to-br from-[#11141c] via-[#13161e] to-[#191c23] font-['Roboto',sans-serif] transition-all duration-300">
      <DeveloperNavbar />
      <div className="max-w-7xl px-4 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT COLUMN */}
        <div className="space-y-6">
          <ProfileHeader {...profile} onUpdate={updateProfile} />
          {/* other components... */}
          <PersonalInfo
            email={profile.email}
            phone={profile.phone}
            location={profile.location}

            onUpdate={updateProfile}
          />
        </div>
        {/* RIGHT COLUMN */}
        <div className="lg:col-span-2 space-y-6">
         <ProfileProgress completion={profile.profileCompletion} />
          <BadgeSection badges={profile.badges} />
          <Certifications certifications={profile.certifications} />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />
          <LinksSection links={profile.links} />
          <SkillsSection skills={profile.skills} />
        </div>

{/* <ResumeCard /> */}
 


      </div>
    </div>
  );
};

export default Profile;
