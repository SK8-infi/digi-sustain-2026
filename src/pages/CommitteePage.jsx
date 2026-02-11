import {
    patron,
    conferenceChairs,
    coordinators,
    advisoryBoardFirstLevel,
    advisoryBoardSecondLevel,
    editorialBoardFirstLevel,
    editorialBoardSecondLevel
} from '../data/committeeData';
import SectionContainer, { SectionHeader } from '../components/ui/SectionContainer';
import CommitteeGrid from '../components/committee/CommitteeGrid';

import HeroSection from '../components/home/HeroSection';

export default function CommitteePage() {
    return (
        <>
            {/* Page Header */}
            <HeroSection
                title="Organizing Committee"
                subtitle="Meet the distinguished academics and professionals organizing DIGI-SUSTAIN 2026."
            />

            {/* Committee Members */}
            <SectionContainer background="white">
                {/* Leadership */}
                <div className="mb-8">
                    <SectionHeader
                        title="Conference Leadership"
                        subtitle="Distinguished academics guiding the conference"
                    />

                    {/* Patron - Horizontal Layout */}
                    <div className="max-w-6xl mx-auto mb-10">
                        <h2 className="text-3xl font-bold text-primary-700 mb-8 text-center">Patron</h2>
                        <CommitteeGrid members={patron} layout="horizontal" variant="leadership" />
                    </div>

                    {/* Conference Chairs - Side by Side */}
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-primary-700 mb-8 text-center">Conference Chairs</h2>
                        <CommitteeGrid members={conferenceChairs} layout="grid" variant="leadership" />
                    </div>
                </div>
            </SectionContainer>

            {/* Editorial Board & Advisory Boards - stacked vertically (containment to avoid Chrome compositor glitch) */}
            <SectionContainer background="light">
                <div className="max-w-6xl mx-auto space-y-12 mb-12" style={{ contain: 'layout paint' }}>
                    <div>
                        <h2 className="text-2xl font-bold text-primary-700 mb-6 text-center">Editorial Board</h2>
                        <CommitteeGrid members={editorialBoardFirstLevel} layout="grid" variant="leadership" columns={2} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-primary-700 mb-6 text-center">Internal Advisory Board</h2>
                        <CommitteeGrid members={advisoryBoardFirstLevel} layout="grid" variant="leadership" columns={3} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-primary-700 mb-6 text-center">External Advisory Board</h2>
                        <CommitteeGrid members={advisoryBoardSecondLevel} layout="grid" variant="leadership" startIndex={2} columns={3} />
                    </div>
                </div>

                {/* Conference Coordinator */}
                <div className="max-w-6xl mx-auto" style={{ contain: 'layout paint' }}>
                    <h2 className="text-3xl font-bold text-primary-700 mb-8 text-center">Conference Coordinator</h2>
                    <CommitteeGrid members={coordinators} layout="grid" variant="leadership" />
                </div>
            </SectionContainer>
        </>
    );
}
