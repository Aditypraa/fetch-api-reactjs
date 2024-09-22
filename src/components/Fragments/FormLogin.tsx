import InputForm from '../Elements/InputForm'
import Button from '../Elements/Button'
import { useEffect, useRef } from 'react'

function FormLogin() {

    // Implementasi useRef agar cursor langsung fokus ke input email
    const emailRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (emailRef.current) {
            emailRef.current.focus()
        }
    }, [])

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
            <InputForm type="text" placeholder="Enter your email" name="email" label="Email"
                ref={emailRef} // Implementasi ref agar cursor langsung fokus ke input email 
            />
            <InputForm type="password" placeholder="Enter your password" name="password" label="Password" />
            <Button className="bg-blue-600 w-full mt-4" type="submit">Login</Button>
        </form>
    )
}

export default FormLogin