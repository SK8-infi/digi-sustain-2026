import { patron, conferenceChair, coordinator, convenor, advisoryBoard } from '../data/committeeData';
import SectionContainer, { SectionHeader } from '../components/ui/SectionContainer';
import CommitteeGrid from '../components/committee/CommitteeGrid';

export default function CommitteePage() {
    return (
        <>
            {/* Page Header */}
            <div style={{ backgroundColor: '#1a4731' }} className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 style={{ color: '#ffffff' }} className="text-4xl md:text-5xl font-bold mb-4">Organizing Committee</h1>
                    <p style={{ color: '#9ca3af' }} className="text-xl max-w-3xl">
                        Meet the distinguished academics and professionals organizing DIGI-SUSTAIN 2026.
                    </p>
                </div>
            </div>

            {/* Committee Members */}
            <SectionContainer background="white">
                {/* Leadership */}
                <div className="mb-16">
                    <SectionHeader
                        title="Conference Leadership"
                        subtitle="Distinguished academics guiding the conference"
                    />

                    {/* Forced Side-by-Side Grid for ALL screens */}
                    <div className="grid grid-cols-2 gap-4 md:gap-8 mb-8">
                        <CommitteeGrid title="Patron" members={patron} layout="single" />
                        <CommitteeGrid title="Conference Chair" members={conferenceChair} layout="single" />
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:gap-8">
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
