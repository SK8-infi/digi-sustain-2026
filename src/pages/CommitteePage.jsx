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
                        <CommitteeGrid members={patron} layout="horizontal" />
                    </div>

                    {/* Chairs - Side by Side Equal */}
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-primary-700 mb-8 text-center">Conference Chair</h2>
                        <CommitteeGrid members={conferenceChairs} layout="grid" />
                    </div>
                </div>
            </SectionContainer>

            {/* Board Members Section */}
            <SectionContainer background="light">
                {/* Advisory Board */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-primary-700 mb-8 text-center">Advisory Board</h2>

                    <div className="max-w-6xl mx-auto mb-8">
                        <CommitteeGrid members={advisoryBoardFirstLevel} layout="grid" />
                    </div>

                    <div className="max-w-6xl mx-auto">
                        <CommitteeGrid members={advisoryBoardSecondLevel} layout="grid" />
                    </div>
                </div>

                {/* Editorial Board */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-primary-700 mb-8 text-center">Editorial Board</h2>

                    <div className="max-w-6xl mx-auto mb-8">
                        <CommitteeGrid members={editorialBoardFirstLevel} layout="grid" />
                    </div>

                    <div className="max-w-6xl mx-auto">
                        <CommitteeGrid members={editorialBoardSecondLevel} layout="grid" />
                    </div>
                </div>

                {/* Conference Coordinators */}
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-primary-700 mb-8 text-center">Conference Coordinators</h2>
                    <CommitteeGrid members={coordinators} layout="grid" />
                </div>
            </SectionContainer>
        </>
    );
}
