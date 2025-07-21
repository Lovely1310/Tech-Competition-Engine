import React from 'react';

const SkillsSection = ({ skills = [] }) => (
  <div className="bg-white p-6 rounded-xl shadow">
    <div className="flex justify-between items-center">
      <h3 className="text-xl font-bold text-gray-900">🛠 My Skills</h3>
      <span className="text-blue-600 cursor-pointer">+ Add Skills</span>
    </div>
    {skills.length === 0 ? (
      <p className="mt-2 text-gray-600">Add all the relevant skills that speak on your behalf</p>
    ) : (
      <div className="mt-2 flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-sm">{skill}</span>
        ))}
      </div>
    )}
  </div>
);

export default SkillsSection;
