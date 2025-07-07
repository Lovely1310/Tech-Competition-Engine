import { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../../public/logo.svg';

const Footer = () => {
  const sections = [
    { title: 'Services', links: ['Branding', 'Design', 'Marketing', 'Advertisement'] },
    { title: 'Company', links: ['About us', 'Contact', 'Jobs', 'Press kit'] },
    { title: 'Social', links: ['Twitter', 'Instagram', 'Facebook', 'GitHub'] },
    { title: 'Explore', links: ['Features', 'Enterprise', 'Security', 'Pricing'] },
    { title: 'Legal', links: ['Terms of use', 'Privacy policy', 'Cookie policy'] },
    { title: 'Social', links: ['Twitter', 'Instagram', 'Facebook', 'GitHub'] },
    { title: 'Explore', links: ['Features', 'Enterprise', 'Security', 'Pricing'] },
    { title: 'Apps', links: ['Mac', 'Windows', 'iPhone', 'Android'] }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <footer className="relative text-gray-800 overflow-hidden">
      <style>{`
        @layer utilities {
          @keyframes footerGradient {
            0%   { background-position: 0% 50%; }
            25%  { background-position: 50% 100%; }
            50%  { background-position: 100% 50%; }
            75%  { background-position: 50% 0%; }
            100% { background-position: 0% 50%; }
          }
          .light-gradient-shuffle {
            animation: footerGradient 20s ease-in-out infinite;
            background: linear-gradient(270deg, #F8FAFC, #E0F2FE, #FDE68A, #CFFAFE, #FEF9C3);
            background-size: 500% 500%;
          }
        }
      `}</style>

      {/* Background Layers */}
      <div className="absolute inset-0 light-gradient-shuffle z-0" />
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-0" />

      {/* Footer Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center w-full pb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Grid Sections */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-y-10 gap-x-8 px-6 py-10 text-center sm:text-left">
          {sections.map((section, index) => (
            <div key={index} className="flex flex-col items-center sm:items-start">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full sm:w-auto flex justify-between sm:block text-base font-semibold text-gray-900 mb-2 sm:mb-3"
              >
                {section.title}
                <span className="sm:hidden">{openIndex === index ? '−' : '+'}</span>
              </button>
              <ul
                className={`space-y-1 text-sm transition-all duration-300 ease-in-out ${
                  openIndex === index || typeof window !== 'undefined' && window.innerWidth >= 640
                    ? 'block'
                    : 'hidden sm:block'
                }`}
              >
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-700 hover:text-blue-600 hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Brand - moved below dropdowns */}
        <motion.div
          className="flex flex-col gap-3 pt-6 sm:pt-10 items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={logo} alt="Tech Competition Engine Logo" className="h-16 w-auto" />
          <p className="text-2xl font-bold text-gray-800 pt-2 text-center">
            Tech Competition Engine
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
