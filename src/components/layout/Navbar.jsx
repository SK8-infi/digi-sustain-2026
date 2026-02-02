import { useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { NAV_ITEMS, ROUTES } from '../../constants/routes';

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
                <div className="flex items-center w-full min-h-[64px] py-3">
                    {/* Official Logo - Full height strip */}
                    <div
                        className="flex-shrink-0 flex items-center justify-center px-4 sm:px-6"
                        style={{ backgroundColor: 'transparent' }}
                    >
                        <div className="bg-white rounded-full p-[3px] w-14 h-14 flex items-center justify-center shadow-lg">
                            <img
                                src="https://lh3.googleusercontent.com/d/1LNtqXOXfvsyYZaclWSc2QM-yzpxov1vw"
                                alt="ABV-IIITM Gwalior Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Text - Dynamic scaling, priority single line, graceful 2-line fallback */}
                    <div className="flex-1 flex items-center justify-center py-2 px-2 sm:px-4 overflow-hidden">
                        <h2
                            className="text-white font-black uppercase text-center leading-[1.1] w-full flex items-center justify-center"
                            style={{
                                fontSize: 'clamp(0.75rem, 1.5vw, 1.75rem)', // Reduced to fit on one line
                                letterSpacing: '0.02em', // Slightly tighter spacing to help fit
                                color: '#ffffff'
                            }}
                        >
                            Atal Bihari Vajpayee Indian Institute of Information Technology and Management, Gwalior
                        </h2>
                    </div>
                </div>
            </a>

            {/* Main navbar - Tiny version */}
            <nav>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-12">
                        {/* Logo - Smaller */}
                        <Link
                            to={ROUTES.HOME}
                            onClick={(e) => handleSmoothScrollNav(e, ROUTES.HOME)}
                            className="flex items-center gap-2"
                        >
                            <div
                                style={{ backgroundColor: '#1a4731' }}
                                className="w-7 h-7 rounded-full flex items-center justify-center"
                            >
                                <span className="text-white font-bold text-[10px]">DS</span>
                            </div>
                            <div>
                                <span style={{ color: '#1a4731' }} className="font-semibold text-sm tracking-tight">DIGI-SUSTAIN</span>
                                <span className="text-gray-500 font-normal text-sm ml-1">2026</span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-6">
                            {NAV_ITEMS.slice(0, 7).map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    onClick={(e) => handleSmoothScrollNav(e, item.path)}
                                    className={({ isActive }) =>
                                        `text-xs font-medium tracking-wide uppercase transition-all duration-200`
                                    }
                                    style={({ isActive }) => ({
                                        color: isActive ? '#1a4731' : '#525252',
                                        fontWeight: isActive ? '700' : '500',
                                        borderBottom: isActive ? '2px solid #1a4731' : '2px solid transparent',
                                        paddingBottom: '2px'
                                    })}
                                >
                                    {item.label}
                                </NavLink>
                            ))}

                            {/* More dropdown */}
                            <div className="relative group h-full flex items-center">
                                <button
                                    style={{
                                        color: isMoreActive ? '#1a4731' : '#525252',
                                        fontWeight: isMoreActive ? '700' : '500',
                                        borderBottom: isMoreActive ? '2px solid #1a4731' : '2px solid transparent',
                                        paddingBottom: '2px'
                                    }}
                                    className="text-xs font-medium tracking-wide uppercase transition-all duration-200 flex items-center gap-1 hover:opacity-80"
                                >
                                    More
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div className="absolute right-0 top-10 mt-1 w-48 bg-white rounded shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    {NAV_ITEMS.slice(7).map((item) => (
                                        <NavLink
                                            key={item.path}
                                            to={item.path}
                                            onClick={(e) => handleSmoothScrollNav(e, item.path)}
                                            className="block px-4 py-2 text-[13px] uppercase tracking-wider transition-colors"
                                            style={({ isActive }) => ({
                                                color: isActive ? '#1a4731' : '#525252',
                                                fontWeight: isActive ? '700' : '500',
                                                backgroundColor: isActive ? '#f0f5f2' : 'transparent'
                                            })}
                                        >
                                            {item.label}
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-2 text-gray-500"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <div className="lg:hidden py-4 border-t border-gray-100 bg-white shadow-xl rounded-b-xl">
                            <div className="flex flex-col gap-1">
                                {NAV_ITEMS.map((item) => (
                                    <NavLink
                                        key={item.path}
                                        to={item.path}
                                        onClick={(e) => handleSmoothScrollNav(e, item.path)}
                                        className="px-4 py-3 text-sm font-medium transition-colors border-l-4"
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
