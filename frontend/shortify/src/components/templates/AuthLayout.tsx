import Logo from "@components/molecules/logo";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <>
            <header className="container px-4 pb-3 pt-6 flex items-center justify-between">
                <Logo/>
            </header>
            <main className="container px-4 flex justify-center items-center">
                <Outlet />
            </main>
        </>
    );
}

export default AuthLayout;
