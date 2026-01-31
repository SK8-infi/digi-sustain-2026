import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_ITEMS, ROUTES } from '../../constants/routes';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-md">
            {/* Top bar - Tiny version */}
            <div style={{ backgroundColor: '#1a4731' }} className="py-1">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-[10px] md:text-xs">
                    <span style={{ color: '#ffffff' }}>15–17 May 2026</span>
                    <span style={{ color: '#ffffff' }} className="hidden sm:inline">ABV-IIITM Gwalior, India</span>
                    <a href="mailto:shishir@iiitm.ac.in" style={{ color: '#ffffff' }} className="hover:underline">
                        Contact Us
                    </a>
                </div>
            </div>

            {/* Main navbar - Tiny version */}
            <nav style={{ borderBottom: '1px solid rgba(229, 231, 235, 0.5)' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-12">
                        {/* Logo - Smaller */}
                        <Link to={ROUTES.HOME} className="flex items-center gap-2">
                            <div
                                style={{ backgroundColor: '#1a4731' }}
                                className="w-7 h-7 rounded-full flex items-center justify-center"
                            >
                                <span style={{ color: '#ffffff' }} className="font-bold text-[10px]">DS</span>
                            </div>
                            <div>
                                <span style={{ color: '#1a4731' }} className="font-semibold text-sm tracking-tight">DIGI-SUSTAIN</span>
                                <span style={{ color: '#737373' }} className="font-normal text-sm ml-1">2026</span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-6">
                            {NAV_ITEMS.slice(0, 7).map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `text-sm font-medium tracking-wide uppercase transition-colors`
                                    }
                                    style={({ isActive }) => ({
                                        color: isActive ? '#1a4731' : '#525252'
                                    })}
                                >
                                    {item.label}
                                </NavLink>
                            ))}

                            {/* More dropdown */}
                            <div className="relative group">
                                <button
                                    style={{ color: '#525252' }}
                                    className="text-sm font-medium tracking-wide uppercase transition-colors flex items-center gap-1 hover:opacity-80"
                                >
                                    More
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div
                                    style={{ border: '1px solid #e5e7eb' }}
                                    className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                                >
                                    {NAV_ITEMS.slice(7).map((item) => (
                                        <NavLink
                                            key={item.path}
                                            to={item.path}
                                            className="block px-4 py-2 text-sm"
                                            style={({ isActive }) => ({
                                                color: isActive ? '#1a4731' : '#525252',
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
                            style={{ color: '#525252' }}
                            className="lg:hidden p-2"
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
                        <div style={{ borderTop: '1px solid #e5e7eb' }} className="lg:hidden py-4">
                            <div className="flex flex-col gap-1">
                                {NAV_ITEMS.map((item) => (
                                    <NavLink
                                        key={item.path}
                                        to={item.path}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="px-4 py-2 text-sm font-medium"
                                        style={({ isActive }) => ({
                                            color: isActive ? '#1a4731' : '#525252',
                                            backgroundColor: isActive ? '#f0f5f2' : 'transparent'
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
