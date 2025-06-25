import React, { useState, useEffect, useRef } from 'react';

import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";

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
        if (autoplayRef.current) {
            clearInterval(autoplayRef.current);
        }
        autoplayRef.current = setInterval(() => {
            setCurrent(prevCurrent => prevCurrent + 1);
        }, 5000);
    };

    const stopAutoplay = () => {
        if (autoplayRef.current) {
            clearInterval(autoplayRef.current);
        }
    };

    useEffect(() => {
        startAutoplay();
        return () => {
            stopAutoplay();
        };
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
            const timeoutId = setTimeout(() => {
                setIsTransitioning(true);
            }, 50);
            return () => clearTimeout(timeoutId);
        }
    }, [current, slideCount, isTransitioning]);

    const previousSlide = () => {
        stopAutoplay();
        setCurrent((prevCurrent) => prevCurrent - 1);
        startAutoplay();
    };

    const nextSlide = () => {
        stopAutoplay();
        setCurrent((prevCurrent) => prevCurrent + 1);
        startAutoplay();
    };

    const goToDot = (index) => {
        stopAutoplay();
        setCurrent(index + 1);
        startAutoplay();
    };

    // Responsive widths for the side navigation overlays
    const navOverlayClasses = "hidden min-[760px]:flex min-[760px]:w-12 md:min-[760px]:w-16 lg:min-[760px]:w-20 xl:min-[760px]:w-24";

    return (
        <div className='bg-slate-900 text-white py-12 md:py-[9rem] font-satoshi w-full overflow-hidden'>
            <div className="text-center mb-4 md:mb-0 px-6">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-normal leading-tight max-w-4xl mx-auto">
                    Loved by companies of all sizes and developers from all backgrounds
                </h2>
            </div>

            {/* Main Carousel Container - Flex container for left overlay, slides, right overlay */}
            <div className='relative min-h-[300px] md:min-h-[400px] w-full max-w-4xl mx-auto flex items-center'>

                {/* Left Navigation Overlay */}
                <div className={`h-full items-center justify-end pr-4 bg-slate-900 flex-shrink-0 ${navOverlayClasses}`}>
                    <button
                        onClick={previousSlide}
                        className="text-white hover:text-gray-300 transition-colors text-3xl md:text-4xl lg:text-5xl"
                    >
                        <MdOutlineArrowBackIos />
                    </button>
                </div>

                {/* Central Slide Area - This will take up all available remaining space */}
                <div className='flex-grow overflow-hidden relative px-4'> {/* px-4 provides overall padding for the slide content */}
                    <div
                        className={`flex ${isTransitioning ? 'transition-transform ease-out duration-500' : ''}`}
                        style={{
                            transform: `translateX(-${current * 100}%)`
                        }}
                    >
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className="w-full flex-shrink-0 flex flex-col items-center justify-center text-center py-12 md:py-16 min-h-[500px] md:min-h-[600px]"
                            >
                                <div className="mb-12 md:mb-16">
                                    <img
                                        src={slide.src}
                                        alt={slide.alt}
                                        className="h-24 md:h-24 lg:h-25 w-auto mx-auto object-contain"
                                    />
                                </div>

                                {/* THIS IS THE SECTION FOR THE QUOTE PARAGRAPH */}
                                {/* Reintroduced responsive max-width classes for better control of text line length */}
                                <div className="mb-8 md:mb-9 mx-auto max-w-sm sm:max-w-md md:max-w-xl lg:max-w-lg">
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

                {/* Right Navigation Overlay */}
                <div className={`h-full items-center justify-start pl-4 bg-slate-900 flex-shrink-0 ${navOverlayClasses}`}>
                    <button
                        onClick={nextSlide}
                        className="text-white hover:text-gray-300 transition-colors text-3xl md:text-4xl lg:text-5xl"
                    >
                        <MdOutlineArrowForwardIos />
                    </button>
                </div>

                <div className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3 md:space-x-4 z-20 mt-6">
                    {originalSlides.map((_, index) => (
                        <button
                        key={index}
                        onClick={() => goToDot(index)}
                        className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-colors ${
                            current === index + 1 ||
                            (current === 0 && index === slideCount - 1) ||
                            (current === slideCount + 1 && index === 0)
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
