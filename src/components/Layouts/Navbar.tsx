import useLogin from "../../hooks/useLogin"
import Button from "../Elements/Button"

function Navbar() {
    const { username }: { username: string } = useLogin()

    // Implement event handler for logout button
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
    };
    return (
        <div className="flex justify-end items-center h-20 bg-violet-500 text-white px-10">
            {username && <span>{username}</span>}
            <Button type="button" className="ml-5 bg-black" onClick={handleLogout}>
                Logout
            </Button>
        </div>
    )
}

export default Navbar