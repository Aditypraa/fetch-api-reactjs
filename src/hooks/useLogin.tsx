import { useEffect, useState } from "react";
import { getUsername } from "../utils/fetch";

export default function useLogin() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUsername(getUsername(token));
    } else {
      window.location.href = "/";
    }
  }, []);

  return { username };
}
