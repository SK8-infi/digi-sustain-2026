import { patron, conferenceChairs, coordinators, advisoryBoard } from '../data/committeeData';
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
                <div className="mb-16">
                    <SectionHeader
                        title="Conference Leadership"
                        subtitle="Distinguished academics guiding the conference"
                    />

                    {/* Patron - Horizontal Layout */}
                    <div className="max-w-4xl mx-auto mb-16">
                        <CommitteeGrid title="Patron" members={patron} layout="horizontal" />
                    </div>

                    {/* Chairs - Side by Side Equal */}
                    <div className="max-w-4xl mx-auto mb-16">
                        <CommitteeGrid title="Conference Chairs" members={conferenceChairs} layout="grid" />
                    </div>

                    {/* Coordinators - Side by Side Equal */}
                    <div className="max-w-4xl mx-auto">
                        <CommitteeGrid title="Conference Coordinators" members={coordinators} layout="grid" />
                    </div>
                </div>
            </SectionContainer>

            {/* Advisory Board */}
            <SectionContainer background="light">
                <SectionHeader
                    title="Advisory & Editorial Board"
                    subtitle="Expert advisors supporting the conference"
                />
                <CommitteeGrid title="Board Members" members={advisoryBoard} layout="grid" />
            </SectionContainer>
        </>
    );
}
