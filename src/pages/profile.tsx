import useLogin from "../hooks/useLogin";

export default function ProfilePage() {
  const { username } = useLogin(); // Menggunakan custom hook useLogin
  return (
    <div>
      <h1>Profile Page</h1>
      <p>nama {username}</p>
    </div>
  );
}
