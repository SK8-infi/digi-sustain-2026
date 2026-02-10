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
            <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-6 items-stretch">

                    {/* Column 2: DIGI-SUSTAIN 2026 (Center - Now Top on Mobile) */}
                    <div className="order-1 md:order-2 col-span-2 md:col-span-1 flex flex-col items-center text-center space-y-3 px-4 md:px-6 h-full">
                        <div className="space-y-1.5">
                            <h3 className="text-xl lg:text-2xl font-extrabold !text-white tracking-tight drop-shadow-md">
                                {conferenceInfo.shortTitle}
                            </h3>
                            <div className="h-1 w-12 bg-[#4ade80] rounded-full mx-auto opacity-70"></div>
                        </div>
                        <p className="!text-white text-sm leading-relaxed max-w-md font-medium text-shadow-sm">
                            {conferenceInfo.fullTitle}
                        </p>
                        <div className="bg-white/5 rounded-xl p-3 border border-white/10 w-full backdrop-blur-sm shadow-inner group hover:bg-white/10 transition-colors duration-300">
                            <p className="!text-white text-xs font-bold uppercase tracking-wider mb-1 transition-colors">Organized By</p>
                            <p className="!text-white font-semibold text-sm leading-snug">
                                Department of Management Studies (DoMS)<br />
                                <span className="!text-white font-normal">ABV-IIITM Gwalior</span>
                            </p>
                        </div>
                    </div>

                    {/* Column 1: Quick Links (Bottom Left on Mobile) */}
                    <div className="order-2 md:order-1 col-span-1 flex flex-col items-start space-y-3 md:pr-8 md:border-r md:border-white/10 h-full">
                        <h4 className="text-base font-bold tracking-wide uppercase !text-white drop-shadow-sm text-left w-full pl-2 md:pl-0">
                            Quick Links
                        </h4>
                        <ul className="space-y-1.5 w-full flex flex-col items-start pl-2 md:pl-0 flex-grow">
                            {NAV_ITEMS.slice(0, 6).map((item) => (
                                <li key={item.path} className="w-full text-left">
                                    <Link
                                        to={item.path}
                                        className="!text-white hover:underline hover:translate-x-1 transition-all duration-300 text-sm font-medium inline-block py-0.5"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact Information (Bottom Right on Mobile) */}
                    <div className="order-3 md:order-3 col-span-1 flex flex-col items-end space-y-3 md:pl-8 md:border-l md:border-white/10 h-full text-right">
                        <h4 className="text-base font-bold tracking-wide uppercase !text-white drop-shadow-sm w-full pr-2 md:pr-0">
                            Contact Info
                        </h4>
                        <div className="w-full pr-2 md:pr-0 flex-grow grid grid-cols-2 gap-2">
                            {/* Venue - Top Left in Grid */}
                            <div className="col-span-1 flex flex-col items-end hover:bg-white/5 p-1.5 rounded-lg transition-colors duration-300">
                                <p className="!text-white font-semibold mb-0.5 text-sm transition-colors w-full text-right">Venue</p>
                                <p className="!text-white text-xs leading-tight max-w-xs text-right">
                                    Morena Road, IIITM Campus,<br />Gwalior, M.P.
                                </p>
                            </div>

                            {/* Email - Top Right in Grid */}
                            <div className="col-span-1 flex flex-col items-end p-1.5">
                                <p className="!text-white font-semibold mb-0.5 text-sm transition-colors w-full text-right">Email</p>
                                <div className="flex flex-col items-end gap-2">
                                    <a
                                        href="mailto:chetanya@iiitm.ac.in"
                                        className="!text-white hover:underline transition-colors text-xs font-medium border-b border-white pb-0.5 text-right break-all"
                                    >
                                        chetanya@iiitm.ac.in
                                    </a>
                                    <a
                                        href={`mailto:${contactPerson.email}`}
                                        className="!text-white hover:underline transition-colors text-xs font-medium border-b border-white pb-0.5 text-right break-all"
                                    >
                                        {contactPerson.email}
                                    </a>
                                </div>
                            </div>

                            {/* Phone - Bottom Full Width */}
                            <div className="col-span-2 flex flex-col items-end p-1">
                                <p className="!text-white font-semibold mb-0.5 text-sm transition-colors">Phone</p>
                                <p className="!text-white text-xs font-mono tracking-tight text-right">
                                    {contactPerson.phones.join(' | ')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Separator Line */}
                <div className="mt-6 mb-3 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                {/* Organizer & Dates Compact Row */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-center md:text-left !text-white pb-2">
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse"></span>
                        <span className="font-medium tracking-wide">Dates: <span className="!text-white">{conferenceInfo.dates}</span></span>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="bg-[#153d29] border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-2">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-xs tracking-wide !text-white font-medium">
                        <p className="hover:text-white transition-colors">
                            © 2026 DIGI-SUSTAIN. All Rights Reserved.
                        </p>
                        <a
                            href="https://iiitm.ac.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="!text-white hover:text-[#4ade80] transition-colors flex items-center gap-2"
                        >
                            <span className="w-px h-2.5 bg-white block"></span>
                            ABV-IIITM Gwalior
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
