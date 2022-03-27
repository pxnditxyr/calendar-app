import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import { CalendarPage } from '../components/calendar/CalendarPage';
import { HomePage } from '../components/home/HomePage';
import { AuthRouter } from './AuthRouter';
import { NotFoundPage } from '../components/not-found/NotFoundPage';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <HomePage /> } />
                <Route path="auth/*" element={ <AuthRouter /> } />
                <Route path="/calendar" element={ <CalendarPage /> } />
                <Route path="*" element={ <NotFoundPage /> } />
            </Routes>
        </BrowserRouter>

    );
};
