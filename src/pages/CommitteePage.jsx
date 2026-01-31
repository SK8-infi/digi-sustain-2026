import { patron, conferenceChair, coordinator, convenor, advisoryBoard } from '../data/committeeData';
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

                    <div className="grid lg:grid-cols-2 gap-8">
                        <CommitteeGrid title="Patron" members={patron} layout="single" />
                        <CommitteeGrid title="Conference Chair" members={conferenceChair} layout="single" />
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <CommitteeGrid title="Conference Coordinator" members={coordinator} layout="single" />
                        <CommitteeGrid title="Conference Convenor" members={convenor} layout="single" />
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
