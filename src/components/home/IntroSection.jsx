import { Link } from 'react-router-dom';
import { introContent, importantDates } from '../../data/conferenceData';
import { ROUTES } from '../../constants/routes';
import SectionContainer, { SectionHeader } from '../ui/SectionContainer';
import Button from '../ui/Button';

export default function IntroSection() {
    // Get first 3 important dates for preview
    const previewDates = importantDates.slice(0, 3);


    return (
        <SectionContainer background="white" className="relative overflow-hidden">

            {/* Intro Content & Poster Grid */}
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-20 max-w-7xl mx-auto relative z-10">
                {/* Left: Text Content - Expanded Width */}
                <div className="lg:col-span-7 xl:col-span-8 text-left space-y-8">
                    <div className="space-y-4">


                        <SectionHeader
                            title="Welcome to DIGI-SUSTAIN 2026"
                            subtitle="Exploring Digital Innovation for a Sustainable Future"
                            className="!text-left !mb-0"
                        />
                        <div className="w-24 h-1.5 bg-primary-600 rounded-full" />
                    </div>

                    <div className="prose prose-lg text-neutral-600 text-justify max-w-none">
                        <p className="leading-relaxed text-base sm:text-lg text-neutral-700">
                            {introContent.mainIntro}
                        </p>
                    </div>

                    <div className="pt-6 flex flex-wrap gap-5 justify-start">
                        <Button href="/assets/brochure.pdf" variant="primary" size="lg" className="shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                            Download Brochure
                        </Button>
                        <Button to={ROUTES.ABOUT} variant="outline" size="lg" className="hover:bg-primary-50">
                            Learn More
                        </Button>
                    </div>
                </div>

                {/* Right: Poster Image - Static & Clean */}
                <div className="lg:col-span-5 xl:col-span-4 relative flex justify-center lg:justify-end">
                    <div className="relative max-w-[320px] w-full">
                        {/* Decorative background elements - Static */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-primary-100 to-primary-50 rounded-[2rem] opacity-60" />
                        <div className="absolute -inset-2 bg-white/40 rounded-[2rem] backdrop-blur-sm" />

                        <img
                            src="https://lh3.googleusercontent.com/d/1qzkUJ3NWxHbdllW1Hd5Sp6N5bpSAM9sn"
                            alt="Developed India Mission 1947-2047"
                            className="relative rounded-2xl shadow-xl w-full h-auto object-contain border border-white/50 bg-white"
                        />
                    </div>
                </div>
            </div>
        </SectionContainer >
    );
}
