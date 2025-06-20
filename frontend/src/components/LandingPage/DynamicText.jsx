import React, { useState, useEffect } from 'react';

const DynamicText = () => {
  const [currentWord, setCurrentWord] = useState('Hire');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(4);

  const words = ['Hire', 'Upskill', 'Become'];
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const holdTime = 2500;
  const initialPause = 2000;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting && charIndex === words[wordIndex].length) {
        setTimeout(() => setIsDeleting(true), holdTime);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      } else if (isDeleting) {
        setCurrentWord(words[wordIndex].substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setCurrentWord(words[wordIndex].substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex, words]);

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setIsDeleting(true);
    }, initialPause);

    return () => clearTimeout(initialTimer);
  }, []);

  return (
    <span className="js-dynamic-word text-hr-green font-bold">
      {currentWord}
    </span>
  );
};

export default DynamicText;