import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import ErrorPage from "../pages/errorPage";
// import { AdminsRoute } from "./AdminsRoute";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} errorElement={<ErrorPage />} />
            <Route path="/register" element={<RegisterPage />} />
            {/* <Route path="admins/*" element={<AdminsRoute />} /> */}
        </Routes>
    )
}
