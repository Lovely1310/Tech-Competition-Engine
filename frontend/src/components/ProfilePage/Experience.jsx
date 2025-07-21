import React from 'react';

const Experience = ({ experience = [] }) => (
  <div className="bg-white p-6 rounded-xl shadow">
    <div className="flex justify-between items-center">
      <h3 className="text-xl font-bold text-gray-900">💼 Work Experience</h3>
      <span className="text-blue-600 cursor-pointer">+ Add Work Experience</span>
    </div>
    {experience.length === 0 ? (
      <p className="mt-2 text-gray-600">Add your work experience. Don’t forget to add those internships as well.</p>
    ) : (
      <ul className="list-disc ml-6 mt-2">{experience.map((exp, idx) => <li key={idx}>{exp}</li>)}</ul>
    )}
  </div>
);

export default Experience;
