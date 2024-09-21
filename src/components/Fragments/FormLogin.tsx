import InputForm from '../Elements/InputForm'
import Button from '../Elements/Button'

function FormLogin() {

    // Implemen event handler for login form
    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        localStorage.setItem("email", event.target.email.value)
        localStorage.setItem("password", event.target.password.value)
        console.log("Email: ", event.target.email.value)
        console.log("Password: ", event.target.password.value)
        console.log("Login button clicked")
        window.location.href = "/products"
    }

    return (
        <form onSubmit={handleLogin}>
            <InputForm type="text" placeholder="Enter your email" name="email" label="Email" />
            <InputForm type="password" placeholder="Enter your password" name="password" label="Password" />
            <Button className="bg-blue-600 w-full mt-4" type="submit">Login</Button>
        </form>
    )
}

export default FormLogin