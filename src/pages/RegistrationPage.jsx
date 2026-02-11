import SectionContainer, { SectionHeader } from '../components/ui/SectionContainer';
import RegistrationFeeTable from '../components/registration/RegistrationFeeTable';

import HeroSection from '../components/home/HeroSection';

export default function RegistrationPage() {
    return (
        <>
            {/* Page Header */}
            <HeroSection
                title="Registration"
                subtitle="Register for DIGI-SUSTAIN 2026 and secure your participation in this premier academic conference."
            />

            {/* Registration Details */}
            <SectionContainer background="white">
                <SectionHeader
                    title="Registration Details"
                    subtitle="Select your participation type and complete your registration"
                />
                <div className="max-w-4xl mx-auto">
                    <RegistrationFeeTable />



                </div>
            </SectionContainer>
        </>
    );
}
