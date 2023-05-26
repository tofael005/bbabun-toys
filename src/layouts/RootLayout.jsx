import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../pages/Footer';
import Aos from 'aos';
import { useEffect } from 'react';


const RootLayout = () => {

    useEffect(() => {
        Aos.init(
            {
                duration: 400,
            }
        )
    }, [])
    return (
        <main className="overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-2">
                <Header />
            </div>
            <div className="md:min-h-[calc(100vh-100px)]">
                <Outlet />
            </div>

            <div className="bg-slate-900">
                <Footer />
            </div>
        </main>
        
    );
};

export default RootLayout;