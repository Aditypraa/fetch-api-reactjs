import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import ErrorPage from "../pages/errorPage";
import ProductsPage from "../pages/products";
import ProfilePage from "../pages/profile";
// import { AdminsRoute } from "./AdminsRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      {/* <Route path="admins/*" element={<AdminsRoute />} /> */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
