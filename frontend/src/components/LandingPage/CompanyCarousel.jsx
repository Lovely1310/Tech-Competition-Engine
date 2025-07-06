import React, { useState, useEffect, useRef } from 'react';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";
import { motion } from "framer-motion";

const CompanyCarousel = () => {
  const originalSlides = [
    {
      src: "/company_logos/Akamai.png",
      alt: "Akamai_logo",
      quote: "HackerRank's proctoring features significantly enhance the candidate experience by ensuring that their skills and potential are the primary focus of the evaluation process.",
      author: "K. Thomas",
      position: "Head of Talent Acquisition"
    },
    {
      src: "/company_logos/Atlassian.png",
      alt: "Atlassian_logo",
      quote: "HackerRank helped us go beyond traditional universities. We've scaled up our college hiring from zero to 200.",
      author: "A. Viswanathan",
      position: "Head of Engineering"
    },
    {
      src: "/company_logos/Vanguard.png",
      alt: "Vanguard_logo",
      quote: "We've significantly reduced the number of interviews required to hire the same number of high-quality candidates.",
      author: "N. Alexandro",
      position: "IT Director"
    },
    {
      src: "/company_logos/ukg.png",
      alt: "UKG_logo",
      quote: "The platform accurately simulates a real-world office setting, giving candidates a preview of on-the-job experiences.",
      author: "M. Teolis",
      position: "Talent Acquisition Manager"
    },
    {
      src: "/company_logos/Doordash.png",
      alt: "Doordash_logo",
      quote: "We reduced hiring time by months, a major win, thanks to HackerRank.",
      author: "M. Patino",
      position: "University Recruiting"
    },
    {
      src: "/company_logos/deliveroo.png",
      alt: "Deliveroo_logo",
      quote: "HackerRank SkillUp has earned glowing feedback. We initially implemented it with our junior team and have since expanded it to our mid-level developers.",
      author: "A. Coleman",
      position: "Senior Recruiting Manager"
    }
  ];

  const slides = [
    originalSlides[originalSlides.length - 1],
    ...originalSlides,
    originalSlides[0]
  ];

  const slideCount = originalSlides.length;
  const [current, setCurrent] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const autoplayRef = useRef(null);

  const startAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setCurrent(prev => prev + 1);
    }, 5000);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  useEffect(() => {
    if (current === 0) {
      setIsTransitioning(false);
      setCurrent(slideCount);
    } else if (current === slideCount + 1) {
      setIsTransitioning(false);
      setCurrent(1);
    }

    if (!isTransitioning) {
      const timeout = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(timeout);
    }
  }, [current, slideCount, isTransitioning]);

  const goToDot = (index) => {
    stopAutoplay();
    setCurrent(index + 1);
    startAutoplay();
  };

  const navOverlayClasses = "hidden min-[760px]:flex min-[760px]:w-12 md:min-[760px]:w-16 lg:min-[760px]:w-20";

  return (
    <section className="relative overflow-hidden">
      {/* 🎨 Gradient + Glass Overlay */}
      <style>{`
        @layer utilities {
          @keyframes gradientBackground {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            animation: gradientBackground 16s ease infinite;
            background: linear-gradient(270deg, #6EE7B7, #3B82F6, #9333EA);
            background-size: 400% 400%;
          }
        }
      `}</style>
      <div className="absolute inset-0 animate-gradient z-0" />
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 py-20 text-white font-satoshi">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-2xl md:text-4xl lg:text-5xl font-normal leading-tight max-w-4xl mx-auto px-6"
        >
          Loved by companies of all sizes and developers from all backgrounds
        </motion.h2>

        {/* Carousel */}
        <div className="relative mt-12 min-h-[320px] md:min-h-[400px] max-w-4xl mx-auto flex items-center">
          {/* ← Nav */}
          <div className={`${navOverlayClasses} items-center justify-end pr-4`}>
            <button onClick={() => setCurrent(prev => prev - 1)} className="text-white hover:text-gray-300 text-3xl">
              <MdOutlineArrowBackIos />
            </button>
          </div>

          {/* Slides */}
          <div className="flex-grow overflow-hidden px-4">
            <div
              className={`flex ${isTransitioning ? "transition-transform duration-500" : ""}`}
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((slide, idx) => (
                <motion.div
                  key={idx}
                  className="w-full flex-shrink-0 flex flex-col items-center justify-center text-center py-12 md:py-16 min-h-[500px]"
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <img src={slide.src} alt={slide.alt} className="h-24 w-auto mb-10" />
                  <p className="max-w-xl text-[20px] md:text-2xl font-normal leading-relaxed px-4">
                    {slide.quote}
                  </p>
                  <p className="text-white font-medium text-lg mt-6">
                    {slide.author} <span className="text-gray-300 font-normal">({slide.position})</span>
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* → Nav */}
          <div className={`${navOverlayClasses} items-center justify-start pl-4`}>
            <button onClick={() => setCurrent(prev => prev + 1)} className="text-white hover:text-gray-300 text-3xl">
              <MdOutlineArrowForwardIos />
            </button>
          </div>

          {/* Dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {originalSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToDot(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  current === idx + 1 ||
                  (current === 0 && idx === slideCount - 1) ||
                  (current === slideCount + 1 && idx === 0)
                    ? "bg-white"
                    : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyCarousel;
