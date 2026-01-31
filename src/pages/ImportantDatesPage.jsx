import SectionContainer, { SectionHeader } from '../components/ui/SectionContainer';
import ImportantDatesTimeline from '../components/dates/ImportantDatesTimeline';

import HeroSection from '../components/home/HeroSection';

export default function ImportantDatesPage() {
    return (
        <>
            {/* Page Header */}
            <HeroSection
                title="Important Dates"
                subtitle="Mark your calendar with these key deadlines and dates for DIGI-SUSTAIN 2026."
            />

            {/* Timeline */}
            <SectionContainer background="white">
                <SectionHeader
                    title="Conference Timeline"
                    subtitle="Plan your submission and participation according to these important milestones"
                />
                <div className="max-w-7xl mx-auto px-4">
                    <ImportantDatesTimeline />
                </div>
            </SectionContainer>
        </>
    );
}
