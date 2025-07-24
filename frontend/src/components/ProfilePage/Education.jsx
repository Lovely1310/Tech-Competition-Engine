import React from 'react';

const Education = ({ education = [] }) => (
  <div className="bg-white p-6 rounded-xl shadow">
    <div className="flex justify-between items-center">
      <h3 className="text-xl font-bold text-gray-900">🎓 Education</h3>
      <span className="text-blue-600 cursor-pointer">+ Add Education</span>
    </div>
    {education.length === 0 ? (
      <p className="mt-2 text-gray-600">We believe in skills over pedigree; but go ahead add your education for the recruiters who don’t.</p>
    ) : (
      <ul className="list-disc ml-6 mt-2">{education.map((edu, i) => <li key={i}>{edu}</li>)}</ul>
    )}
  </div>
);

export default Education;
