import React from 'react';

const PersonalInfo = ({ email, phone, location }) => (
  <div className="bg-white p-6 text-gray-900 rounded-xl shadow space-y-3">
    <h3 className="text-xl font-bold">Personal Information</h3>
    <p>📧 {email}</p>
    <p>📞 {phone}</p>
    <p>📍 {location}</p>
  </div>
);

export default PersonalInfo;
