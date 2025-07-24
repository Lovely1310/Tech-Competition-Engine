import React from 'react';
import { motion } from 'framer-motion';

const CompanyLogos = () => {
  const companyLogos = [
    { src: 'https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/673d7a6b22208f1a1fefa8a2_AirBnB-BW.svg', alt: 'Airbnb' },
    { src: 'https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/673d7a6b22208f1a1fefa817_Stripe-BW.svg', alt: 'Stripe' },
    { src: 'https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/6787f6f4bb18a3ca707ac771_linkedin.svg', alt: 'LinkedIn' },
    { src: 'https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/673d7a6bae7ad199a36794eb_Atlassian-BW.svg', alt: 'Atlassian' },
    { src: 'https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/6787f76721b5766b2190fe7d_ibm.svg', alt: 'IBM' },
    { src: 'https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/673d7a6bc5556b277d750a69_Doordash-BW.svg', alt: 'DoorDash' },
    { src: 'https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/673d7a6a9a5cd6110dc622db_Snap-color.svg', alt: 'Snap Inc.' },
    { src: 'https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/6787f815d46542504f9cee31_adobe.svg', alt: 'Adobe' },
    { src: 'https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/6787f95eb1c857f73c0ec226_paypal.svg', alt: 'PayPal' },
    { src: 'https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/6787f9e10d903ef8395e299a_goldmansachs.svg', alt: 'Goldman Sachs' },
    { src: 'https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/673d7a6b45d72f82c00180d2_Canva-BW.svg', alt: 'Canva' }
  ];

  return (
    <motion.section 
      className="py-12"
      animate={{
        background: [
          'linear-gradient(120deg,rgb(13, 26, 62) 0%,rgb(71, 126, 193) 100%)',
          'linear-gradient(120deg,rgb(78, 96, 15) 0%,rgb(184, 162, 54) 100%)',
          'linear-gradient(120deg,rgb(106, 39, 97) 0%,rgb(167, 95, 175) 100%)',
        ]
      }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
    >
      <div className="container mx-auto">
        <p className="text-center text-slate-400 mb-8 font-semibold">Trusted by the world's leading companies</p>
        <div className="relative overflow-hidden group">
          <div className="flex animate-marquee group-hover:pause">
            {[...companyLogos, ...companyLogos].map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="mx-8 h-8 filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </motion.section>
  );
};

export default CompanyLogos;