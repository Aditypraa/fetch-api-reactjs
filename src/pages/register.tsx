import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layouts/AuthLayouts";

function RegisterPage() {
    return (
        <AuthLayouts title="Register" description="Daftarkan Akun Anda">
            <FormRegister />
        </AuthLayouts>
    )
}

export default RegisterPage;