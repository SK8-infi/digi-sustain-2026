import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScaleWrapper from './ScaleWrapper';

export default function Layout() {
    return (
        <ScaleWrapper>
            <div className="min-h-screen flex flex-col bg-white pt-[130px]">
                <Navbar />
                <main className="flex-grow">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </ScaleWrapper>
    );
}
