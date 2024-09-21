import Button from "../Elements/Button";
import InputForm from "../Elements/InputForm";

export default function FormRegister() {
    return (
        <form action="">
            <InputForm type="text" placeholder="Enter your fullname" name="fullname" label="Nama Lengkap" />
            <InputForm type="text" placeholder="Enter your email" name="email" label="Email" />
            <InputForm type="password" placeholder="Enter your password" name="password" label="Password" />
            <InputForm type="password" placeholder="Enter your password" name="password" label="Confirm Password" />
            <Button className="bg-blue-600 w-full mt-4" type="submit">Register</Button>
        </form>
    )
}
