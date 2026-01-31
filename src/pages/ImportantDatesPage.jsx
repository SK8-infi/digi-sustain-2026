import SectionContainer, { SectionHeader } from '../components/ui/SectionContainer';
import ImportantDatesTimeline from '../components/dates/ImportantDatesTimeline';

export default function ImportantDatesPage() {
    return (
        <>
            {/* Page Header */}
            <div style={{ backgroundColor: '#1a4731' }} className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 style={{ color: '#ffffff' }} className="text-4xl md:text-5xl font-bold mb-4">Important Dates</h1>
                    <p style={{ color: '#9ca3af' }} className="text-xl max-w-3xl">
                        Mark your calendar with these key deadlines and dates for DIGI-SUSTAIN 2026.
                    </p>
                </div>
            </div>

            {/* Timeline */}
            <SectionContainer background="white">
                <SectionHeader
                    title="Conference Timeline"
                    subtitle="Plan your submission and participation according to these important milestones"
                />
                <div className="max-w-4xl mx-auto">
                    <ImportantDatesTimeline />
                </div>
            </SectionContainer>
        </>
    );
}
