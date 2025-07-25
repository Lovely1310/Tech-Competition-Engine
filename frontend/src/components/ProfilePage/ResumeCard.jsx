import React, { useState, useEffect } from 'react';

const LOCAL_KEY = 'profile_resume_data';

const ResumeCard = () => {
  const [resume, setResume] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [visibility, setVisibility] = useState('Only Me');

  // Load from local storage on mount
  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_KEY);
    if (stored) {
      const data = JSON.parse(stored);
      setResume(data.resume);
      setVisibility(data.visibility || 'Only Me');
    }
  }, []);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf' && file.size <= 5 * 1024 * 1024) {
      const resumeData = {
        name: file.name,
        fileUrl: URL.createObjectURL(file),
      };
      setResume(resumeData);
    } else {
      alert('Please upload a valid PDF file under 5MB');
    }
  };

  const handleSave = () => {
    const data = { resume, visibility };
    localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
    setShowModal(false);

    // TODO: Send `data` to backend API when connected
  };

  const handleDelete = () => {
    setResume(null);
    localStorage.removeItem(LOCAL_KEY);
  };

  return (
    <div className="bg-gray-800 text-white p-6 rounded-xl shadow-md">
      <div className="flex justify-between items-start">
        <h2 className="text-xl font-semibold">My Resume</h2>
        {resume ? (
          <div className="flex gap-3">
            <span className="text-gray-300 text-sm">{visibility}</span>
            <button onClick={() => setShowModal(true)} className="ri-eye-off-line hover:text-white" />
            <button onClick={handleDelete} className="ri-delete-bin-line hover:text-red-400" />
          </div>
        ) : (
          <button
            onClick={() => setShowModal(true)}
            className="text-blue-400 hover:underline text-sm"
          >
            + Add Resume
          </button>
        )}
      </div>

      <div className="mt-2 text-gray-300 text-sm">
        {resume ? (
          <a href={resume.fileUrl} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">
            {resume.name}
          </a>
        ) : (
          <p>Add your resume here</p>
        )}
      </div>

      {/* Resume Upload Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-md rounded-lg p-6 text-black relative">
            <h3 className="text-lg font-semibold mb-4">Add your Resume</h3>

            {/* Drop Zone */}
            <div className="border border-dashed border-gray-400 p-6 rounded-md text-center mb-4">
              <p className="text-sm mb-2">Drag and drop your resume here</p>
              <p className="text-xs text-gray-500">Supported formats: PDF | Max size: 5 MB</p>
              <div className="my-3 text-sm text-gray-600">— OR —</div>
              <label className="inline-block bg-green-600 text-white px-4 py-2 rounded cursor-pointer">
                Choose file
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
              {resume && <p className="mt-2 text-sm">{resume.name}</p>}
            </div>

            {/* Visibility Select */}
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium">Who can see your resume?</label>
              <select
                value={visibility}
                onChange={(e) => setVisibility(e.target.value)}
                className="w-full border rounded px-3 py-2 text-sm"
              >
                <option>Only Me</option>
                <option>Anyone</option>
                <option>Recruiters Only</option>
              </select>
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center">
              <button
                onClick={() => setShowModal(false)}
                className="text-sm text-gray-500 hover:underline"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-green-600 text-white px-5 py-2 rounded"
              >
                Save
              </button>
            </div>

            {/* Close Modal Icon */}
            <button
              className="absolute top-4 right-4 text-xl"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeCard;
