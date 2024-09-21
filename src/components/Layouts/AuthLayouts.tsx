import { Link } from "react-router-dom"

function AuthLayouts({ title, description, children }: { title: string, description: string, children: React.ReactNode }) {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-full max-w-xs">
                <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
                <p className="font-medium text-slate-500 mb-8">{description}</p>
                {children}

                <p className="text-sm mt-5 text-center">
                    {/* Penerapan Conditional Rendering */}
                    {title === "Login" ? "Belum Mempunyai Akun ? " : "Sudah Mempunyai Akun ? "}

                    {/* Conditional Rendeting Button Login dan Register */}
                    {title === "Login" && <Link to="/register" className="font-bold text-blue-600"> Sign up</Link>}
                    {title === "Register" && <Link to="/" className="font-bold text-blue-600"> Login</Link>}
                </p>
            </div>
        </div>
    )
}

export default AuthLayouts