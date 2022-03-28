import {
    Routes,
    Route,
} from 'react-router-dom';
import { HomePage } from '../components/home/HomePage';
import { AboutPage } from '../components/about/AboutPage';
import { NotFoundPage } from '../components/not-found/NotFoundPage';
import { MyAdsPage } from '../components/my-ads/MyAdsPage';
import { Navbar } from '../components/ui/Navbar';


export const PublicRouter = () => {
    return (
        <div>
            <Navbar isLogged={ false }/>
            <div className="py-10 px-20">
                <Routes>
                    <Route path="/" element={ <HomePage /> } />
                    <Route path="about" element={ <AboutPage /> } />
                    <Route path="ads" element={ <MyAdsPage /> } />
                    <Route path="*" element={ <NotFoundPage /> } />
                </Routes>
            </div>
        </div>
    );
};
