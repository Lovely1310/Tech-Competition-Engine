import React from 'react';
import ProfileHeader from '../components/ProfilePage/ProfileHeader';
import PersonalInfo from '../components/ProfilePage/PersonalInfo';
import ResumeCard from '../components/ProfilePage/ResumeCard';
import EEOSummary from '../components/ProfilePage/EEOSummary';
import ProfileProgress from '../components/ProfilePage/ProfileProgress';
import BadgeSection from '../components/ProfilePage/BadgeSection';
import Certifications from '../components/ProfilePage/Certifications';
import Experience from '../components/ProfilePage/Experience';
import Education from '../components/ProfilePage/Education';
import LinksSection from '../components/ProfilePage/LinksSection';
import SkillsSection from '../components/ProfilePage/SkillsSection';

import { mockProfileData } from '../MockProfileData';

const Profile = () => {
  const user = mockProfileData;

  return (
    <div className="bg-[#f8f9fb] min-h-screen p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT COLUMN */}
        <div className="space-y-6">
          <ProfileHeader name={user.name} username={user.username} />
          <PersonalInfo email={user.email} phone={user.phone} location={user.location} />
          <ResumeCard resumeLink={user.resumeLink} />
          <EEOSummary />
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-2 space-y-6">
          <ProfileProgress completion={user.profileCompletion} />
          <BadgeSection badges={user.badges} />
          <Certifications certifications={user.certifications} />
          <Experience experience={user.experience} />
          <Education education={user.education} />
          <LinksSection links={user.links} />
          <SkillsSection skills={user.skills} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
