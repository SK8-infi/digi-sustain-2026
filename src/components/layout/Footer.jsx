import { Link } from 'react-router-dom';
import { NAV_ITEMS } from '../../constants/routes';
import { conferenceInfo } from '../../data/conferenceData';
import { contactPerson } from '../../data/committeeData';

export default function Footer() {
    return (
        <footer style={{ backgroundColor: '#1a4731' }}>
            {/* Main footer content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Conference Info - Left Column */}
                    <div>
                        <h3 style={{ color: '#4ade80' }} className="text-xl font-semibold mb-2">
                            {conferenceInfo.shortTitle}
                        </h3>
                        <p style={{ color: '#9ca3af' }} className="text-sm leading-relaxed mb-4">
                            {conferenceInfo.fullTitle}
                        </p>

                        {/* Badges */}
                        <div className="flex flex-wrap gap-2 mt-4">
                            <span
                                style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)' }}
                                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs"
                            >
                                ✓ Scopus Indexed Journals
                            </span>
                            <span
                                style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)' }}
                                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs"
                            >
                                ✓ ISBN Book of Abstracts
                            </span>
                        </div>
                    </div>

                    {/* Quick Links - Middle Column */}
                    <div>
                        <h4 style={{ color: '#ffffff' }} className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {NAV_ITEMS.slice(0, 6).map((item) => (
                                <li key={item.path}>
                                    <Link
                                        to={item.path}
                                        style={{ color: '#9ca3af' }}
                                        className="hover:text-white transition-colors text-sm underline"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Information - Right Column */}
                    <div>
                        <h4 style={{ color: '#ffffff' }} className="text-lg font-semibold mb-4">Contact Information</h4>
                        <div className="space-y-4 text-sm">
                            <div>
                                <p style={{ color: '#ffffff' }} className="font-medium mb-1">Venue</p>
                                <p style={{ color: '#9ca3af' }}>
                                    Morena Road, IIITM Campus, Gwalior, Madhya Pradesh – 474015, India
                                </p>
                            </div>
                            <div>
                                <p style={{ color: '#ffffff' }} className="font-medium mb-1">Email</p>
                                <a
                                    href={`mailto:${contactPerson.email}`}
                                    style={{ color: '#ffffff' }}
                                    className="hover:text-green-300 transition-colors"
                                >
                                    {contactPerson.email}
                                </a>
                            </div>
                            <div>
                                <p style={{ color: '#ffffff' }} className="font-medium mb-1">Phone</p>
                                <p style={{ color: '#ffffff' }}>
                                    {contactPerson.phones.join(' | ')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Organizer Section */}
                <div className="mt-10 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                        <div>
                            <p style={{ color: '#88a396' }} className="uppercase tracking-wider text-xs mb-1">ORGANIZED BY</p>
                            <p style={{ color: '#ffffff' }}>
                                Department of Management Studies (DoMS), ABV-IIITM Gwalior
                            </p>
                        </div>
                        <div>
                            <p style={{ color: '#88a396' }} className="uppercase tracking-wider text-xs mb-1">CONFERENCE DATES</p>
                            <p style={{ color: '#ffffff' }}>
                                {conferenceInfo.dates}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div style={{ backgroundColor: '#153d29', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
                        <p style={{ color: '#9ca3af' }}>
                            © 2026 DIGI-SUSTAIN. All Rights Reserved.
                        </p>
                        <a
                            href="https://iiitm.ac.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#ffffff' }}
                            className="hover:text-green-300 transition-colors"
                        >
                            ABV-IIITM Gwalior
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
