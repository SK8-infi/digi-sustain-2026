import { introContent } from '../data/conferenceData';
import SectionContainer, { SectionHeader } from '../components/ui/SectionContainer';
import Card from '../components/ui/Card';

export default function AboutPage() {
    return (
        <>
            {/* Page Header */}
            <div style={{ backgroundColor: '#1a4731' }} className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 style={{ color: '#ffffff' }} className="text-4xl md:text-5xl font-bold mb-4">About the Conference</h1>
                    <p style={{ color: '#9ca3af' }} className="text-xl max-w-3xl">
                        Learn more about DIGI-SUSTAIN 2026 and our vision for digital transformation in sustainable development.
                    </p>
                </div>
            </div>

            {/* About the Conference Theme */}
            <SectionContainer background="white">
                <SectionHeader
                    title="About the Conference Theme"
                    centered={false}
                />
                <div className="max-w-4xl">
                    <Card padding="lg" className="bg-primary-50 border-primary-100">
                        <div className="flex gap-4">
                            <div className="hidden sm:block">
                                <div className="w-12 h-12 bg-primary-200 rounded-lg flex items-center justify-center">
                                    <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <p className="text-lg text-neutral-700 leading-relaxed">
                                    {introContent.aboutTheme}
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>
            </SectionContainer>

            {/* About Transformative Digital Practices */}
            <SectionContainer background="light">
                <SectionHeader
                    title="About Transformative Digital Practices for a Sustainable Future"
                    centered={false}
                />
                <div className="max-w-4xl">
                    <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                        {introContent.aboutDigitalPractices}
                    </p>

                    {/* Key Focus Areas */}
                    <div className="grid sm:grid-cols-2 gap-4 mt-8">
                        <FocusCard
                            icon={
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            }
                            title="Digital Technologies"
                            description="AI, data analytics, and digital platforms driving innovation"
                        />
                        <FocusCard
                            icon={
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            }
                            title="Sustainability"
                            description="Climate change, resource efficiency, and environmental responsibility"
                        />
                        <FocusCard
                            icon={
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            }
                            title="Digital Inclusion"
                            description="Bridging divides and ensuring equitable access to technology"
                        />
                        <FocusCard
                            icon={
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            }
                            title="Ethical Decision-Making"
                            description="Responsible innovation and value-driven practices"
                        />
                    </div>
                </div>
            </SectionContainer>
        </>
    );
}

function FocusCard({ icon, title, description }) {
    return (
        <Card className="flex gap-4">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-700 shrink-0">
                {icon}
            </div>
            <div>
                <h3 className="font-semibold text-neutral-900">{title}</h3>
                <p className="text-sm text-neutral-600">{description}</p>
            </div>
        </Card>
    );
}
