import React from 'react';
import { motion } from 'framer-motion';
import logo from '../../public/logo.svg';

const Footer = () => {
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

      {/* 🌈 Gradient Background + Soft Glass Effect */}
      <div className="absolute inset-0 light-gradient-shuffle z-0" />
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-0" />

      {/* 🌐 Footer Content */}
      <motion.div
        className="relative z-10 flex flex-col pb-10 items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="footer sm:footer-horizontal grid-rows-2 border-t border-gray-300 p-10 text-gray-700">
          {/* YOUR NAVIGATION GROUPS */}
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Social</h6>
            <a className="link link-hover">Twitter</a>
            <a className="link link-hover">Instagram</a>
            <a className="link link-hover">Facebook</a>
            <a className="link link-hover">GitHub</a>
          </nav>
          <nav>
            <h6 className="footer-title">Explore</h6>
            <a className="link link-hover">Features</a>
            <a className="link link-hover">Enterprise</a>
            <a className="link link-hover">Security</a>
            <a className="link link-hover">Pricing</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <nav>
            <h6 className="footer-title">Social</h6>
            <a className="link link-hover">Twitter</a>
            <a className="link link-hover">Instagram</a>
            <a className="link link-hover">Facebook</a>
            <a className="link link-hover">GitHub</a>
          </nav>
          <nav>
            <h6 className="footer-title">Explore</h6>
            <a className="link link-hover">Features</a>
            <a className="link link-hover">Enterprise</a>
            <a className="link link-hover">Security</a>
            <a className="link link-hover">Pricing</a>
          </nav>
          <nav>
            <h6 className="footer-title">Apps</h6>
            <a className="link link-hover">Mac</a>
            <a className="link link-hover">Windows</a>
            <a className="link link-hover">iPhone</a>
            <a className="link link-hover">Android</a>
          </nav>
        </div>

        {/* 🔥 LOGO + TAGLINE */}
        <motion.div
          className="flex flex-col gap-3 pt-10 items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* SVG LOGO */}
          <img src={logo} alt="Tech Competition Engine Logo" className="h-16 w-auto" />
          <p className="text-2xl font-bold text-gray-800 pt-2">Tech Competition Engine</p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
