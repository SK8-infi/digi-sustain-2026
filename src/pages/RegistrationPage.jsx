import SectionContainer, { SectionHeader } from '../components/ui/SectionContainer';
import RegistrationFeeTable from '../components/registration/RegistrationFeeTable';

export default function RegistrationPage() {
    return (
        <>
            {/* Page Header */}
            <div style={{ backgroundColor: '#1a4731' }} className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 style={{ color: '#ffffff' }} className="text-4xl md:text-5xl font-bold mb-4">Registration</h1>
                    <p style={{ color: '#9ca3af' }} className="text-xl max-w-3xl">
                        Register for DIGI-SUSTAIN 2026 and secure your participation in this premier academic conference.
                    </p>
                </div>
            </div>

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
