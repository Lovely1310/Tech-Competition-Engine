import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';


const features = [
  {
    badge: 'Integrity and fairness',
    title: 'The hidden cost of screen sharing',
    description: 'AI has made it easy to game the interview when you rely on screen sharing. Choose a tool built for technical hiring, so that you can easily detect candidate misbehavior.',
    listItems: [
      "Flag when a candidate switches tabs",
      "Detect the use of multiple monitors", 
      "Catch if a different person shows up to your interview",
      "Identify help from third-party tools (Yes, even the ones who claim to be invisible)"
    ],
    image: 'https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/68194c9b287541b29842e8e4_Codepair%20Session-p-2000.png',
    imageOrder: 1,
    backgrounds: {
      bg: ['linear-gradient(120deg, #e0e7ff 0%, #a5b4fc 100%)', 'linear-gradient(120deg, #a5b4fc 0%, #fbc2eb 100%)', 'linear-gradient(120deg, #fbc2eb 0%, #e0e7ff 100%)'],
      duration: 14
    },
    headingGradients: ['linear-gradient(90deg, #a259c4 0%, #fbc2eb 100%)', 'linear-gradient(90deg, #fbc2eb 0%, #a259c4 100%)', 'linear-gradient(90deg, #b983ff 0%, #fbc2eb 100%)', 'linear-gradient(90deg, #fbc2eb 0%, #b983ff 100%)']
  },
  {
    badge: 'REAL WORLD QUESTIONS',
    title: 'Interview in real code repositories',
    description: 'Code repository questions give candidates the chance to solve realistic engineering challenges. These assessments replicate working environments, showing how candidates debug, problem-solve, and integrate changes into live codebases.',
    listItems: [],
    image: 'https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/68194b0b35052998727aad69_repos%20(1)-p-2000.png',
    imageOrder: 2,
    backgrounds: {
      bg: ['linear-gradient(120deg, #b4e7e3 0%, #a7f3d0 100%)', 'linear-gradient(120deg, #a7f3d0 0%, #fbc2eb 100%)', 'linear-gradient(120deg, #fbc2eb 0%, #b4e7e3 100%)'],
      duration: 16
    },
    headingGradients: ['linear-gradient(90deg, #b4e7e3 0%, #ffd86b 100%)', 'linear-gradient(90deg, #ffd86b 0%, #b4e7e3 100%)', 'linear-gradient(90deg, #a7f3d0 0%, #ffd86b 100%)', 'linear-gradient(90deg, #ffd86b 0%, #a7f3d0 100%)']
  },
  {
    badge: 'The future of hiring',
    title: 'Built-in AI assistants',
    description: "Code repositories come with a built-in AI assistant, just like today's developers use in their daily workflows. This allows hiring managers to evaluate how candidates interact with AI tools, offering a clear picture of their ability to integrate these technologies productively.",
    listItems: [],
    image: 'https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/68194b2b8541e355a539fb2d_ai-assistant-p-2000.jpg',
    imageOrder: 1,
    backgrounds: {
      bg: ['linear-gradient(120deg, #ffd86b 0%, #fbc2eb 100%)', 'linear-gradient(120deg, #fbc2eb 0%, #e0aaff 100%)', 'linear-gradient(120deg, #e0aaff 0%, #ffd86b 100%)'],
      duration: 18
    },
    headingGradients: ['linear-gradient(90deg, #ffd86b 0%, #fbc2eb 100%)', 'linear-gradient(90deg, #fbc2eb 0%, #ffd86b 100%)', 'linear-gradient(90deg, #b983ff 0%, #ffd86b 100%)', 'linear-gradient(90deg, #ffd86b 0%, #b983ff 100%)']
  }
];

