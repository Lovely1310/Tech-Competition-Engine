import React, { useRef } from 'react';
import DeveloperNavbar from '../DeveloperNavbar';

const certifications = [
  { title: "Frontend Developer (React)", icon: "react", details: "Test your React skills with 20+ challenges. Duration: 90 mins. Passing Score: 70%." },
  { title: "Software Engineer", icon: "codesandbox", details: "Assess coding skills with 25 problems. Duration: 120 mins. Passing Score: 75%." },
  { title: "Software Engineer Intern", icon: "internship", details: "Entry-level test with 15 tasks. Duration: 60 mins. Passing Score: 65%." },
  { title: "Angular (Basic)", icon: "angular", details: "Cover basics with 10 challenges. Duration: 60 mins. Passing Score: 70%." },
  { title: "Angular (Intermediate)", icon: "angular", details: "Advanced topics with 15 challenges. Duration: 90 mins. Passing Score: 75%." },
  { title: "C# (Basic)", icon: "csharp", details: "Learn fundamentals with 12 tasks. Duration: 70 mins. Passing Score: 70%." },
  { title: "CSS (Basic)", icon: "css3", details: "Test basics with 10 questions. Duration: 60 mins. Passing Score: 70%." },
  { title: "Go (Intermediate)", icon: "go", details: "Intermediate level with 15 tasks. Duration: 90 mins. Passing Score: 75%." },
  { title: "Go (Basic)", icon: "go", details: "Basics with 10 challenges. Duration: 60 mins. Passing Score: 70%." },
  { title: "Java (Basic)", icon: "java", details: "Foundational skills with 12 tasks. Duration: 70 mins. Passing Score: 70%." },
  { title: "JavaScript (Intermediate)", icon: "javascript", details: "Intermediate with 15 challenges. Duration: 90 mins. Passing Score: 75%." },
  { title: "JavaScript (Basic)", icon: "javascript", details: "Basics with 10 tasks. Duration: 60 mins. Passing Score: 70%." },
  { title: "Node.js (Basic)", icon: "nodedotjs", details: "Intro to Node.js with 10 challenges. Duration: 60 mins. Passing Score: 70%." },
  { title: "Node.js (Intermediate)", icon: "nodedotjs", details: "Intermediate with 15 tasks. Duration: 90 mins. Passing Score: 75%." },
  { title: "Problem Solving (Basic)", icon: "puzzle", details: "10 logical problems. Duration: 60 mins. Passing Score: 70%." },
  { title: "Problem Solving (Intermediate)", icon: "puzzle", details: "15 complex problems. Duration: 90 mins. Passing Score: 75%." },
  { title: "Python (Basic)", icon: "python", details: "Basics with 10 tasks. Duration: 60 mins. Passing Score: 70%." },
  { title: "R (Intermediate)", icon: "r", details: "Intermediate with 15 challenges. Duration: 90 mins. Passing Score: 75%." },
  { title: "R (Basic)", icon: "r", details: "Basics with 10 tasks. Duration: 60 mins. Passing Score: 70%." },
  { title: "React (Basic)", icon: "react", details: "Intro to React with 10 challenges. Duration: 60 mins. Passing Score: 70%." },
  { title: "Rest API (Intermediate)", icon: "restapi", details: "Intermediate API skills with 15 tasks. Duration: 90 mins. Passing Score: 75%." },
  { title: "SQL (Advanced)", icon: "mysql", details: "Advanced queries with 20 tasks. Duration: 120 mins. Passing Score: 80%." },
  { title: "SQL (Intermediate)", icon: "mysql", details: "Intermediate with 15 tasks. Duration: 90 mins. Passing Score: 75%." },
  { title: "SQL (Basic)", icon: "mysql", details: "Basics with 10 tasks. Duration: 60 mins. Passing Score: 70%." },
];

const CertificationCard = ({ title, icon, details, index, flipCardRefs, handleInfoHover }) => (
  <div className="flip-card h-48 relative">
    <div className="flip-card-inner h-full" ref={el => flipCardRefs.current[index] = el}>
      <div className="flip-card-front bg-white text-black h-full flex flex-col justify-between p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-start mb-4">
          <h4 className="text-lg font-bold">{title} ①</h4>
          <span 
            className="text-gray-500 cursor-pointer" 
            onMouseEnter={() => handleInfoHover(index, true)}
            onMouseLeave={() => handleInfoHover(index, false)}
          >ℹ️</span>
        </div>
        <button className="px-4 py-2 border border-black text-black rounded hover:bg-gray-100">Get Certified</button>
        <img src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${icon}.svg`} alt={title} className="absolute bottom-2 right-2 w-16 h-16 opacity-10" />
      </div>
      <div className="flip-card-back bg-white text-black h-full flex flex-col justify-center items-center p-6 rounded-lg shadow-md">
        <h4 className="text-lg font-bold">Details</h4>
        <p className="text-base text-center">{details}</p>
      </div>
    </div>
  </div>
);

const CertificationPage = () => {
  const flipCardRefs = useRef([]);

  const handleInfoHover = (index, isEnter) => {
    const cardInner = flipCardRefs.current[index];
    if (cardInner) cardInner.style.transform = isEnter ? 'rotateY(180deg)' : '';
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <DeveloperNavbar />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Certification Tests</h1>
        <h2 className="text-2xl font-semibold mb-8">Get Certified</h2>
        <div className="bg-blue-800 text-white p-8 mb-8 flex justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold">Stand out</h3>
            <p>Certified in technical skills via Ten Tech Engine</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Standardised</h3>
            <p>Curated assessments from 2000+ companies' data</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Enrich profile</h3>
            <p>Promote with Ten Tech Engine certificate</p>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-6">Get Your Roles Certified</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {certifications.slice(0, 3).map((cert, index) => (
            <CertificationCard key={index} {...cert} index={index} flipCardRefs={flipCardRefs} handleInfoHover={handleInfoHover} />
          ))}
        </div>
        <h3 className="text-xl font-semibold mb-6">Get Your Skills Certified</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.slice(3).map((cert, index) => (
            <CertificationCard key={index + 3} {...cert} index={index + 3} flipCardRefs={flipCardRefs} handleInfoHover={handleInfoHover} />
          ))}
        </div>
      </div>
      <style>
        {`.flip-card { background-color: transparent; width: 100%; perspective: 1000px; }
         .flip-card-inner { position: relative; width: 100%; height: 100%; text-align: center; transition: transform 0.6s ease; transform-style: preserve-3d; }
         .flip-card-front, .flip-card-back { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; padding: 1.5rem; border-radius: 0.5rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08); }
         .flip-card-back { transform: rotateY(180deg); display: flex; flex-direction: column; justify-content: center; align-items: center; }
         .flip-card:hover .flip-card-inner { transform: none; }`}
      </style>
    </div>
  );
};

export default CertificationPage;