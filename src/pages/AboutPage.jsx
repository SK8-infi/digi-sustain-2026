import { introContent } from '../data/conferenceData';
import SectionContainer, { SectionHeader } from '../components/ui/SectionContainer';
import Card from '../components/ui/Card';

import HeroSection from '../components/home/HeroSection';

export default function AboutPage() {
    return (
        <>
            {/* Page Header */}
            <HeroSection
                title="About the Conference"
                subtitle="Learn more about DIGI-SUSTAIN 2026 and our vision for digital transformation in sustainable development."
            />

            {/* About the Conference Theme */}
            <SectionContainer background="white" className="relative overflow-hidden">
                {/* Watermark */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] opacity-[0.08] pointer-events-none select-none z-0">
                    <img
                        src="https://lh3.googleusercontent.com/d/1cgyYIX8AHiYkGObDopNy3e1NUiK-22kJ"
                        alt="Watermark"
                        className="w-full h-full object-contain"
                    />
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start relative z-10">
                    <div className="order-1 lg:order-1">
                        <SectionHeader
                            title="About the Conference Theme"
                            centered={false}
                            className="!mb-4 lg:!mb-6"
                        />
                        <p className="text-sm sm:text-base lg:text-lg text-neutral-700 leading-relaxed mb-4 lg:mb-6">
                            DIGI-SUSTAIN 2026 invites academicians, researchers, industry practitioners, policymakers, and development professionals to contribute their insights and scholarly work to the global dialogue on the conference theme.
                        </p>
                        <div style={{ borderLeft: '4px solid #1a4731' }} className="pl-4 sm:pl-6 py-2 lg:py-3 bg-neutral-50 rounded-r-lg">
                            <p className="text-sm sm:text-base lg:text-xl font-medium text-neutral-900 italic">
                                "Technology for Viksit Bharat 2047: Digital Innovation, Sustainability, and Inclusive Growth"
                            </p>
                        </div>
                    </div>
                    <div className="order-2 lg:order-2 mt-6 lg:mt-0">
                        <div style={{ backgroundColor: '#1a4731' }} className="rounded-2xl p-4 sm:p-6 lg:p-8 text-white relative overflow-hidden shadow-xl w-full">
                            <div className="relative z-10">
                                <h3 style={{ color: '#ffffff' }} className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 lg:mb-4">Vision 2047</h3>
                                <p style={{ color: '#f0fdf4' }} className="text-xs sm:text-sm lg:text-base leading-relaxed opacity-90">
                                    Our vision is to bridge the gap between burgeoning digital technologies and the pressing need for sustainable development in a rapidly evolving global landscape.
                                </p>
                            </div>
                            {/* Decorative background circle */}
                            <div className="absolute -bottom-8 -right-8 sm:-bottom-12 sm:-right-12 w-32 h-32 sm:w-48 sm:h-48 bg-white/10 rounded-full blur-3xl"></div>
                        </div>
                    </div>
                </div>
            </SectionContainer>

            {/* About Transformative Digital Practices */}
            <SectionContainer background="light">
                <div className="max-w-4xl mx-auto text-center mb-8">
                    <SectionHeader
                        title="About Transformative Digital Practices"
                        subtitle="Focusing on integrating advanced digital technologies with responsible, inclusive, and sustainable development goals."
                    />
                    <p className="text-sm sm:text-base lg:text-lg text-neutral-600 leading-relaxed">
                        {introContent.aboutDigitalPractices}
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
                        description="Climate change and environmental responsibility"
                    />
                    <FocusCard
                        icon={
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        }
                        title="Digital Inclusion"
                        description="Bridging divides and ensuring equitable access"
                    />
                    <FocusCard
                        icon={
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        }
                        title="Ethical Decision"
                        description="Responsible innovation and value-driven practices"
                    />
                </div>
            </SectionContainer>
        </>
    );
}

function FocusCard({ icon, title, description }) {
    return (
        <Card className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 text-center sm:text-left">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-700 shrink-0">
                {icon}
            </div>
            <div>
                <h3 className="text-sm sm:text-base font-semibold text-neutral-900">{title}</h3>
                <p className="text-xs sm:text-sm text-neutral-600">{description}</p>
            </div>
        </Card>
    );
}
