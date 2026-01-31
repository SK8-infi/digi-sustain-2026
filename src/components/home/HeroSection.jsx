import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { conferenceInfo } from '../../data/conferenceData';
import { ROUTES } from '../../constants/routes';

// Carousel images - replace these paths with actual images
const carouselImages = [
    { id: 1, placeholder: 'CAROUSEL_IMAGE_1', alt: 'Conference venue' },
    { id: 2, placeholder: 'CAROUSEL_IMAGE_2', alt: 'Academic session' },
    { id: 3, placeholder: 'CAROUSEL_IMAGE_3', alt: 'Research presentation' },
    { id: 4, placeholder: 'CAROUSEL_IMAGE_4', alt: 'Networking event' },
    { id: 5, placeholder: 'CAROUSEL_IMAGE_5', alt: 'IIITM Gwalior campus' },
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
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        {/* Placeholder background */}
                        <div className="w-full h-full bg-gradient-to-br from-neutral-300 via-neutral-200 to-neutral-300 flex items-center justify-center">
                            <span className="text-neutral-500 text-lg font-medium tracking-wider">
                                {image.placeholder}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4 max-w-4xl">
                    {/* Small label */}
                    <p className="text-sm uppercase tracking-[0.2em] mb-4 text-white/80">
                        {conferenceInfo.dates} • {conferenceInfo.venue.shortName}
                    </p>

                    {/* Main Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 leading-tight">
                        {conferenceInfo.shortTitle}
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl font-light mb-8 text-white/90 max-w-2xl mx-auto">
                        {conferenceInfo.theme}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to={ROUTES.REGISTRATION}
                            className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-700 font-medium rounded hover:bg-neutral-100 transition-colors"
                        >
                            Register Now
                        </Link>
                        <Link
                            to={ROUTES.TRACKS}
                            className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-medium rounded hover:bg-white/10 transition-colors"
                        >
                            Submit Abstract
                        </Link>
                    </div>
                </div>
            </div>

            {/* Carousel Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                aria-label="Previous slide"
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                aria-label="Next slide"
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Carousel Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {carouselImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all ${index === currentSlide
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
