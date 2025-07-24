import React from 'react';

const LinksSection = ({ links = [] }) => (
  <div className="bg-white p-6 rounded-xl shadow">
    <div className="flex justify-between items-center">
      <h3 className="text-xl font-bold text-gray-900">🔗 Links</h3>
      <span className="text-blue-600 cursor-pointer">+ Add Links</span>
    </div>
    <ul className="mt-4">
      {links.map((link, i) => (
        <li key={i} className="flex items-center gap-2">
          <span className="font-semibold">{link.label}:</span>
          <a href={link.url} target="_blank" rel="noreferrer" className="text-blue-600 break-all">
            {link.url}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default LinksSection;
