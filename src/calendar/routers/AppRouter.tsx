import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import { CalendarPage } from '../components/calendar/CalendarPage';
import { AuthRouter } from './AuthRouter';
import { PublicRouter } from './PublicRouter';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={ <PublicRouter /> } />
                <Route path="auth/*" element={ <AuthRouter /> } />
                <Route path="calendar" element={ <CalendarPage /> } />
            </Routes>
        </BrowserRouter>

    );
};
