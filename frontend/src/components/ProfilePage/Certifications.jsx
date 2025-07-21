import React from 'react';

const Certifications = ({ certifications = [] }) => (
  <div className="bg-white p-6 rounded-xl shadow">
    <h3 className="text-xl font-bold text-gray-900 mb-2">📄 My Certifications</h3>
    {certifications.length === 0 ? (
      <p>You have not earned any certificates yet. <span className="text-blue-600 cursor-pointer">Get Certified</span></p>
    ) : (
      <ul className="list-disc ml-6">{certifications.map((cert, i) => <li key={i}>{cert}</li>)}</ul>
    )}
  </div>
);

export default Certifications;
