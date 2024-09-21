import { Link } from "react-router-dom";
import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/Layouts/AuthLayouts";

function LoginPage() {
    return (
        <AuthLayouts title="Login" description="Selamat Datang dan Silakan Login">
            <FormLogin />
            <p className="text-sm mt-5 text-center">
                Belum Mempunyai Akun ?
                <Link to="/register" className="font-bold text-blue-600"> Sign up</Link>
            </p>
        </AuthLayouts>
    )
}

export default LoginPage;