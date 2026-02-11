import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import SectionContainer from '../ui/SectionContainer';
import Card, { CardTitle, CardDescription } from '../ui/Card';

export default function AboutInstitute() {
    return (
        <div className="space-y-1">
            {/* About ABV-IIITM Gwalior */}
            <SectionContainer background="white" className="!pt-16 !pb-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                    {/* Text Content */}
                    <div className="order-2 lg:order-2 space-y-6">
                        <div className="space-y-2">
                            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
                                About ABV-IIITM Gwalior
                            </h2>
                            <div className="w-16 sm:w-20 h-1.5 bg-primary-600 rounded-full" />
                        </div>
                        <p className="text-neutral-600 leading-relaxed text-base sm:text-lg text-justify">
                            Atal Bihari Vajpayee- Indian Institute of Information Technology & Management
                            (ABV-IIITM), Gwalior, was established in 1997 by the Ministry of Human Resource
                            Development, Government of India. It is a premier institute known for excellence
                            in Information Technology and Management education. Located in Gwalior,
                            Madhya Pradesh, the institute promotes a vibrant academic culture rooted in
                            research and innovation. ABV-IIITM maintains strong industry linkages,
                            encouraging real-world learning and collaboration. It has been accredited with a
                            NAAC 'A' grade and holds the status of an Institute of National Importance. The
                            institute strives to create future-ready professionals through cutting-edge
                            curriculum and interdisciplinary learning. Its mission is to integrate technology,
                            management, and research for societal and industrial impact.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="order-1 lg:order-1">
                        <div className="relative max-w-full">
                            {/* Decorative background elements - Replicating Poster Style */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-primary-100 to-primary-50 rounded-[2rem] opacity-60" />
                            <div className="absolute -inset-2 bg-white/40 rounded-[2rem] backdrop-blur-sm" />

                            <div className="relative rounded-2xl overflow-hidden shadow-2xl group border border-white/50 bg-white">
                                <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-transparent transition-colors duration-500" />
                                <img
                                    src="https://lh3.googleusercontent.com/d/1bDYy_ReDauwg-bWK_cXmcHeNcSC7EWVh"
                                    alt="ABV-IIITM Gwalior"
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </SectionContainer>

            {/* About DoMS */}
            <SectionContainer background="light" className="border-t border-neutral-200 !py-16">
                <div className="space-y-16 max-w-7xl mx-auto">
                    {/* Top part: DoMS Content */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <div className="order-1 lg:order-2">
                            <div className="relative max-w-full">
                                {/* Decorative background elements - Replicating Poster Style */}
                                <div className="absolute -inset-4 bg-gradient-to-tr from-primary-100 to-primary-50 rounded-[2rem] opacity-60" />
                                <div className="absolute -inset-2 bg-white/40 rounded-[2rem] backdrop-blur-sm" />

                                <div className="relative rounded-2xl overflow-hidden shadow-2xl group border border-white/50 bg-white">
                                    <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-transparent transition-colors duration-500" />
                                    <img
                                        src="https://lh3.googleusercontent.com/d/1DvEi1hmZI1eS1F6SfG1S3o_Teb4weYhn"
                                        alt="Department of Management Studies"
                                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="order-2 lg:order-1 space-y-6">
                            <div className="space-y-2">
                                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
                                    About Department of Management Studies (DoMS)
                                </h2>
                                <div className="w-16 sm:w-20 h-1.5 bg-primary-600 rounded-full" />
                            </div>
                            <p className="text-neutral-600 leading-relaxed text-base sm:text-lg text-justify">
                                The Department of Management Studies (DoMS) is an academic department of
                                ABV-IIITM Gwalior. DoMS offers academic Programmes such as Ph.D., MBA and
                                Integrated Programmes in Management with dual degrees of B.Tech and M.B.A.
                                The DoMS aims to develop holistic and responsible leaders by creating insightful
                                knowledge and transforming human endeavors through technology-enabled
                                management solutions.
                            </p>
                        </div>
                    </div>

                    {/* Bottom part: Highlights Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z" />
                                </svg>
                            }
                            title="Best Paper Award"
                            description="Recognition for outstanding research"
                            link={ROUTES.DOCTORAL_COLLOQUIUM}
                        />
                    </div>
                </div>
            </SectionContainer>
        </div>
    );
}

function HighlightCard({ icon, title, description, link }) {
    return (
        <Link to={link} className="group h-full">
            <Card className="h-full text-center group-hover:border-primary-200 transition-colors flex flex-col items-center">
                <div style={{ backgroundColor: '#f0f5f2' }} className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary-700 group-hover:bg-primary-200 transition-colors">
                    {icon}
                </div>
                <CardTitle className="group-hover:text-primary-700 transition-colors">
                    {title}
                </CardTitle>
                <CardDescription className="flex-1">{description}</CardDescription>
            </Card>
        </Link>
    );
}
