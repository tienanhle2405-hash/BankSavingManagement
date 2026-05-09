import { useEffect, useState } from "react";

export default function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setUser({ name: "Admin", role: "admin" });
    }
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token);
    setUser({ name: "Admin", role: "admin" });
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return {
    user,
    login,
    logout,
    isAuth: !!user,
  };
}