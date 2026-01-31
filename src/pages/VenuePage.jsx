import { conferenceInfo, aboutInstitute } from '../data/conferenceData';
import SectionContainer, { SectionHeader } from '../components/ui/SectionContainer';
import Card from '../components/ui/Card';

import HeroSection from '../components/home/HeroSection';

export default function VenuePage() {
    return (
        <>
            {/* Page Header */}
            <HeroSection
                title="Venue"
                subtitle={`Join us at ${conferenceInfo.venue.shortName} for DIGI-SUSTAIN 2026.`}
            />

            {/* Venue Details */}
            <SectionContainer background="white">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left: Institute Info */}
                    <div>
                        <SectionHeader
                            title="About the Host Institute"
                            centered={false}
                        />

                        {/* ABV-IIITM */}
                        <Card className="mb-6" padding="lg">
                            <h3 className="text-xl font-semibold text-neutral-900 mb-4 pb-2 border-b border-primary-200">
                                {conferenceInfo.venue.name}
                            </h3>
                            <p className="text-neutral-700 leading-relaxed">
                                {aboutInstitute.iiitm}
                            </p>
                        </Card>

                        {/* DoMS */}
                        <Card padding="lg">
                            <h3 className="text-xl font-semibold text-neutral-900 mb-4 pb-2 border-b border-primary-200">
                                Department of Management Studies (DoMS)
                            </h3>
                            <p className="text-neutral-700 leading-relaxed">
                                {aboutInstitute.doms}
                            </p>
                        </Card>

                        {/* Address */}
                        <div className="mt-8 p-6 bg-primary-50 rounded-xl border border-primary-100">
                            <h4 className="font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                                <svg className="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Conference Venue Address
                            </h4>
                            <p className="text-neutral-700">
                                {conferenceInfo.venue.address}
                            </p>
                        </div>
                    </div>

                    {/* Right: Map */}
                    <div>
                        <SectionHeader
                            title="Location"
                            centered={false}
                        />
                        <div className="rounded-xl overflow-hidden shadow-lg border border-neutral-200 h-[500px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.9997548396183!2d78.18661701503485!3d26.23371798343716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c5d8e25ba547%3A0xa64cc5ad62e8c22d!2sABV-Indian%20Institute%20of%20Information%20Technology%20and%20Management%2C%20Gwalior!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="ABV-IIITM Gwalior Location"
                            />
                        </div>

                        {/* Quick Info */}
                        <div className="mt-6 grid sm:grid-cols-2 gap-4">
                            <QuickInfo
                                icon={
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                }
                                label="Conference Dates"
                                value={conferenceInfo.dates}
                            />
                            <QuickInfo
                                icon={
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                }
                                label="Venue Type"
                                value="Institute of National Importance"
                            />
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </>
    );
}

function QuickInfo({ icon, label, value }) {
    return (
        <div className="flex items-center gap-3 p-4 bg-neutral-50 rounded-lg">
            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-700">
                {icon}
            </div>
            <div>
                <p className="text-sm text-neutral-500">{label}</p>
                <p className="font-semibold text-neutral-900">{value}</p>
            </div>
        </div>
    );
}
