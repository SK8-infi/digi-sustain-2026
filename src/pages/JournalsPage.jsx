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
                />
                <div className="max-w-4xl mx-auto">
                    <JournalList />
                </div>
            </SectionContainer>

            {/* Publication Guidelines */}
            <SectionContainer background="light">
                <SectionHeader
                    title="Publication Guidelines"
                    subtitle="Important information for authors seeking publication"
                    centered={false}
                />
                <div className="max-w-4xl">
                    <div className="space-y-6">
                        <GuidelineItem
                            number="1"
                            title="Presentation Requirement"
                            description="Only papers presented at the conference will be considered for journal submission."
                        />
                        <GuidelineItem
                            number="2"
                            title="Selection Process"
                            description="Papers will be selected based on research quality, originality, and relevance to journal scope."
                        />
                        <GuidelineItem
                            number="3"
                            title="Peer Review"
                            description="All submissions will undergo the standard peer-review process of the respective journal."
                        />
                        <GuidelineItem
                            number="4"
                            title="No Guarantee"
                            description="Invitation for submission does not guarantee publication. Final acceptance is subject to journal review."
                        />
                    </div>
                </div>
            </SectionContainer>
        </>
    );
}

function GuidelineItem({ number, title, description }) {
    return (
        <div className="flex gap-4 items-start">
            <div className="w-10 h-10 bg-primary-700 text-white rounded-full flex items-center justify-center font-bold shrink-0">
                {number}
            </div>
            <div>
                <h3 className="font-semibold text-neutral-900">{title}</h3>
                <p className="text-neutral-600">{description}</p>
            </div>
        </div>
    );
}
