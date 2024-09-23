import InputForm from "../Elements/InputForm";
import Button from "../Elements/Button";
import { useEffect, useRef, useState } from "react";
import { postData } from "../../utils/fetch";
import { useNavigate } from "react-router-dom";

function FormLogin() {
  const [loginFailed, setLoginFailed] = useState<string | null>(null);
  // Implementasi useRef agar cursor langsung fokus ke input username
  const usernameRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (usernameRef.current) {
      usernameRef.current.focus();
    }
  }, []);

  // Implemen event handler for login form
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // localStorage.setItem("username", event.target.username.value)
    // localStorage.setItem("password", event.target.password.value)
    // console.log("username: ", event.target.username.value)
    // console.log("Password: ", event.target.password.value)
    // console.log("Login button clicked")
    // window.location.href = "/products"

    // Implementasi fetch untuk login
    // Ambil data login dari form
    const data = {
      username: (event.target as HTMLFormElement).username.value, // Tipe HTMLFormElement agar tidak ada error
      password: (event.target as HTMLFormElement).password.value,
    };

    try {
      // Tunggu hasil postData, pastikan await digunakan untuk request asinkron
      const response = await postData("/auth/login", data);

      // Jika login berhasil, simpan token dan username ke localStorage
      localStorage.setItem("token", response.token); // response.token harus sesuai dengan API respons
      localStorage.setItem("email", response.username); // response.username harus sesuai dengan API respons

      // Redirect user ke halaman produk menggunakan navigate
      // kenapa dia menggunakan navigate : karena dia berada di dalam action / event atau function yang berada di dalam component
      navigate("/products");
    } catch (error: unknown) {
      // Jika login gagal, tampilkan error ke user
      console.error("Login failed:", error);
      setLoginFailed(error instanceof Error ? error.message : String(error)); // Set error untuk ditampilkan di UI
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        type="text"
        placeholder="Enter your username"
        name="username"
        label="Username"
        ref={usernameRef} // Implementasi ref agar cursor langsung fokus ke input username
      />
      <InputForm
        type="password"
        placeholder="Enter your password"
        name="password"
        label="Password"
      />
      <Button className="bg-blue-600 w-full mt-4" type="submit">
        Login
      </Button>
      {loginFailed && (
        <p className="text-red-500 text-sm text-center mt-5">{loginFailed}</p>
      )}
    </form>
  );
}

export default FormLogin;
