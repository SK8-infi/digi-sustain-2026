import HeroSection from '../components/home/HeroSection';
import IntroSection from '../components/home/IntroSection';
import AboutInstitute from '../components/home/AboutInstitute';

export default function HomePage() {
    return (
        <>
            <HeroSection isHomePage={true} />
            <IntroSection />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <hr className="border-t-2 border-neutral-200" />
            </div>
            <AboutInstitute />

            {/* Media Partner */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-xl md:text-2xl font-bold text-neutral-900 mb-2">Media Partner</h2>
                    <div className="w-16 h-1 bg-primary-600 rounded-full mx-auto mb-10" />

                    <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
                        {/* Partner 1 */}
                        <div className="flex flex-col items-center max-w-xs">
                            <div className="h-16 md:h-20 flex items-center justify-center mb-4">
                                <img
                                    src="https://lh3.googleusercontent.com/d/1EZkUtrVHx3MS8_KzFOnxZla0BKW3yTcx"
                                    alt="All Conference Alert"
                                    className="max-h-full w-auto object-contain"
                                />
                            </div>
                            <h3 className="text-base md:text-lg font-bold text-neutral-900 mb-2">Conference Alerts</h3>
                            <a
                                href="https://allconferencealert.net/india.php"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-primary-600 hover:text-primary-700 hover:underline transition-all duration-300 break-all"
                            >
                                https://allconferencealert.net/india.php
                            </a>
                        </div>

                        {/* Partner 2 */}
                        <div className="flex flex-col items-center max-w-xs">
                            <div className="h-16 md:h-20 flex items-center justify-center mb-4">
                                <img
                                    src="https://lh3.googleusercontent.com/d/1x-B4KOIIS8EnWVzuS7EFFISIeaKlaxlB"
                                    alt="Conference Alerts India"
                                    className="max-h-full w-auto object-contain"
                                />
                            </div>
                            <h3 className="text-base md:text-lg font-bold text-neutral-900 mb-2">Conference Alerts</h3>
                            <a
                                href="https://conferencealerts.co.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-primary-600 hover:text-primary-700 hover:underline transition-all duration-300 break-all"
                            >
                                https://conferencealerts.co.in/
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
