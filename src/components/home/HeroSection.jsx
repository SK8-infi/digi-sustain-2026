import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { conferenceInfo } from '../../data/conferenceData';
import { ROUTES } from '../../constants/routes';

// Carousel images - Strictly 4 images as requested
const carouselImages = [
    { id: 1, url: 'https://lh3.googleusercontent.com/d/1OoQlP6Ucwi-7L4Oe_0Sl8TCAu8urbm2w', alt: 'Conference venue' },
    { id: 2, url: 'https://lh3.googleusercontent.com/d/1AczsTl9ZAEC0j4xj6NSey5ml9YsMBISh', alt: 'Academic session' },
    { id: 3, url: 'https://lh3.googleusercontent.com/d/1sWTOeNuVDQxUhysQfr9DS6z9aJ5Lypj5', alt: 'Research presentation' },
    { id: 4, url: 'https://lh3.googleusercontent.com/d/1VLlXYXdBr70atzRCrsMBGfmu9E0fOruO', alt: 'Networking event' },
];

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-advance slides every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    };

    return (
        <section className="relative w-full h-[70vh] min-h-[500px] max-h-[700px] overflow-hidden">
            {/* Carousel Container */}
            <div className="absolute inset-0">
                {carouselImages.map((image, index) => (
                    <div
                        key={image.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            src={image.url}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Dark overlay for text readability - Enhanced shadow/overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4 max-w-4xl">
                    {/* Small label */}
                    <p style={{ color: '#ffffff' }} className="text-sm md:text-base uppercase tracking-[0.2em] mb-4 font-semibold">
                        {conferenceInfo.dates} • {conferenceInfo.venue.shortName}
                    </p>

                    {/* Main Title */}
                    <h1 style={{ color: '#ffffff' }} className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 leading-tight">
                        {conferenceInfo.shortTitle}
                    </h1>

                    {/* Subtitle */}
                    <p style={{ color: '#e5e7eb' }} className="text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto">
                        {conferenceInfo.theme}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to={ROUTES.REGISTRATION}
                            style={{ color: '#1a4731', backgroundColor: '#ffffff' }}
                            className="inline-flex items-center justify-center px-8 py-3 font-medium rounded hover:bg-neutral-100 transition-colors"
                        >
                            Register Now
                        </Link>
                        <Link
                            to={ROUTES.TRACKS}
                            style={{ color: '#ffffff', borderColor: '#ffffff' }}
                            className="inline-flex items-center justify-center px-8 py-3 border-2 font-medium rounded hover:bg-white/10 transition-colors"
                        >
                            Submit Abstract
                        </Link>
                    </div>
                </div>
            </div>

            {/* Carousel Navigation Arrows - Hidden on mobile, shown on md and up */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 hidden md:flex items-center justify-center text-white/70 hover:text-white transition-colors focus:outline-none"
                aria-label="Previous slide"
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 hidden md:flex items-center justify-center text-white/70 hover:text-white transition-colors focus:outline-none"
                aria-label="Next slide"
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Carousel Dots - Will only show 4 dots now */}
            <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {carouselImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all focus:outline-none ${index === currentSlide
                            ? 'bg-white w-6'
                            : 'bg-white/50 hover:bg-white/70'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
