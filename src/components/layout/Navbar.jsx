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
        <header className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100">
            {/* Top Branding Bar - College Branding */}
            <a
                href="https://iiitm.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="block border-b-2 hover:bg-[#153d29] transition-colors"
                style={{ backgroundColor: '#1a4731', borderColor: '#0d2619' }}
            >
                <div className="flex items-center w-full min-h-[48px] py-1 px-2 sm:px-4">
                    {/* Left Column - Logo */}
                    <div className="w-10 sm:w-14 flex-shrink-0 flex justify-start">
                        <div className="bg-white rounded-full p-[3px] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg">
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
                            className="text-white font-bold uppercase text-center leading-tight tracking-tight"
                            style={{
                                fontSize: 'clamp(0.6rem, 1.6vw, 1.4rem)',
                                letterSpacing: '0.01em',
                                color: '#ffffff',
                                textWrap: 'balance'
                            }}
                        >
                            Atal Bihari Vajpayee Indian Institute of Information Technology and Management, Gwalior
                        </h2>
                    </div>


                </div>
            </a>

            {/* Main navbar - With Marquee */}
            <nav className="border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-12">
                        <div className="flex-shrink-0 flex items-center gap-3 mr-4 lg:mr-8">
                            <div className="w-10 h-10 rounded-full border-2 border-[#1a4731]/10 overflow-hidden bg-white shadow-sm p-0.5">
                                <img
                                    src="https://lh3.googleusercontent.com/d/1cgyYIX8AHiYkGObDopNy3e1NUiK-22kJ"
                                    alt="DIGI-SUSTAIN 2026"
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                            <span className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 font-bold text-[#1a4731] text-xl md:text-2xl tracking-tight whitespace-nowrap pt-1 lg:pt-0">DIGI-SUSTAIN 2026</span>
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
