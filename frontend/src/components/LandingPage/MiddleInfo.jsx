import React, { useEffect, useRef, useState } from 'react'

const MiddleInfo = () => {
    const [revealedWords, setRevealedWords] = useState(0);
    const textRef = useRef(null);
    
    const companies = [
        {src:'/companies/linkedin.svg',     alt:'linkedin_logo'},
        {src:'/companies/atlassian.svg',    alt:'atlassian_logo'},
        {src:'/companies/ibm.svg',          alt:'ibm_logo'},
        {src:'/companies/doordash.svg',     alt:'doordash_logo'},
        {src:'/companies/snapinc.svg',      alt:'snapinc_logo'},
        {src:'/companies/adobe.svg',        alt:'adobe_logo'},
        {src:'/companies/paypal.svg',       alt:'paypal_logo'},
        {src:'/companies/goldmansachs.svg', alt:'goldmansachs_logo'},
        {src:'/companies/canva.svg',        alt:'canva_logo'},
        {src:'/companies/airbnb.svg',       alt:'airbnb_logo'},
        {src:'/companies/stripe.svg',       alt:'stripe_logo'},
    ]

    useEffect(() => {
        const handleScroll = () => {
            if (!textRef.current) return;
            
            const element = textRef.current;
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Calculate how much of the element is visible
            const elementTop = rect.top;
            const elementHeight = rect.height;
            
            const startReveal = windowHeight * 0.8;
            const endReveal = -elementHeight * 0.3;
            
            const scrollProgress = Math.max(0, Math.min(1, 
                (startReveal - elementTop) / (startReveal - endReveal)
            ));
            
            // Count total words in all text content
            const allTexts = [
                "The future is human plus AI.",
                "We've entered a new era of software development where human and AI build together. This changes the skills you need as a developer, and the way companies engage, hire, and upskill technical talent. In short, this changes everything.",
                "We're embracing these changes with you, and we've reinvented our products to meet the moment."
            ];
            
            const totalWords = allTexts.join(' ').split(' ').length;
            const wordsToReveal = Math.floor(scrollProgress * totalWords);
            
            setRevealedWords(wordsToReveal);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Function to wrap each word with animation
    const wrapWordsWithAnimation = (text, startIndex = 0, className = '') => {
        const words = text.split(' ');
        return (
            <span className={className}>
                {words.map((word, index) => {
                    const globalIndex = startIndex + index;
                    const isRevealed = globalIndex < revealedWords;
                    
                    // Handle the special "plus" word
                    if (word === 'plus' && className.includes('text-green-400')) {
                        return (
                            <span 
                                key={index}
                                className={`font-departure-mono inline-block mr-2 transition-all duration-500 ${
                                    isRevealed ? 'text-green-400' : 'text-gray-500'
                                }`}
                            >
                                plus
                            </span>
                        );
                    }
                    
                    return (
                        <span key={index} className={`inline-block mr-2 transition-all duration-500 ${ isRevealed ? (className.includes('text-green-400') ? 'text-green-400' : 'text-white') : 'text-gray-500' }`}>
                            {word}
                        </span>
                    );
                })}
            </span>
        );
    };

    return (
        <section className="min-h-screen flex flex-col items-center relative">
            <div className="w-full relative overflow-hidden py-4 bg-white">
                <ul className="flex gap-20 py-4 infinite-scroll whitespace-nowrap">
                    {[...companies, ...companies].map((company, index) => {
                        return (
                            <li key={index} className="flex-shrink-0">
                                <img 
                                    src={company.src} 
                                    alt={company.alt} 
                                    className="h-14 w-25 max-h-6 object-contain filter grayscale brightness-125 opacity-75 hover:brightness-0 hover:opacity-100 hover:-translate-y-1 transition-all duration-300"
                                />
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="h-48 w-full bg-[url('/gradient1.png')] bg-cover bg-center"></div>
            <div className="min-h-108 text-[20px] md:text-[24px] lg:text-[32px] font-satoshi w-full bg-[url('/Bg_space.jpg')] text-white py-[9rem] gap-10 px-5 lg:px-[15rem] bg-cover bg-center flex flex-col items-start justify-center relative before:absolute before:inset-0 before:bg-black before:opacity-60 before:z-0">
                <div ref={textRef} className="relative z-10 space-y-20">
                    <div className='flex flex-col justify-center items-start'>
                        <h1 className='text-green-400'>
                            {wrapWordsWithAnimation("The future is human plus AI.", 0, 'text-green-400')}
                        </h1>
                        <h1>
                            {wrapWordsWithAnimation("We've entered a new era of software development where human and AI build together. This changes the skills you need as a developer, and the way companies engage, hire, and upskill technical talent. In short, this changes everything.", 6)}
                        </h1>
                    </div>
                    <h1>
                        {wrapWordsWithAnimation("We're embracing these changes with you, and we've reinvented our products to meet the moment.", 47)}
                    </h1>
                </div>
            </div>
            <div className="min-h-35 w-full bg-[url('/gradient2.png')] py-40 bg-cover bg-center"></div>
        </section>
    )
}

export default MiddleInfo
