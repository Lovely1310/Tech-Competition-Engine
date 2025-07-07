import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const MiddleInfo = () => {
  const [revealedWords, setRevealedWords] = useState(0);
  const textRef = useRef(null);

  const companies = [
    { src: "/companies/linkedin.svg", alt: "linkedin_logo" },
    { src: "/companies/atlassian.svg", alt: "atlassian_logo" },
    { src: "/companies/ibm.svg", alt: "ibm_logo" },
    { src: "/companies/doordash.svg", alt: "doordash_logo" },
    { src: "/companies/snapinc.svg", alt: "snapinc_logo" },
    { src: "/companies/adobe.svg", alt: "adobe_logo" },
    { src: "/companies/paypal.svg", alt: "paypal_logo" },
    { src: "/companies/goldmansachs.svg", alt: "goldmansachs_logo" },
    { src: "/companies/canva.svg", alt: "canva_logo" },
    { src: "/companies/airbnb.svg", alt: "airbnb_logo" },
    { src: "/companies/stripe.svg", alt: "stripe_logo" }
  ];

  const motionVariants = {
    hidden: { opacity: 0, y: 20 },
    show: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.025,
        type: "spring",
        stiffness: 60,
        damping: 16
      }
    })
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!textRef.current) return;
      const rect = textRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const start = windowHeight * 0.85;
      const end = -rect.height * 0.1;

      const progress = Math.max(
        0,
        Math.min(1, (start - rect.top) / (start - end))
      );

      const allTexts = [
        "The future is human plus AI.",
        "We've entered a new era of software development where human and AI build together. This changes the skills you need as a developer, and the way companies engage, hire, and upskill technical talent. In short, this changes everything.",
        "We're embracing these changes with you, and we've reinvented our products to meet the moment."
      ];

      const totalWords = allTexts.join(" ").split(" ").length;
      const wordsToReveal = Math.floor(progress * totalWords);
      setRevealedWords(wordsToReveal);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const wrapWordsWithAnimation = (text, startIndex = 0, className = "") => {
    const words = text.split(" ");
    return (
      <span className={className}>
        {words.map((word, index) => {
          const globalIndex = startIndex + index;
          const isRevealed = globalIndex < revealedWords;
          return (
            <motion.span
              key={index}
              className={`inline-block mr-2 ${
                className.includes("text-green-400") && word === "plus"
                  ? "font-departure-mono"
                  : ""
              }`}
              variants={motionVariants}
              initial="hidden"
              animate={isRevealed ? "show" : "hidden"}
              custom={globalIndex}
            >
              {word}
            </motion.span>
          );
        })}
      </span>
    );
  };

  return (
    <section className="w-full flex flex-col items-center relative z-0">
      <style>{`
        @layer utilities {
          @keyframes middleGradientBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes logoScroll {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }

          .animate-midlogo-gradient {
            animation: middleGradientBG 25s ease infinite;
            background: linear-gradient(270deg, #c1c8e4, #ddeaff, #f2f2f2);
            background-size: 400% 400%;
          }

          .animate-midinfo-gradient {
            animation: middleGradientBG 18s ease infinite;
            background: linear-gradient(270deg, #7b2ff7, #f107a3, #00c9ff);
            background-size: 400% 400%;
          }

          .scrolling-logo-track {
            display: flex;
            width: max-content;
            animation: logoScroll 60s linear infinite;
          }
        }
      `}</style>

      {/* 🌀 Logos */}
      <div className="w-full animate-midlogo-gradient py-10 overflow-hidden">
        <div className="scrolling-logo-track gap-16 px-8">
          {[...companies, ...companies].map((company, index) => (
            <div key={index} className="flex-shrink-0 px-4">
              <img
                src={company.src}
                alt={company.alt}
                className="h-14 w-24 object-contain filter grayscale brightness-125 opacity-75 hover:brightness-0 hover:opacity-100 hover:-translate-y-1 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ✨ Word Reveal */}
      <div className="w-full relative animate-midinfo-gradient py-36 px-6 sm:px-12 lg:px-[15rem] text-white min-h-[100vh] flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/60 z-0" />
        <motion.div
          ref={textRef}
          className="relative z-10 space-y-20 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.15 }}
        >
          <div className="space-y-6 text-[20px] sm:text-[24px] lg:text-[30px] font-satoshi">
            <h1 className="text-green-400">
              {wrapWordsWithAnimation("The future is human plus AI.", 0, "text-green-400")}
            </h1>
            <h1>
              {wrapWordsWithAnimation(
                "We've entered a new era of software development where human and AI build together. This changes the skills you need as a developer, and the way companies engage, hire, and upskill technical talent. In short, this changes everything.",
                6
              )}
            </h1>
          </div>
          <h1 className="text-[20px] sm:text-[24px] lg:text-[30px] font-satoshi">
            {wrapWordsWithAnimation(
              "We're embracing these changes with you, and we've reinvented our products to meet the moment.",
              30
            )}
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default MiddleInfo;
