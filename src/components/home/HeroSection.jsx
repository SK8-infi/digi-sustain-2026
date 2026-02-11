import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { conferenceInfo } from '../../data/conferenceData';
import { ROUTES } from '../../constants/routes';

// Carousel images - Strictly 4 images as requested
const carouselImages = [
    { id: 1, url: 'https://lh3.googleusercontent.com/d/1OoQlP6Ucwi-7L4Oe_0Sl8TCAu8urbm2w', alt: 'Conference venue' },
    { id: 2, url: 'https://lh3.googleusercontent.com/d/1AczsTl9ZAEC0j4xj6NSey5ml9YsMBISh', alt: 'Academic session' },
    { id: 3, url: 'https://lh3.googleusercontent.com/d/1sWTOeNuVDQxUhysQfr9DS6z9aJ5Lypj5', alt: 'Research presentation' },
    { id: 4, url: 'https://lh3.googleusercontent.com/d/1bDYy_ReDauwg-bWK_cXmcHeNcSC7EWVh', alt: 'ABV-IIITM Gwalior' },
];

export default function HeroSection({
    title,
    subtitle,
    isHomePage = false
}) {
    const [currentSlide, setCurrentSlide] = useState(() => {
        const saved = localStorage.getItem('hero_current_slide');
        const initial = parseInt(saved);
        return isNaN(initial) ? 0 : initial % carouselImages.length;
    });

    // Default values if not provided (fallback logic mainly for safety, but helpful)
    const displayTitle = title || conferenceInfo.shortTitle;
    const displaySubtitle = subtitle || conferenceInfo.theme;

    // Persist current slide to localStorage
    useEffect(() => {
        localStorage.setItem('hero_current_slide', currentSlide.toString());
    }, [currentSlide]);

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
        <>
            <section className={`relative w-full overflow-hidden ${isHomePage ? 'h-[77vh] min-h-[550px] max-h-[770px]' : 'h-[50vh] min-h-[400px] max-h-[500px]'}`}>
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
                <div className={`absolute inset-0 ${isHomePage ? 'bg-black/60' : 'bg-black/80'}`} />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex items-center justify-center px-4 pt-28">
                    <div className="text-center text-white px-4 max-w-7xl w-full">
                        {/* Small label - Visible on ALL Pages now */}
                        <p style={{ color: '#ffffff' }} className="text-sm md:text-base uppercase tracking-[0.2em] mb-6 font-semibold drop-shadow-md">
                            {conferenceInfo.dates} • {conferenceInfo.venue.shortName}
                        </p>

                        {/* Main Title - Formatted Smartly */}
                        <div className="flex flex-col gap-4 mb-8">
                            <h1 className="text-white font-light leading-tight drop-shadow-lg">
                                <span className="block text-2xl md:text-3xl lg:text-4xl font-black mb-2 leading-tight text-white drop-shadow-xl uppercase tracking-widest">
                                    {title || "International Conference on Digital Transformative Practices for a Sustainable Future (DIGI-SUSTAIN 2026)"}
                                </span>
                            </h1>
                        </div>

                        {/* Tagline - Overlay (Visible on ALL screens now) */}
                        <p className="hidden md:block text-sm md:text-xl font-bold !text-white mb-8 max-w-6xl mx-auto drop-shadow-[0_4px_6px_rgba(0,0,0,1)] tracking-wide leading-relaxed">
                            {subtitle || "Technology for Viksit Bharat 2047: Digital Innovation, Sustainability, and Inclusive Growth"}
                        </p>

                        {/* CTA Buttons - Restored for Home Page */}
                        {isHomePage && (
                            <div className="flex flex-row gap-3 justify-center mt-4 md:mt-6">
                                <Link
                                    to={ROUTES.REGISTRATION}
                                    style={{ color: '#1a4731', backgroundColor: '#ffffff' }}
                                    className="inline-flex items-center justify-center px-4 py-2 md:px-8 md:py-3 text-xs md:text-base font-bold rounded shadow-lg hover:bg-neutral-100 transition-all hover:-translate-y-0.5"
                                >
                                    Register Now
                                </Link>
                                <Link
                                    to={ROUTES.TRACKS}
                                    style={{ color: '#ffffff', borderColor: '#ffffff' }}
                                    className="inline-flex items-center justify-center px-4 py-2 md:px-8 md:py-3 border-2 text-xs md:text-base font-bold rounded hover:bg-white/10 transition-all hover:-translate-y-0.5"
                                >
                                    Submit Abstract
                                </Link>
                            </div>
                        )}
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

            {/* Mobile Tagline Strip - Thinner & Perfectly Balanced */}
            {isHomePage && (
                <div style={{ backgroundColor: '#1a4731' }} className="md:hidden py-[6px] px-6 text-center border-t border-white/10 flex items-center justify-center">
                    <p style={{ color: '#ffffff' }} className="m-0 text-xs font-bold tracking-wider uppercase leading-snug opacity-100 italic">
                        Technology for Viksit Bharat 2047: Digital Innovation, Sustainability, and Inclusive Growth
                    </p>
                </div>
            )}
        </>
    );
}
