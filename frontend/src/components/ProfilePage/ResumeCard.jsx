import React from 'react';

const ResumeCard = ({ resumeLink }) => (
  <div className="bg-white p-6 rounded-xl shadow">
    <h3 className="text-xl font-bold text-gray-900 mb-2">My Resume</h3>
    <a href={resumeLink} className="text-blue-600 underline break-words">
      {resumeLink}
    </a>
  </div>
);

export default ResumeCard;
