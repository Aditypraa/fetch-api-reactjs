import InputForm from '../Elements/InputForm'
import Button from '../Elements/Button'

function FormLogin() {
    return (
        <form action="">
            <InputForm type="text" placeholder="Enter your email" name="email" label="Email" />
            <InputForm type="password" placeholder="Enter your password" name="password" label="Password" />
            <Button className="bg-blue-600 w-full mt-4" type="submit">Login</Button>
        </form>
    )
}

export default FormLogin