import {
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import { SignInPage } from '../components/auth/SignInPage';
import { SignUpPage } from '../components/auth/SignUpPage';
import { Navbar } from '../components/ui/Navbar';

export const AuthRouter = () => {
    return (
        <div className="bg-orange-400 h-screen grid place-items-center">
            <Routes>
                <Route path="signin" element={ <SignInPage /> } />
                <Route path="signup" element={ <SignUpPage /> } />
                <Route path="*" element={ <Navigate to="signin" /> } />
            </Routes>
        </div>
    );
};
