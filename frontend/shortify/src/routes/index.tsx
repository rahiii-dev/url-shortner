import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import HomePage from "@pages/index";
import AuthRoutes from "./AuthRoutes";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/*" element={<AuthRoutes/>}/>
                <Route path="/*" element={<Navigate to={"/"} />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
