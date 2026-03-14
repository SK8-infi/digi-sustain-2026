import { directorsConclaveSpeaker } from '../data/conclaveData';
import SectionContainer, { SectionHeader } from '../components/ui/SectionContainer';
import CommitteeGrid from '../components/committee/CommitteeGrid';
import HeroSection from '../components/home/HeroSection';

export default function ConclavePage() {
    return (
        <>
            <HeroSection
                title="Conclaves"
                subtitle="Join industry leaders, esteemed editors, and directors for insightful discussions at DIGI-SUSTAIN 2026."
            />

            <SectionContainer background="white">
                <div className="mb-8">
                    <SectionHeader title="Directors' Conclave" />
                    <div className="max-w-4xl mx-auto text-center mb-10">
                        <p className="text-xl text-gray-700">
                            Received acceptance from <strong>Dr. Mohua Banerjee</strong>, Director, IMI Kolkata to participate in the Directors’ Conclave.
                        </p>
                    </div>
                    <div className="max-w-6xl mx-auto mb-10">
                        <CommitteeGrid members={directorsConclaveSpeaker} layout="horizontal" variant="leadership" />
                    </div>
                </div>
            </SectionContainer>

            <SectionContainer background="light">
                <div className="mb-12">
                    <SectionHeader title="Editorial Conclave" />
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-xl text-gray-700 italic">
                            Status: Content to be updated soon. Stay tuned for our list of esteemed editors and media moguls.
                        </p>
                    </div>
                </div>
            </SectionContainer>

            <SectionContainer background="white">
                <div className="mb-12">
                    <SectionHeader title="Industrial Conclave" />
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-xl text-gray-700 italic">
                            Status: Details coming soon. We are currently finalizing our lineup of industry leaders and innovators.
                        </p>
                    </div>
                </div>
            </SectionContainer>
        </>
    );
}
