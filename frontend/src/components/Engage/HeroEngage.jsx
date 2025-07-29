import { motion } from 'framer-motion';

const logos = [
  'https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/673d7a6b22208f1a1fefa8a2_AirBnB-BW.svg',
  'https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/673d7a6b22208f1a1fefa817_Stripe-BW.svg',
  'https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/6787f6f4bb18a3ca707ac771_linkedin.svg',
  'https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/673d7a6bae7ad199a36794eb_Atlassian-BW.svg',
  'https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/6787f76721b5766b2190fe7d_ibm.svg',
  'https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/673d7a6bc5556b277d750a69_Doordash-BW.svg',
  'https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/673d7a6a9a5cd6110dc622db_Snap-color.svg',
  'https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/6787f815d46542504f9cee31_adobe.svg',
  'https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/6787f95eb1c857f73c0ec226_paypal.svg',
  'https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/6787f9e10d903ef8395e299a_goldmansachs.svg',
  'https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/673d7a6b45d72f82c00180d2_Canva-BW.svg',
];

const HeroEngage = () => {
  return (
    <>
      <style>
        {`
          @layer utilities {
            .hero-cosmic-gradient {
              background: radial-gradient(circle at 20% 30%,  #000000, #010014, #020229, #080813ff,  #000000);
              background-size: 400% 400%;
              animation: cosmicFlow 15s ease infinite;
            }

            @keyframes cosmicFlow {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }

            .logo-marquee {
              display: flex;
              flex-wrap: nowrap;
              min-width: 200%;
              animation: marquee 30s linear infinite;
            }

            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }

            .logo-hover-effect {
              filter: invert(1);
              transition: transform 0.3s ease, filter 0.3s ease;
            }

            .logo-hover-effect:hover {
              transform: scale(1.1);
              filter: invert(1) brightness(1.3);
            }
          }
        `}
      </style>

      <section className="hero-cosmic-gradient text-white pt-32 pb-20 px-6 md:px-12 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Build trust with your audience using <span className="text-cyan-400">Engage</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300"
          >
            A platform to showcase your technology brand, create immersive customer experiences, and stand out in a crowded digital world
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-10 flex flex-col md:flex-row justify-center gap-4"
          >
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-300">
              Request a Demo
            </button>
            <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition duration-300">
              Watch Video
            </button>
          </motion.div>
        </div>

        {/* Infinite Scrolling Logos */}
        <div className="mt-20 overflow-hidden whitespace-nowrap relative">
          <div className="logo-marquee items-center gap-12">
            {[...logos, ...logos].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`logo-${index}`}
                loading="lazy"
                className="h-10 w-auto inline-block mx-6 logo-hover-effect"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroEngage;
