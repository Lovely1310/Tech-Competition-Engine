import React, { useState } from 'react';

const PersonalInfo = ({ email, phone, location, onUpdate }) => {
  console.log(email, phone, location);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    email: email,
    country: 'India',
    countryCode: '+91',
    phone: phone,
    location: location,
    visibility: 'Only Me',
  });

  const handleEdit = () => setShowModal(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    onUpdate({
      email: form.email,
      phone: `${form.phone}`,
      location: form.location,
    });
    setShowModal(false);
  };

  return (
    <>
      {/* Info Card */}
      <div className="bg-gray-800 rounded-xl shadow-md p-6 text-white relative">
        <div className="flex justify-between items-start">
          <div>
            <div className="text-base text-gray-300 mb-1">
              📧 <span className="text-white font-medium">{email}</span>
            </div>
            <div className="text-base text-gray-300 mb-1">
              📞 <span className="text-white font-medium">{phone}</span>
            </div>
            <div className="text-base text-gray-300">
              📍 <span className="text-white font-medium">{location}</span>
            </div>
          </div>

          <button
            onClick={handleEdit}
            title="Edit"
            className="p-2 rounded hover:bg-gray-700"
          >
            ✎
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
          <form
            onSubmit={handleSave}
            className="bg-white text-black rounded-xl p-8 w-[420px] max-w-full shadow-xl relative"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Personal Information</h2>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="text-2xl font-bold text-gray-500 hover:text-black"
              >
                ×
              </button>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Email <span className="text-red-500">*</span></label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                type="email"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Country <span className="text-red-500">*</span></label>
              <select
                name="country"
                value={form.country}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                {/* Add more countries as needed */}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Phone Number <span className="text-red-500">*</span></label>
              <div className="flex gap-2">
                <select
                  name="countryCode"
                  value={form.countryCode}
                  onChange={handleChange}
                  className="w-1/3 border border-gray-300 rounded px-2 py-2"
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                </select>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-2/3 border border-gray-300 rounded px-3 py-2"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Current Location</label>
              <input
                name="location"
                value={form.location}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">Who can see this information?</label>
              <select
                name="visibility"
                value={form.visibility}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                <option value="Only Me">🙈 Only Me</option>
                <option value="Everyone">🌍 Everyone</option>
                <option value="Connections">👥 Connections</option>
              </select>
            </div>

            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 font-semibold w-full"
            >
              Save
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default PersonalInfo;
