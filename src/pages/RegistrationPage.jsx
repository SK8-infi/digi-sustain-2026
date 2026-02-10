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

                    <div className="mt-16 pt-8 border-t border-gray-100">
                        <p className="text-sm text-gray-500 text-center max-w-3xl mx-auto italic leading-relaxed">
                            The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
                        </p>
                    </div>
                </div>
            </SectionContainer>
        </>
    );
}
