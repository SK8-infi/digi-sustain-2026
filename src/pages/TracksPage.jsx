import { functionalTracks, specializedTracks } from '../data/tracksData';
import SectionContainer, { SectionHeader } from '../components/ui/SectionContainer';
import TrackCard from '../components/tracks/TrackCard';
import Button from '../components/ui/Button';
import { ROUTES } from '../constants/routes';

export default function TracksPage() {
    return (
        <>
            {/* Page Header */}
            <div style={{ backgroundColor: '#1a4731' }} className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 style={{ color: '#ffffff' }} className="text-4xl md:text-5xl font-bold mb-4">Call for Papers</h1>
                    <p style={{ color: '#9ca3af' }} className="text-xl max-w-3xl">
                        Submit your research across our diverse range of conference tracks covering functional management and specialized interdisciplinary areas.
                    </p>
                </div>
            </div>

            {/* Functional Management Tracks */}
            <SectionContainer background="white">
                <SectionHeader
                    title="Functional Management Tracks"
                    subtitle="Core management disciplines exploring digital transformation"
                    centered={false}
                />
                <div className="grid md:grid-cols-2 gap-4">
                    {functionalTracks.map((track) => (
                        <TrackCard key={track.id} track={track} variant="functional" />
                    ))}
                </div>
            </SectionContainer>

            {/* Specialized & Interdisciplinary Tracks */}
            <SectionContainer background="light">
                <SectionHeader
                    title="Specialized & Interdisciplinary Tracks"
                    subtitle="Cutting-edge research areas at the intersection of technology and sustainability"
                    centered={false}
                />
                <div className="grid md:grid-cols-2 gap-4">
                    {specializedTracks.map((track) => (
                        <TrackCard key={track.id} track={track} variant="specialized" />
                    ))}
                </div>
            </SectionContainer>

            {/* Submission CTA */}
            <SectionContainer background="primary">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-primary-900 mb-4">
                        Ready to Submit Your Research?
                    </h2>
                    <p className="text-lg text-primary-700 mb-8 max-w-2xl mx-auto">
                        Abstract submissions are welcome until 31 March 2026. All accepted abstracts will be included in the Book of Abstracts with ISBN.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button to={ROUTES.REGISTRATION} variant="primary" size="lg">
                            Register & Submit
                        </Button>
                        <Button to={ROUTES.IMPORTANT_DATES} variant="outline" size="lg">
                            View Deadlines
                        </Button>
                    </div>
                </div>
            </SectionContainer>
        </>
    );
}
