import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Host technical challenges & hackathons',
    subtitle: 'Launch turn‑key coding events that attract developers.',
    icon: 'https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/67735ad62e78034c09b52dfb_hackathons-lt.svg',
  },
  {
    title: 'Deliver a real‑world experience',
    subtitle: 'Showcase the problems your team solves with real‑world challenges.',
    icon: 'https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/677351e15653379fdd00c990_Across%20the%20globe-lt.svg',
  },
  {
    title: 'Build a community of brand enthusiasts',
    subtitle: 'Attract, engage and nurture developers.',
    icon: 'https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/677351e2b4ecaf963dd08f1d_Together-lt.svg',
  },
];

const FeaturesEngage = () => {
  return (
    <section className="bg-white text-gray-800 font-sans relative overflow-hidden">
      {/* Local image from public/gradient2.png */}
      <img
        src="/gradient2.png"
        alt="Background decoration"
        className="w-full h-auto object-cover"
      />

      {/* Heading and description */}
      <motion.div
        className="max-w-4xl mx-auto text-center py-16 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
      <h2 className="font-display text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight leading-tight mb-6">
  The All‑In‑One Engagement Platform
</h2>

        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Engage more developers with tools for creating, promoting, and hosting coding events &amp;
          hackathons. AI builds your event in minutes with branded websites and plug‑and‑play coding
          challenges. Share it with the world through targeted ads and scheduled email sequences.
        </p>
      </motion.div>

      {/* Feature cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-4 pb-20">
        {features.map((feat, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center px-6 py-8 bg-gray-50 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: 0.2 * index, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <img
              src={feat.icon}
              alt={feat.title}
              className="h-20 w-20 mb-6"
              loading="lazy"
            />
            <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">
              {feat.title}
            </h3>
            <p className="text-gray-600">{feat.subtitle}</p>
          </motion.div>
        ))}
      </div>

     
    </section>
  );
};

export default FeaturesEngage;
