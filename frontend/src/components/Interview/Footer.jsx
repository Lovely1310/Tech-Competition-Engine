import React, { useState } from 'react';

const footerLinks = [
  {
    title: 'Products',
    links: [
      'Screen',
      'Interview',
      'Engage',
      'SkillUp',
      'Certified assessments',
      'Plagiarism detection',
      'Real-world questions',
    ],
  },
  {
    title: 'Solutions',
    links: [
      'Set up your skills strategy',
      'Showcase your tech brand',
      'Optimize your hiring process',
      'Mobilize your internal talent',
    ],
  },
  {
    title: 'Resources',
    links: [
      'Blog',
      'Customer stories',
      'Roles directory',
      'Partners',
      'Integrations',
      "What's new",
    ],
  },
  {
    title: 'About us',
    links: [
      'Careers',
      'Status',
      'Trust',
    ],
  },
  {
    title: 'Get started',
    links: [
      'Pricing',
      'Free Trial',
      'Request a demo',
      'Product support',
      'For developers',
    ],
  },
];

const socialLinks = [
  {
    href: 'https://facebook.com',
    label: 'Facebook',
    svg: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5 3.657 9.127 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.127 22 17 22 12"/></svg>
    ),
  },
  {
    href: 'https://linkedin.com',
    label: 'LinkedIn',
    svg: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true"><rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.1"/><path fill="currentColor" d="M7.5 8.5A1.5 1.5 0 1 1 7.5 5a1.5 1.5 0 0 1 0 3Zm-1.25 2.25h2.5v7.25h-2.5v-7.25Zm4.25 0h2.4v1.01h.03c.33-.62 1.14-1.27 2.35-1.27 2.51 0 2.97 1.65 2.97 3.8v4.71h-2.5v-4.18c0-1-.02-2.29-1.4-2.29-1.4 0-1.62 1.09-1.62 2.22v4.25h-2.5v-7.25Z"/></svg>
    ),
  },
  {
    href: 'https://x.com/',
    label: 'X',
    svg: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19.5 4.5h-15A.75.75 0 0 0 3.75 5.25v13.5c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75V5.25a.75.75 0 0 0-.75-.75Zm-2.97 10.47-2.03-2.67-2.03 2.67H7.5l3-3.96-2.85-3.78h2.01l1.89 2.52 1.89-2.52h2.01l-2.85 3.78 3 3.96h-2.01Z"/></svg>
    ),
  },
  {
    href: 'https://instagram.com',
    label: 'Instagram',
    svg: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true"><rect width="24" height="24" rx="6" fill="currentColor" fillOpacity="0.1"/><path fill="currentColor" d="M12 8.5A3.5 3.5 0 1 0 12 15.5a3.5 3.5 0 0 0 0-7Zm0 5.75A2.25 2.25 0 1 1 12 9.75a2.25 2.25 0 0 1 0 4.5Zm4.25-5.88a.88.88 0 1 1-1.75 0 .88.88 0 0 1 1.75 0ZM19 7.25c-.02-.98-.16-1.65-.34-2.22a3.25 3.25 0 0 0-2.04-2.04c-.57-.18-1.24-.32-2.22-.34C13.06 2.5 12.7 2.5 12 2.5s-1.06 0-1.38.02c-.98.02-1.65.16-2.22.34a3.25 3.25 0 0 0-2.04 2.04c-.18.57-.32 1.24-.34 2.22C4.5 7.94 4.5 8.3 4.5 9s0 1.06.02 1.38c.02.98.16 1.65.34 2.22a3.25 3.25 0 0 0 2.04 2.04c.57.18 1.24.32 2.22.34.32.02.68.02 1.38.02s1.06 0 1.38-.02c.98-.02 1.65-.16 2.22-.34a3.25 3.25 0 0 0 2.04-2.04c.18-.57.32-1.24.34-2.22.02-.32.02-.68.02-1.38s0-1.06-.02-1.38Zm-1.5 6.13c-.13.5-.39.96-.76 1.33-.37.37-.83.63-1.33.76-.47.13-1.23.28-2.41.3-.32.01-.66.01-1.35.01s-1.03 0-1.35-.01c-1.18-.02-1.94-.17-2.41-.3a2.75 2.75 0 0 1-1.33-.76 2.75 2.75 0 0 1-.76-1.33c-.13-.47-.28-1.23-.3-2.41C4.5 10.03 4.5 9.69 4.5 9s0-1.03.01-1.35c.02-1.18.17-1.94.3-2.41.13-.5.39-.96.76-1.33.37-.37.83-.63 1.33-.76.47-.13 1.23-.28 2.41-.3.32-.01.66-.01 1.35-.01s1.03 0 1.35.01c1.18.02 1.94.17 2.41.3.5.13.96.39 1.33.76.37.37.63.83.76 1.33.13.47.28 1.23.3 2.41.01.32.01.66.01 1.35s0 1.03-.01 1.35c-.02 1.18-.17 1.94-.3 2.41Z"/></svg>
    ),
  },
];

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const handleToggle = (idx) => {
    setOpenSection(openSection === idx ? null : idx);
  };

  return (
    <footer className="relative overflow-hidden pt-16 pb-8 px-4 md:px-12 text-white" style={{ fontFamily: 'Inter, Playfair Display, serif', background: 'linear-gradient(135deg, #231942 0%,rgb(64, 30, 141) 40%,rgb(42, 19, 53) 100%)' }}>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-12 mb-12">
          {footerLinks.map((col, idx) => (
            <div key={col.title}>
              <button
                className="flex items-center justify-between w-full font-bold text-lg md:text-xl mb-1 text-white/90 tracking-wide drop-shadow-lg focus:outline-none"
                style={{ letterSpacing: '0.02em' }}
                onClick={() => handleToggle(idx)}
                aria-expanded={openSection === idx}
              >
                <span>{col.title}</span>
                <svg
                  className={`ml-2 transition-transform duration-200 ${openSection === idx ? 'rotate-180' : 'rotate-0'}`}
                  width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                >
                  <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {openSection === idx && (
                <ul className="space-y-2 mt-2">
                {col.links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-white/70 hover:text-purple-300 transition-colors duration-200 text-base md:text-lg">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-t border-white/10 pt-6">
          <div className="flex items-center gap-3">
            <span className="text-white/80 font-semibold text-lg tracking-wide">HackerRank</span>
            <span className="text-white/40 text-sm ml-2">© 2025 All Rights Reserved.</span>
          </div>
          <div className="flex flex-col items-end gap-2 w-full md:w-auto">
            <div className="flex items-center gap-4 mb-1 w-full justify-center md:justify-end">
              {socialLinks.map(social => (
                <a key={social.label} href={social.href} aria-label={social.label} className="text-white/70 hover:text-purple-300 text-xl transition-colors" target="_blank" rel="noopener noreferrer">
                  {social.svg}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4 w-full justify-center md:justify-end">
              <a href="#" className="text-white/60 hover:text-purple-300 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-purple-300 text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 