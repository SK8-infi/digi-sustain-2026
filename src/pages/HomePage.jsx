import HeroSection from '../components/home/HeroSection';
import IntroSection from '../components/home/IntroSection';

export default function HomePage() {
    return (
        <>
            <HeroSection isHomePage={true} />
            <IntroSection />
        </>
    );
}
