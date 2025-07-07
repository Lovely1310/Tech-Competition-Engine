import React, { useState, useEffect, useRef } from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion } from "framer-motion";

const RevealText = ({ children, className = "", delay = 0 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: delay / 1000 }}
    viewport={{ once: true, amount: 0.3 }}
  >
    {children}
  </motion.div>
);

const ScrambleButton = ({ children, className, ...props }) => {
  const [displayText, setDisplayText] = useState(children);
  const [isScrambling, setIsScrambling] = useState(false);
  const intervalRef = useRef(null);
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const scrambleText = (originalText, iteration = 0) => {
    return originalText
      .split('')
      .map((char, index) =>
        char === ' ' ? ' ' : index < iteration ? originalText[index] : characters[Math.floor(Math.random() * characters.length)]
      )
      .join('');
  };

  const startScrambling = () => {
    if (isScrambling) return;
    setIsScrambling(true);
    const originalText = children;
    let iteration = 0;

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDisplayText(scrambleText(originalText, iteration));
      if (iteration >= originalText.length) {
        clearInterval(intervalRef.current);
        setDisplayText(originalText);
        setIsScrambling(false);
      }
      iteration += 0.75;
    }, 15);
  };

  useEffect(() => () => clearInterval(intervalRef.current), []);

  return (
    <motion.button
      {...props}
      onMouseEnter={startScrambling}
      className={className}
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {displayText}
    </motion.button>
  );
};

const DeveloperSkills = () => {
  const contents = [
    {
      buttonContent: "Tech Community",
      headLine: "Prepare and apply for your dream job",
      videoSrc: "/dev_skill_sec_videos/job.mp4",
      mainContent:
        "Over 26 million developers have joined the HackerRank community to certify their skills, practice interviewing, and discover relevant jobs. An AI Mock Interviewer can help you prepare, while our QuickApply agent puts your job search on autopilot."
    },
    {
      buttonContent: "Tech Engage",
      headLine: "Showcase your tech brand",
      videoSrc: "/dev_skill_sec_videos/tech_brand.mp4",
      mainContent:
        "Attract developers with hackathons that feature real-world challenges, and preview what it's like to work at your company. Our AI Assistant helps you set up a hackathon in minutes."
    },
    {
      buttonContent: "Tech Screen",
      headLine: "Take-home assessments that ensure fairness and integrity",
      videoSrc: "/dev_skill_sec_videos/home Assesments.mp4",
      mainContent:
        "Identify strong developers by administering a take-home assessment in a secure environment. Choose from a library of expert-designed challenges validated for fairness."
    },
    {
      buttonContent: "Tech Interview",
      headLine: "Pair-programming interviews on demand",
      videoSrc: "/dev_skill_sec_videos/pair_programming.mp4",
      mainContent:
        "Pair program with candidates on real-world scenarios to review code, fix bugs, build features — all inside a collaborative interview setting."
    },
    {
      buttonContent: "Tech Skillup",
      headLine: "Find skills inside your company",
      videoSrc: "/dev_skill_sec_videos/skill_company.mp4",
      mainContent:
        "Empower developers to showcase and grow their skills while gaining visibility across your org. AI insights help you map talent across teams."
    }
  ];

  return (
    <section className="relative z-0 min-h-screen w-full animate-alt-gradient">
      <style>{`
        @layer utilities {
          @keyframes altGradientBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-alt-gradient {
            animation: altGradientBG 22s ease infinite;
            background: linear-gradient(270deg, #8EC5FC, #E0C3FC, #FFD6E8);
            background-size: 400% 400%;
          }
        }
      `}</style>

      <div className="min-h-screen w-full flex flex-col py-20 px-6 sm:px-10 gap-32 font-satoshi items-center justify-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black text-center">
          The Developer Skills Platform
        </h1>

        <div className="w-full flex flex-col gap-40 items-center justify-center">
          {contents.map((content, key) => {
            const isEven = key % 2 === 0;
            return (
              <motion.div
                key={key}
                className={`w-full flex flex-col lg:flex-row ${
                  isEven ? '' : 'lg:flex-row-reverse'
                } items-center justify-center text-center lg:text-left gap-12`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: key * 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                {/* Text Column */}
                <div className="w-full lg:w-1/2 px-4 sm:px-10 flex flex-col gap-4 items-center lg:items-start">
                  <ScrambleButton className="font-departure-mono bg-black text-white text-xs px-3 py-1 rounded-full">
                    {content.buttonContent}
                  </ScrambleButton>
                  <RevealText delay={100}>
                    <h2 className="text-2xl sm:text-3xl font-bold text-black">
                      {content.headLine}
                    </h2>
                  </RevealText>
                  <RevealText delay={200}>
                    <p className="text-base sm:text-lg text-black">
                      {content.mainContent}
                    </p>
                  </RevealText>
                  <RevealText delay={300}>
                    <div className="flex items-center gap-2 text-base text-black font-bold cursor-pointer transition-all duration-300 ease-out hover:scale-105 hover:text-green-500 hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]">
                      <p>Learn More</p> <FaLongArrowAltRight />
                    </div>
                  </RevealText>
                </div>

                {/* Video Column */}
                <motion.div
                  className="w-full lg:w-1/2 px-6 sm:px-10"
                  initial={{ x: isEven ? 80 : -80, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    src={content.videoSrc}
                    className="w-full max-w-[600px] mx-auto rounded-lg shadow-md"
                  >
                    Your browser does not support video.
                  </video>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DeveloperSkills;
