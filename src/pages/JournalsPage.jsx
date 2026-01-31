import SectionContainer, { SectionHeader } from '../components/ui/SectionContainer';
import JournalList from '../components/journals/JournalList';

import HeroSection from '../components/home/HeroSection';

export default function JournalsPage() {
    return (
        <>
            {/* Page Header */}
            <HeroSection
                title="Partner Journals"
                subtitle="Selected papers from DIGI-SUSTAIN 2026 may be considered for publication in our partner journals."
            />

            {/* Journal List */}
            <SectionContainer background="white">
                <SectionHeader
                    title="Publication Opportunities"
                    subtitle="High-quality research papers presented at the conference may be invited for submission to these reputed journals."
                    centered={true}
                />
                <JournalList />
            </SectionContainer>

            {/* Publication Guidelines */}
            <SectionContainer background="light">
                <SectionHeader
                    title="Publication Guidelines"
                    subtitle="Important information for authors seeking publication"
                    centered={true}
                />
                <div className="max-w-4xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Presentation Requirement",
                                description: "Only papers presented at the conference will be considered for journal submission.",
                                icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                            },
                            {
                                title: "Selection Process",
                                description: "Papers will be selected based on research quality, originality, and relevance to journal scope.",
                                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            },
                            {
                                title: "Peer Review",
                                description: "All submissions will undergo the standard peer-review process of the respective journal.",
                                icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                            },
                            {
                                title: "No Guarantee",
                                description: "Invitation for submission does not guarantee publication. Final acceptance is subject to journal review.",
                                icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            }
                        ].map((item, index) => (
                            <div key={index} className="flex gap-5 group">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center shrink-0 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-neutral-900 text-lg mb-1">{item.title}</h3>
                                    <p className="text-neutral-600 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionContainer>
        </>
    );
}

// GuidelineItem is now integrated into the map above for better styling control

