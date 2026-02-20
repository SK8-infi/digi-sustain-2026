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
            <section className="py-8 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-lg md:text-xl font-bold text-neutral-900 mb-2">Media Partner</h2>
                    <div className="w-12 h-1 bg-primary-600 rounded-full mx-auto mb-5" />
                    <a href="https://allconferencealert.net/india.php" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-80 transition-opacity">
                        <img
                            src="https://lh3.googleusercontent.com/d/1EZkUtrVHx3MS8_KzFOnxZla0BKW3yTcx"
                            alt="All Conference Alert - Media Partner"
                            className="max-h-14 md:max-h-20 w-auto mx-auto object-contain"
                        />
                    </a>
                </div>
            </section>
        </>
    );
}
