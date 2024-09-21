import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/Layouts/AuthLayouts";

function LoginPage() {
    return (
        <AuthLayouts title="Login" description="Selamat Datang dan Silakan Login">
            <FormLogin />
        </AuthLayouts>
    )
}

export default LoginPage;