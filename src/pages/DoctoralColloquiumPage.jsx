import { conferenceInfo, doctoralColloquiumHighlights } from '../data/conferenceData';
import SectionContainer, { SectionHeader } from '../components/ui/SectionContainer';
import Card, { CardTitle, CardDescription } from '../components/ui/Card';

import HeroSection from '../components/home/HeroSection';

export default function DoctoralColloquiumPage() {
    return (
        <>
            {/* Page Header */}
            <HeroSection
                title="Doctoral Colloquium"
                subtitle="A dedicated platform for doctoral scholars to present their research, receive feedback, and network with senior academics."
            />

            {/* Key Highlights */}
            <SectionContainer background="white">
                <SectionHeader
                    title="Key Highlights"
                    subtitle="What to expect at the Doctoral Colloquium"
                />
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-1 md:gap-6">
                    {doctoralColloquiumHighlights.map((highlight, index) => (
                        <HighlightCard key={index} highlight={highlight} />
                    ))}
                </div>
            </SectionContainer>

            {/* Why Attend */}
            <SectionContainer background="light">
                <SectionHeader
                    title="Why Attend?"
                    subtitle="Benefits for doctoral scholars and early-career researchers"
                    centered={true}
                />
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-1 md:gap-6 max-w-7xl mx-auto">
                    {[
                        {
                            title: "Expert Feedback",
                            description: "Receive constructive feedback on your research from established academics and industry experts.",
                            icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                        },
                        {
                            title: "Networking",
                            description: "Connect with fellow researchers, potential collaborators, and journal editors.",
                            icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        },
                        {
                            title: "Publication",
                            description: "Selected papers may be considered for publication in partner journals.",
                            icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5S19.832 5.477 21 6.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        },
                        {
                            title: "Recognition",
                            description: "Compete for the Best Paper Award and gain visibility for your research.",
                            icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        },
                        {
                            title: "Methodology",
                            description: "Attend workshops on research methods and analytical tools.",
                            icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                        },
                        {
                            title: "Career",
                            description: "Learn about academic career paths from experienced scholars.",
                            icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        }
                    ].map((benefit, index) => (
                        <div key={index} className="flex">
                            <Card className="hover:shadow-lg transition-all duration-300 border-t-4 border-primary-600 border-x-0 border-b-0 rounded-lg group w-full">
                                <div className="flex flex-col gap-2 px-1 py-2 md:p-4 h-full">
                                    <div className="w-8 h-8 md:w-12 md:h-12 bg-primary-50 rounded-lg md:rounded-xl flex items-center justify-center text-primary-700 group-hover:bg-primary-100 transition-colors shrink-0">
                                        <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={benefit.icon} />
                                        </svg>
                                    </div>
                                    <div className="min-w-0 flex flex-col flex-grow">
                                        <h3 className="font-bold text-neutral-900 text-[10px] md:text-lg mb-1 leading-tight">{benefit.title}</h3>
                                        <p className="text-neutral-600 text-[10px] md:text-sm leading-tight opacity-90">{benefit.description}</p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </SectionContainer>
        </>
    );
}

function HighlightCard({ highlight }) {
    const icons = {
        award: (
            <svg className="w-4 h-4 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
        ),
        presentation: (
            <svg className="w-4 h-4 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
            </svg>
        ),
        workshop: (
            <svg className="w-4 h-4 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
        writing: (
            <svg className="w-4 h-4 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
        ),
        editors: (
            <svg className="w-4 h-4 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
        networking: (
            <svg className="w-4 h-4 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
    };

    return (
        <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-primary-600 border-t-0 border-r-0 border-b-0 rounded-lg group h-full">
            <div className="flex flex-col gap-2 px-1 py-2 md:p-4 h-full">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-primary-50 rounded-lg md:rounded-xl flex items-center justify-center text-primary-700 group-hover:bg-primary-100 transition-colors shrink-0">
                    {icons[highlight.icon] || icons.award}
                </div>
                <div className="flex flex-col flex-grow">
                    <h3 className="font-bold text-neutral-900 text-[10px] md:text-lg mb-1 leading-tight">{highlight.title}</h3>
                    <p className="text-neutral-600 text-[10px] md:text-sm leading-tight opacity-90">{highlight.description}</p>
                </div>
            </div>
        </Card>
    );
}