// Animated Wavy SVG Background
const WavyBackground = () => (
  <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
    <svg width="100%" height="100%" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
      <defs>
        <linearGradient id="waveGradient1" x1="0" y1="0" x2="1440" y2="600" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5B8CFF" />
          <stop offset="1" stopColor="#F17EA6" />
        </linearGradient>
        <linearGradient id="waveGradient2" x1="0" y1="0" x2="1440" y2="600" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F17EA6" />
          <stop offset="1" stopColor="#5B8CFF" />
        </linearGradient>
      </defs>
      <motion.path
        d="M0 400 Q 360 300 720 400 T 1440 400"
        stroke="url(#waveGradient1)"
        strokeWidth="8"
        fill="none"
        strokeOpacity="0"
        initial={false}
        animate={{
          d: [
            'M0 400 Q 360 300 720 400 T 1440 400',
            'M0 410 Q 360 320 720 390 T 1440 410',
            'M0 400 Q 360 300 720 400 T 1440 400',
            'M0 390 Q 360 280 720 410 T 1440 390',
            'M0 400 Q 360 300 720 400 T 1440 400',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.path
        d="M0 500 Q 360 600 720 500 T 1440 500"
        stroke="url(#waveGradient2)"
        strokeWidth="6"
        fill="none"
        strokeOpacity="0"
        initial={false}
        animate={{
          d: [
            'M0 500 Q 360 600 720 500 T 1440 500',
            'M0 490 Q 360 580 720 510 T 1440 490',
            'M0 500 Q 360 600 720 500 T 1440 500',
            'M0 510 Q 360 620 720 490 T 1440 510',
            'M0 500 Q 360 600 720 500 T 1440 500',
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.path
        d="M0 300 Q 360 200 720 300 T 1440 300"
        stroke="#fff"
        strokeOpacity="0"
        strokeWidth="4"
        fill="none"
        initial={false}
        animate={{
          d: [
            'M0 300 Q 360 200 720 300 T 1440 300',
            'M0 310 Q 360 220 720 290 T 1440 310',
            'M0 300 Q 360 200 720 300 T 1440 300',
            'M0 290 Q 360 180 720 310 T 1440 290',
            'M0 300 Q 360 200 720 300 T 1440 300',
          ],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
    </svg>
  </div>
);

function ProductFeature(props) {
  const feature = props.feature;
  const index = props.index;
  if (!feature) return null;
  return (
    <div className="w-full mb-16 last:mb-0">
      <motion.div
        className="grid lg:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: index * 0.2 }}
      >
        {/* Text column */}
        <div className={feature.imageOrder === 2 ? 'lg:order-2' : 'lg:order-1'}>
          <div
            className="text-sm font-semibold mb-4 uppercase tracking-wider bg-green-100 bg-opacity-20 px-3 py-1 rounded-full inline-block text-green-700"
            style={{ background: 'rgba(34,197,94,0.10)' }}
          >
            {feature.badge}
          </div>
          <motion.h3
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              letterSpacing: '0.04em',
              textShadow: '0 4px 32px #181c22, 0 1px 0 #fff',
            }}
            animate={{ background: feature.headingGradients }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          >
            {feature.title}
          </motion.h3>
          <motion.p
            className="text-lg mb-8 leading-relaxed text-slate-800 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 + index * 0.2 }}
          >
            {feature.description}
          </motion.p>
          {feature.listItems && feature.listItems.length > 0 && (
            <motion.ul
              className="space-y-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.3 + index * 0.2 }}
            >
              {feature.listItems.map((item, idx) => (
                <li key={idx} className="flex items-center text-slate-900">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </motion.ul>
          )}
        </div>
        {/* Image column (desktop), below heading (mobile) */}
        <motion.div
          className={feature.imageOrder === 2 ? 'lg:order-1' : 'lg:order-2 w-full mt-8 lg:mt-0'}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.4 + index * 0.2 }}
        >
          <motion.img
            src={feature.image}
            alt={feature.title}
            className="rounded-2xl shadow-xl w-full"
            animate={{ y: [-5, 5] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', repeatType: 'mirror' }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

ProductFeature.propTypes = {
  feature: PropTypes.shape({
    badge: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    listItems: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.string.isRequired,
    imageOrder: PropTypes.number.isRequired,
    backgrounds: PropTypes.shape({
      bg: PropTypes.arrayOf(PropTypes.string),
      duration: PropTypes.number,
    }),
    headingGradients: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const ProductDetails = () => {
  return (
    <>
      <motion.section
        className="relative py-20 overflow-hidden min-h-screen flex flex-col justify-center"
        style={{ position: 'relative' }}
        animate={{
          background: [
            'linear-gradient(120deg, #f8fafc 0%, #e0c3fc 50%, #a1c4fd 100%)',
            'linear-gradient(120deg, #e0c3fc 0%, #f8fafc 50%, #a1c4fd 100%)',
            'linear-gradient(120deg, #a1c4fd 0%, #f8fafc 50%, #e0c3fc 100%)',
            'linear-gradient(120deg, #f8fafc 0%, #e0c3fc 50%, #a1c4fd 100%)',
          ],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      >
        <WavyBackground />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.h1 
              className="text-3xl md:text-5xl font-bold mb-4" 
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                letterSpacing: '0.04em',
              }}
              animate={{
                textShadow: ['0 2px 24px #a259c400', '0 2px 24px #a259c4cc', '0 2px 24px #a259c400'],
                background: [
                  'linear-gradient(90deg, #e0aaff 0%, #fbc2eb 50%, #b983ff 100%)',
                  'linear-gradient(90deg, #b983ff 0%, #e0aaff 50%, #fbc2eb 100%)',
                  'linear-gradient(90deg, #e0aaff 0%, #fbc2eb 50%, #b983ff 100%)',
                ],
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textFillColor: 'transparent',
              }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            >
              The Next Generation
            </motion.h1>
            <motion.p 
              className="text-2xl font-semibold mb-2" 
              style={{
                fontFamily: 'Handlee, cursive',
                letterSpacing: '0.03em',
              }}
              animate={{
                textShadow: ['0 2px 16px #b983ff00', '0 2px 16px #b983ff88', '0 2px 16px #b983ff00'],
                background: [
                  'linear-gradient(90deg, #a5b4fc 0%, #fbc2eb 50%, #ffd86b 100%)',
                  'linear-gradient(90deg, #ffd86b 0%, #a5b4fc 50%, #fbc2eb 100%)',
                  'linear-gradient(90deg, #a5b4fc 0%, #fbc2eb 50%, #ffd86b 100%)',
                ],
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textFillColor: 'transparent',
              }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            >
              For Inspired Technical Journeys
            </motion.p>
          </div>
          {features.map((feature, index) => (
            <ProductFeature key={index} feature={feature} index={index} />
          ))}
          {/* Testimonial (unchanged) */}
          <div className="flex justify-center items-center py-20">
            <motion.div
              className="relative w-full max-w-5xl mx-auto"
              style={{ margin: '2rem' }}
              animate={{
                y: [0, -10, 0, 10, 0],
                filter: [
                  'drop-shadow(0 8px 40px #b983ff33)',
                  'drop-shadow(0 16px 60px #e0aaff44)',
                  'drop-shadow(0 8px 40px #b983ff33)'
                ]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Speech Bubble SVG background */}
              <svg
                className="absolute inset-0 w-full h-full z-0 pointer-events-none bubble-bg"
                viewBox="0 0 1100 650"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="bubbleGradient" x1="0" y1="0" x2="1100" y2="650" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#e0e7ff" />
                    <stop offset="0.5" stopColor="#a5b4fc" />
                    <stop offset="1" stopColor="#fbc2eb" />
                  </linearGradient>
                </defs>
                {/* Main bubble - even larger */}
                <ellipse cx="550" cy="325" rx="500" ry="270" fill="url(#bubbleGradient)" />
              </svg>
              <style>{`
                @media (max-width: 400px) {
                  .bubble-bg { display: none !important; }
                }
              `}</style>
              {/* Testimonial content in speech bubble */}
              <div className="relative z-9 max-w-4xl w-full mx-auto px-20 py-20 flex flex-col items-center text-center" style={{ minHeight: '540px', justifyContent: 'flex-start', paddingTop: '140px' }}>
                <span className="text-blue-700 text-2xl font-bold tracking-wide mb-6 drop-shadow-lg" style={{fontFamily: 'DotGothic16, Space Grotesk, sans-serif', letterSpacing: '0.04em', textShadow: '0 2px 16px #fff, 0 1px 0 #fff'}}>SoFi</span>
                <blockquote className="text-2xl md:text-3xl font-semibold italic mb-8 text-gray-900 leading-relaxed drop-shadow-xl mx-auto" style={{fontFamily: 'Merriweather, serif', textShadow: '0 2px 24px #fff, 0 1px 0 #fff', maxWidth: '900px'}}>
                  “HackerRank is a great tool for interviewing folks consistently, evaluating code live, and collaborating effectively with candidates during the process.”
            </blockquote>
                <div className="text-center">
                  <div className="font-bold text-lg text-blue-900 drop-shadow-lg" style={{fontFamily: 'Space Grotesk, sans-serif'}}>Scott Leach</div>
                  <div className="text-blue-800 text-base drop-shadow-md">Manager of Technical Recruiting, SoFi</div>
                </div>
            </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <style>{`
        @media (max-width: 400px) {
          .grid.lg\\:grid-cols-2 {
            display: flex !important;
            flex-direction: column !important;
          }
          .w-full.mt-8.lg\\:mt-0 {
            margin-top: 1.5rem !important;
          }
        }
      `}</style>
    </>
  );
};

export default ProductDetails;