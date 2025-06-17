import React, { useState, useEffect, useRef } from 'react';

import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";

const CompanyCarousel = () => {
    const originalSlides = [
        {
            src: "/company_logos/Akamai.png",
            alt: "Akamai_logo",
            quote: "The proctoring features of HackerRank have a profound impact on the candidate experience. It reassures them that theirskills and potential are what truly matter to us.",
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
            quote: "We have seen a significant reduction in the number of interviews needed in order to hire the same number of high-quality candidates.",
            author: "N. Alexandro",
            position: "IT Director"
        },
        {
            src: "/company_logos/ukg.png",
            alt: "UKG_logo",
            quote: "The platform effectively replicates a real-world office environment, providing candidates with a glimpse of what theywould encounter on the job.",
            author: "M. Teolis",
            position: "Talent Acquisition Manager"
        },
        {
            src: "/company_logos/Doordash.png",
            alt: "Doordash_logo",
            quote: "We cut down hiring time by months, which was huge for us. We owe that to HackerRank.",
            author: "M. Patino",
            position: "University Recruiting"
        },
        {
            src: "/company_logos/deliveroo.png",
            alt: "Deliveroo_logo",
            quote: "HackerRank SkillUp received rave reviews. We started with our junior team and have now extended it to our mid-level.",
            author: "A. Coleman",
            position: "Senior Recruiting Manager"
        }
    ];

    // Create the expanded slides array for infinite looping
    // [last_original, ...original, first_original]
    const slides = [
        originalSlides[originalSlides.length - 1],
        ...originalSlides,
        originalSlides[0]
    ];

    const slideCount = originalSlides.length;

    const [current, setCurrent] = useState(1); // Start at index 1 (the first actual slide)
    const [isTransitioning, setIsTransitioning] = useState(true); // To control transition speed
    const autoplayRef = useRef(null); // Ref to store the interval ID

    const startAutoplay = () => {
        // Clear any existing interval to prevent multiple intervals running
        if (autoplayRef.current) {
            clearInterval(autoplayRef.current);
        }
        autoplayRef.current = setInterval(() => {
            setCurrent(prevCurrent => prevCurrent + 1);
        }, 5000); // Change slide every 5 seconds
    };

    const stopAutoplay = () => {
        if (autoplayRef.current) {
            clearInterval(autoplayRef.current);
        }
    };

    useEffect(() => {
        startAutoplay(); // Start autoplay when the component mounts

        // Cleanup: clear the interval when the component unmounts
        return () => {
            stopAutoplay();
        };
    }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

    useEffect(() => {
        // This effect handles the transition logic for infinite looping
        if (current === 0) {
            // If we've landed on the cloned last slide (index 0)
            setIsTransitioning(false); // Disable transition for the jump
            setCurrent(slideCount); // Jump to the real last slide
        } else if (current === slideCount + 1) {
            // If we've landed on the cloned first slide (index slideCount + 1)
            setIsTransitioning(false); // Disable transition for the jump
            setCurrent(1); // Jump to the real first slide
        }

        // Re-enable transition after a brief moment if it was disabled
        if (!isTransitioning) {
            const timeoutId = setTimeout(() => {
                setIsTransitioning(true);
            }, 50); // A small delay to allow the browser to apply the non-transition style
            return () => clearTimeout(timeoutId);
        }
    }, [current, slideCount, isTransitioning]);

    const previousSlide = () => {
        stopAutoplay(); // Stop autoplay on manual interaction
        setCurrent((prevCurrent) => prevCurrent - 1);
        startAutoplay(); // Restart autoplay after a manual move
    };

    const nextSlide = () => {
        stopAutoplay(); // Stop autoplay on manual interaction
        setCurrent((prevCurrent) => prevCurrent + 1);
        startAutoplay(); // Restart autoplay after a manual move
    };

    const goToDot = (index) => {
        stopAutoplay(); // Stop autoplay on manual interaction
        setCurrent(index + 1); // +1 because dots correspond to original slides (0 to N-1), but our array starts at index 1 for originals
        startAutoplay(); // Restart autoplay after a manual move
    };

    const navOverlayWidthClasses = "w-40 md:w-56 lg:w-72 xl:w-80";

    return (
        <div className='bg-slate-900 text-white py-12 md:py-[9rem] font-satoshi w-full overflow-hidden'>
            <div className="text-center mb-4 md:mb-0 px-6">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-normal leading-tight max-w-4xl mx-auto">
                    Loved by companies of all sizes and developers from all backgrounds
                </h2>
            </div>

            <div className='relative min-h-[300px] md:min-h-[400px] w-full overflow-hidden'>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <div
                        className={`flex ${isTransitioning ? 'transition-transform ease-out duration-500' : ''}`}
                        style={{
                            transform: `translateX(-${current * 100}%)`
                        }}
                        onTransitionEnd={() => {
                            // This handleTransitionEnd is for when a transition *finishes*
                            // The logic for jumping to the real slide is now in a separate useEffect
                            // to ensure it runs precisely when current changes.
                        }}
                    >
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className="w-full flex-shrink-0 flex flex-col items-center justify-center text-center px-4 md:px-8 py-12 md:py-16 min-h-[500px] md:min-h-[600px]"
                            >
                                <div className="mb-12 md:mb-16">
                                    <img
                                        src={slide.src}
                                        alt={slide.alt}
                                        className="h-24 md:h-24 lg:h-25 w-auto mx-auto object-contain"
                                    />
                                </div>

                                <div className="mb-8 md:mb-9 max-w-xl md:max-w-2xl mx-auto">
                                    <p className="text-[20px] md:text-2xl font-normal leading-relaxed text-white">
                                        {slide.quote}
                                    </p>
                                </div>

                                <div className="text-center">
                                    <div className="block md:hidden">
                                        <p className="text-white font-medium text-[20px] text-base mb-1">{slide.author}</p>
                                        <p className="text-gray-400 text-[20px]">{slide.position}</p>
                                    </div>

                                    <div className="hidden md:block">
                                        <p className="text-white font-medium text-lg">
                                            {slide.author} <span className="text-gray-400 font-normal">{slide.position}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={`absolute left-0 top-1/2 transform -translate-y-1/2 ${navOverlayWidthClasses} bg-slate-900 z-30 h-full flex items-center justify-end pr-4 md:pr-6`}>
                    <button
                        onClick={previousSlide}
                        className="text-white hover:text-gray-300 transition-colors text-3xl md:text-4xl lg:text-5xl hidden min-[760px]:block"
                    >
                        <MdOutlineArrowBackIos />
                    </button>
                </div>

                <div className={`absolute right-0 top-1/2 transform -translate-y-1/2 ${navOverlayWidthClasses} bg-slate-900 z-30 h-full flex items-center justify-start pl-4 md:pl-6`}>
                    <button
                        onClick={nextSlide}
                        className="text-white hover:text-gray-300 transition-colors text-3xl md:text-4xl lg:text-5xl hidden min-[760px]:block"
                    >
                        <MdOutlineArrowForwardIos />
                    </button>
                </div>

                <div className="absolute bottom-8 md:bottom-28 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-2 z-20">
                    {originalSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToDot(index)}
                            className={`w-3.5 h-3.5 md:w-4 md:h-4 rounded-full transition-colors ${
                                // The active dot needs to map to the original slide index
                                current === index + 1 ||
                                (current === 0 && index === slideCount - 1) || // If on cloned last, highlight real last
                                (current === slideCount + 1 && index === 0) // If on cloned first, highlight real first
                                ? 'bg-white' : 'bg-gray-500'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CompanyCarousel;
