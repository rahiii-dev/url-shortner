import AuthLayout from '@components/templates/AuthLayout';
import LoginPage from '@pages/LoginPage';
import RegisterPage from '@pages/RegisterPage';
import { Navigate, Route, Routes } from 'react-router-dom';

const AuthRoutes = () => {
    return (
        <Routes>
            <Route element={<AuthLayout />}>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/*" element={<Navigate to={"/"} />}/>
            </Route>
        </Routes>
    );
}

export default AuthRoutes;
