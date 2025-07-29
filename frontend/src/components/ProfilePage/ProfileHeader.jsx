<<<<<<< HEAD
import React from 'react';

const ProfileHeader = ({ name, username }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <div className="w-16 h-16 rounded-full bg-gray-200 flex justify-center items-center text-gray-500 text-3xl">
          {name?.charAt(0) || 'U'}
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{name} 🇮🇳</h2>
          <p className="text-gray-600">{username}</p>
        </div>
      </div>
      <i className="ri-edit-line text-gray-500 text-xl"></i>
    </div>
=======
import React, { useState } from 'react';

const ProfileHeader = ({ firstName, lastName, username, headline, onUpdate }) => {
  const initials = (firstName?.[0] || 'A').toUpperCase();
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ firstName, lastName, headline });

  const handleEdit = () => {
    setForm({ firstName, lastName, headline });
    setShowModal(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    onUpdate(form);
    setShowModal(false);
  };

  return (
    <>
      <div className="bg-gray-800 rounded-xl shadow-md p-6 text-white relative">
        <div className="flex gap-4 items-start">
          {/* Avatar */}
          <div className="w-14 h-14 bg-gray-600 text-white font-semibold text-3xl rounded-full flex items-center justify-center select-none">
            {initials}
          </div>

          {/* Name */}
          <div className="flex flex-col max-w-[200px] overflow-hidden">
            <span className="text-2xl font-bold truncate" title={firstName}>
              {firstName}
            </span>
            <span className="text-2xl font-bold truncate" title={lastName}>
              {lastName}
            </span>
            <span className="text-xl mt-1" role="img" aria-label="flag">🇮🇳</span>
          </div>

          {/* Edit Button */}
          <button
            onClick={handleEdit}
            title="Edit"
           className="absolute top-4 right-4 p-2 rounded hover:bg-gray-700"
          >
            ✎
          </button>
        </div>

        {/* Headline */}
        <div className="text-gray-300 text-sm mt-4 min-h-[22px] tracking-wide">
          {headline || "Nothing to show here"}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <form
            onSubmit={handleSave}
            className="bg-white rounded-2xl shadow-xl w-[420px] max-w-full p-8 text-black relative"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Edit Profile</h2>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="text-2xl font-bold w-10 h-10 border border-black rounded hover:bg-gray-100"
              >
                ×
              </button>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">First Name</label>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                required
                className="w-full border border-gray-400 rounded px-3 py-2 text-base"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Last Name</label>
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                required
                className="w-full border border-gray-400 rounded px-3 py-2 text-base"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">Headline</label>
              <input
                name="headline"
                value={form.headline}
                onChange={handleChange}
                className="w-full border border-gray-400 rounded px-3 py-2 text-base"
              />
            </div>

            <button
              type="submit"
              className="bg-green-700 text-white font-semibold py-2 px-6 rounded hover:bg-green-800 float-right"
            >
              Save
            </button>
            <div className="clear-both" />
          </form>
        </div>
      )}
    </>
>>>>>>> 97fc10cf43b43364d9911fffdbd4a246a43ee2aa
  );
};

export default ProfileHeader;
