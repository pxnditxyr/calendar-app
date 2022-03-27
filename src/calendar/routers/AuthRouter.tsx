import {
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import { SignInPage } from '../components/auth/SignInPage';
import { SignUpPage } from '../components/auth/SignUpPage';

export const AuthRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="signin" element={ <SignInPage /> } />
                <Route path="signup" element={ <SignUpPage /> } />
                <Route path="*" element={ <Navigate to="signin" /> } />
            </Routes>
        </div>
    );
};
