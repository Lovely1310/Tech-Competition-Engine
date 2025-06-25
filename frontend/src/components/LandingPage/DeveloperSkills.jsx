import React, { useState, useEffect, useRef } from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";

const RevealText = ({ children, className, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
};

const ScrambleButton = ({ children, className, ...props }) => {
  const [displayText, setDisplayText] = useState(children);
  const [isScrambling, setIsScrambling] = useState(false);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  const scrambleText = (originalText, iteration = 0) => {
    return originalText
      .split('')
      .map((char, index) => {
        if (char === ' ') return ' ';
        
        if (index < iteration) {
          return originalText[index];
        }
        
        return characters[Math.floor(Math.random() * characters.length)];
      })
      .join('');
  };

  const startScrambling = () => {
    if (isScrambling) return;
    
    setIsScrambling(true);
    const originalText = children;
    let iteration = 0;

    // Clear any existing intervals/timeouts
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    // Start scrambling
    intervalRef.current = setInterval(() => {
      setDisplayText(scrambleText(originalText, iteration));
      
      if (iteration >= originalText.length) {
        clearInterval(intervalRef.current);
        setDisplayText(originalText);
        setIsScrambling(false);
      }
      
      iteration += 0.75; // Slower reveal
    }, 15);
  };

  const stopScrambling = () => {
    // Don't stop the scrambling animation if it's currently running
    // Let it complete naturally
    return;
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <button
      {...props}
      className={className}
      onMouseEnter={startScrambling}
      onMouseLeave={stopScrambling}
    >
      {displayText}
    </button>
  );
};

const DeveloperSkills = () => {
    const contents = [
       { 
        buttonContent:"HACKERRANK COMMUNITY",
        headLine:"Prepare and apply for your dream job",
        videoSrc:"/dev_skill_sec_videos/job.mp4",
        mainContent:"Over 26 million developers have joined the HackerRank community to certify their skills, practice interviewing, and discover relevant jobs. An AI Mock Interviewer can help you prepare, while our QuickApply agent puts your job search on autopilot."
       },
       
       { 
        buttonContent:"HACKERRANK ENGAGE",
        headLine:"Showcase your tech brand",
        videoSrc:"/dev_skill_sec_videos/tech_brand.mp4",
        mainContent:"Attract developers with hackathons that feature real-world challenges, and preview what it's like to work at your company. Our Al Assistant helps you set up a hackathon in minutes. Host it yourself or advertise and run a campaign through our developer community."
       },

       { 
        buttonContent:"HACKERRANK SCREEN",
        headLine:"Take-home assessments that ensure fairness and integrity",
        videoSrc:"/dev_skill_sec_videos/home Assesments.mp4",
        mainContent:"Identify strong developers by administering a take-home assessment in a secure environment. Choose from a library of thousands of challenges across many roles designed by experts and validated by Industrial Psychologists for fairness."
       },

       { 
        buttonContent:"HACKERRANK INTERVIEW",
        headLine:"Pair-programming interviews on demand",
        videoSrc:"/dev_skill_sec_videos/pair_programming.mp4",
        mainContent:"Get an accurate sense for what it would be like to work together by pair programming with candidates on real-world scenarios. Review code, fix bugs, build a feature, and see the result, all within an interview setting using pre-set repos or one of your own."
       },

       { 
        buttonContent:"HACKERRANK SKILLUP",
        headLine:"Find skills inside your company",
        videoSrc:"/dev_skill_sec_videos/skill_company.mp4",
        mainContent:"Empower developers to showcase their skills, earn certifications, and gain recognition - while helping you strengthen your organization. Our Al Tutor helps developers learn as they go, while our advanced insights help you understand the skillsets of your organization."
       }
    ]

  return (
    <section className='min-h-screen w-full bg-gradient-to-b from-white via-fuchsia-100 via-fuchsia-50 via-orange-50 via-yellow-50 to-cyan-100'>
    <div className="min-h-screen w-full flex flex-col py-20 px-10 gap-32 font-satoshi items-center justify-center">
    <h1 className="text-6xl text-black">The Developer Skills Platform</h1>
    <div className="w-full flex flex-col gap-60 items-center justify-center">
    { contents.map((content,key)=>{
        const isEven = key%2===0
    return <div key={key} className={`w-full flex ${isEven ? '' : 'lg:flex-row-reverse'} flex-col lg:flex-row items-center gap-8 lg:gap-0`}>
    <div className='w-full lg:w-[50%] flex flex-col gap-2 px-10'>
        <ScrambleButton 
          className="font-departure-mono bg-black rounded-3xl text-white" 
          id="dev-button"
        >
          {content.buttonContent}
        </ScrambleButton>
        <RevealText delay={100}>
          <h2 className="text-[32px] text-black">{content.headLine}</h2>
        </RevealText>
        <RevealText delay={200}>
          <p className="text-[18px] text-black">{content.mainContent}</p>
        </RevealText>
        <RevealText delay={300}>
          <div className="flex items-center gap-2 text-[16px] text-black font-bold cursor-pointer transition-all duration-300 ease-out hover:scale-105 hover:text-green-500 hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.6)] w-fit">
            <p>Learn More</p>{" "}<FaLongArrowAltRight />
          </div>
        </RevealText>
    </div>
            <div className="w-full lg:w-[50%] px-10"><video autoPlay loop muted playsInline src={content.videoSrc} className="w-full">Your Browser doesnot support videos</video></div>
    </div>
    })
    }
    </div>
    </div>
    <div className="h-48 w-full bg-[url('/gradient3.png')] bg-cover bg-center"></div>
    </section>
  )
}

export default DeveloperSkills;
