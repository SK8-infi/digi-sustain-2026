import { useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { NAV_ITEMS, ROUTES } from '../../constants/routes';
import NavLinks from './NavLinks';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Check if any item in the 'More' dropdown is active
    const isMoreActive = NAV_ITEMS.slice(7).some(item => location.pathname === item.path);

    const handleSmoothScrollNav = (e, path) => {
        e.preventDefault();

        // 1. Start Scroll
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        // 2. Change Content (after short delay to allow scroll to start visually)
        setTimeout(() => {
            navigate(path);
            setIsMenuOpen(false);
        }, 300);
    };

    return (
        <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
            {/* Top Branding Bar - College Branding */}
            <a
                href="https://iiitm.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="block border-b-2 hover:bg-[#153d29] transition-colors"
                style={{ backgroundColor: '#1a4731', borderColor: '#0d2619' }}
            >
                <div className="flex items-center w-full min-h-[64px] py-2 px-2 sm:px-4">
                    {/* Left Column - Logo */}
                    <div className="w-12 sm:w-16 flex-shrink-0 flex justify-start">
                        <div className="bg-white rounded-full p-[3px] w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shadow-lg">
                            <img
                                src="https://lh3.googleusercontent.com/d/1LNtqXOXfvsyYZaclWSc2QM-yzpxov1vw"
                                alt="ABV-IIITM Gwalior Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Center Column - Text (Perfectly centered globally) */}
                    <div className="flex-1 flex items-center justify-center px-2 overflow-hidden">
                        <h2
                            className="text-white font-black uppercase text-center leading-[1.1] tracking-tight"
                            style={{
                                fontSize: 'clamp(0.5rem, 2.85vw, 1.75rem)',
                                letterSpacing: '0.01em',
                                color: '#ffffff'
                            }}
                        >
                            Atal Bihari Vajpayee Indian Institute of Information Technology and Management, Gwalior
                        </h2>
                    </div>

                    {/* Right Column - Balanced placeholder for centering */}
                    <div className="w-12 sm:w-16 flex-shrink-0"></div>
                </div>
            </a>

            {/* Main navbar - With Marquee */}
            <nav className="border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-12">
                        {/* Marquee Container - Responsive width */}
                        <div className="marquee-container flex-shrink-0" style={{ width: 'clamp(180px, 20vw, 250px)' }}>
                            {/* Only one instance as requested */}
                            <div className="inline-flex items-center gap-2 mr-4 lg:mr-8">
                                <div
                                    style={{ backgroundColor: '#1a4731' }}
                                    className="w-7 h-7 rounded-full flex items-center justify-center"
                                >
                                    <span className="text-white font-bold text-[10px]">DS</span>
                                </div>
                                <div>
                                    <span style={{ color: '#1a4731' }} className="font-semibold text-xs sm:text-sm tracking-tight uppercase">DIGI-SUSTAIN</span>
                                    <span className="text-gray-500 font-normal text-xs sm:text-sm ml-1 uppercase">2026</span>
                                </div>
                            </div>
                        </div>

                        {/* Navigation - Hidden on mobile, shown on desktop */}
                        <div className="hidden lg:flex items-center h-full">
                            <NavLinks layout="desktop" className="gap-2 xl:gap-6" />
                        </div>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-2 text-gray-500 ml-auto"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Navigation Dropdown */}
                    {isMenuOpen && (
                        <div className="lg:hidden py-2 border-t border-gray-100 bg-white shadow-xl rounded-b-xl">
                            <div className="flex flex-col gap-1">
                                {NAV_ITEMS.map((item) => (
                                    <NavLink
                                        key={item.path}
                                        to={item.path}
                                        onClick={(e) => handleSmoothScrollNav(e, item.path)}
                                        className="px-4 py-2 text-sm font-medium transition-colors border-l-4"
                                        style={({ isActive }) => ({
                                            color: isActive ? '#1a4731' : '#525252',
                                            fontWeight: isActive ? '700' : '500',
                                            backgroundColor: isActive ? '#f0f5f2' : 'transparent',
                                            borderColor: isActive ? '#1a4731' : 'transparent'
                                        })}
                                    >
                                        {item.label}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
}
