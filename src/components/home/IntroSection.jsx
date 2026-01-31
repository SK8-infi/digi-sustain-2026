import { Link } from 'react-router-dom';
import { introContent, importantDates } from '../../data/conferenceData';
import { ROUTES } from '../../constants/routes';
import SectionContainer, { SectionHeader } from '../ui/SectionContainer';
import Card, { CardTitle, CardDescription } from '../ui/Card';
import Button from '../ui/Button';

export default function IntroSection() {
    // Get first 3 important dates for preview
    const previewDates = importantDates.slice(0, 3);

    return (
        <SectionContainer background="white">
            {/* Intro Text */}
            <div className="max-w-4xl mx-auto text-center mb-16">
                <SectionHeader
                    title="Welcome to DIGI-SUSTAIN 2026"
                    subtitle="Exploring Digital Innovation for a Sustainable Future"
                />
                <p className="text-lg text-neutral-600 leading-relaxed">
                    {introContent.mainIntro}
                </p>
            </div>

            {/* Quick Info Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
                {/* Important Dates Preview */}
                <Card className="md:col-span-2">
                    <CardTitle>Key Dates</CardTitle>
                    <CardDescription>Mark your calendar for these important deadlines</CardDescription>
                    <div className="mt-4 space-y-3">
                        {previewDates.map((item, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center py-2 border-b border-neutral-100 last:border-0"
                            >
                                <span className="text-neutral-700">{item.activity}</span>
                                <span className={`font-semibold ${item.isDeadline ? 'text-primary-700' : 'text-neutral-600'}`}>
                                    {item.date}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4">
                        <Button to={ROUTES.IMPORTANT_DATES} variant="ghost" size="sm">
                            View All Dates →
                        </Button>
                    </div>
                </Card>

                {/* Brochure Download */}
                <Card className="bg-primary-50 border-primary-100">
                    <div className="flex flex-col items-center text-center h-full justify-center py-4">
                        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                            <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <CardTitle>Download Brochure</CardTitle>
                        <CardDescription>Get the complete conference details</CardDescription>
                        <Button
                            href="#"
                            variant="primary"
                            size="sm"
                            className="mt-4"
                        >
                            {/* BROCHURE_DOWNLOAD_PLACEHOLDER */}
                            Download PDF
                        </Button>
                    </div>
                </Card>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <HighlightCard
                    icon={
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    }
                    title="14+ Tracks"
                    description="Covering functional & specialized domains"
                    link={ROUTES.TRACKS}
                />
                <HighlightCard
                    icon={
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                    }
                    title="4+ Journals"
                    description="Scopus & ABDC indexed publication partners"
                    link={ROUTES.JOURNALS}
                />
                <HighlightCard
                    icon={
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    }
                    title="Doctoral Colloquium"
                    description="Special sessions for PhD scholars"
                    link={ROUTES.DOCTORAL_COLLOQUIUM}
                />
                <HighlightCard
                    icon={
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                    }
                    title="Best Paper Award"
                    description="Recognition for outstanding research"
                    link={ROUTES.DOCTORAL_COLLOQUIUM}
                />
            </div>
        </SectionContainer>
    );
}

function HighlightCard({ icon, title, description, link }) {
    return (
        <Link to={link} className="group">
            <Card className="h-full text-center group-hover:border-primary-200 transition-colors">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary-700 group-hover:bg-primary-200 transition-colors">
                    {icon}
                </div>
                <CardTitle className="group-hover:text-primary-700 transition-colors">
                    {title}
                </CardTitle>
                <CardDescription>{description}</CardDescription>
            </Card>
        </Link>
    );
}
