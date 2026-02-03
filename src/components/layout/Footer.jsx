import { Link } from 'react-router-dom';
import { NAV_ITEMS } from '../../constants/routes';
import { conferenceInfo } from '../../data/conferenceData';
import { contactPerson } from '../../data/committeeData';

export default function Footer() {
    return (
        <footer className="relative bg-gradient-to-b from-[#1a4731] to-[#0f2e1f] text-white overflow-hidden font-sans border-t-[3px] border-[#4ade80]">
            {/* Background Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#4ade80] opacity-[0.03] blur-[120px] rounded-full pointer-events-none"></div>

            {/* Main footer content */}
            <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 items-start">

                    {/* Column 1: Quick Links */}
                    <div className="flex flex-col items-center md:items-start space-y-6 md:pr-8 md:border-r md:border-white/10 h-full">
                        <h4 className="text-lg font-bold tracking-wide uppercase !text-white drop-shadow-sm text-center md:text-left w-full">
                            Quick Links
                        </h4>
                        <ul className="space-y-3 w-full flex flex-col items-center md:items-start">
                            {NAV_ITEMS.slice(0, 6).map((item) => (
                                <li key={item.path} className="w-full text-center md:text-left">
                                    <Link
                                        to={item.path}
                                        className="!text-white hover:underline hover:translate-x-1 transition-all duration-300 text-sm font-medium inline-block py-1"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2: DIGI-SUSTAIN 2026 (Center) */}
                    <div className="flex flex-col items-center text-center space-y-6 px-4 md:px-8 h-full">
                        <div className="space-y-2">
                            <h3 className="text-3xl lg:text-4xl font-extrabold !text-white tracking-tight drop-shadow-md">
                                {conferenceInfo.shortTitle}
                            </h3>
                            <div className="h-1 w-16 bg-[#4ade80] rounded-full mx-auto opacity-70"></div>
                        </div>
                        <p className="!text-white text-sm leading-relaxed max-w-md font-medium text-shadow-sm">
                            {conferenceInfo.fullTitle}
                        </p>
                        <div className="bg-white/5 rounded-2xl p-6 border border-white/10 w-full backdrop-blur-sm shadow-inner group hover:bg-white/10 transition-colors duration-300">
                            <p className="!text-white text-xs font-bold uppercase tracking-wider mb-2 transition-colors">Organized By</p>
                            <p className="!text-white font-semibold text-sm leading-snug">
                                Department of Management Studies (DoMS)<br />
                                <span className="!text-white font-normal">ABV-IIITM Gwalior</span>
                            </p>
                        </div>
                    </div>

                    {/* Column 3: Contact Information */}
                    <div className="flex flex-col items-center md:items-end space-y-6 md:pl-8 md:border-l md:border-white/10 h-full text-center md:text-right">
                        <h4 className="text-lg font-bold tracking-wide uppercase !text-white drop-shadow-sm w-full">
                            Contact Information
                        </h4>
                        <div className="space-y-5 w-full">
                            <div className="group flex flex-col items-center md:items-end hover:bg-white/5 p-3 rounded-lg transition-colors duration-300 -mr-3 pr-3">
                                <p className="!text-white font-semibold mb-1 text-sm transition-colors">Venue</p>
                                <p className="!text-white text-sm leading-relaxed max-w-xs">
                                    Morena Road, IIITM Campus,<br />Gwalior, Madhya Pradesh – 474015
                                </p>
                            </div>
                            <div className="group flex flex-col items-center md:items-end">
                                <p className="!text-white font-semibold mb-1 text-sm transition-colors">Email</p>
                                <a
                                    href={`mailto:${contactPerson.email}`}
                                    className="!text-white hover:underline transition-colors text-sm font-medium border-b border-white pb-0.5"
                                >
                                    {contactPerson.email}
                                </a>
                            </div>
                            <div className="group flex flex-col items-center md:items-end">
                                <p className="!text-white font-semibold mb-1 text-sm transition-colors">Phone</p>
                                <p className="!text-white text-sm font-mono tracking-tight">
                                    {contactPerson.phones.join(' | ')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Separator Line */}
                <div className="mt-16 mb-8 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                {/* Organizer & Dates Compact Row */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-center md:text-left !text-white pb-8">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse"></span>
                        <span className="font-medium tracking-wide">Conference Dates: <span className="!text-white">{conferenceInfo.dates}</span></span>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="bg-[#153d29] border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-5">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wide !text-white font-medium">
                        <p className="hover:text-white transition-colors">
                            © 2026 DIGI-SUSTAIN. All Rights Reserved.
                        </p>
                        <a
                            href="https://iiitm.ac.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="!text-white hover:text-[#4ade80] transition-colors flex items-center gap-2"
                        >
                            <span className="w-px h-3 bg-white block"></span>
                            ABV-IIITM Gwalior
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
