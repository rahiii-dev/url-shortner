import Logo from "@components/molecules/logo";
import { useAuthContext } from "@context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
    const { isAuthenticated} = useAuthContext();
    
    if(isAuthenticated){
        return <Navigate to={'/'} replace/>
    }

    return (
        <>
            <header className="container mx-auto px-4 pb-3 pt-6 flex items-center justify-between">
                <Logo/>
            </header>
            <main className="container mx-auto px-4 flex justify-center items-center">
                <Outlet />
            </main>
        </>
    );
}

export default AuthLayout;
