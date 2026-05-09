import { useState } from "react";

function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleLogin = () => {
    localStorage.setItem("token", "demo-token");
    alert("Login success");
  };

  return (
    <div style={{ width: 300, margin: "100px auto" }}>
      <h2>Login</h2>

      <input
        placeholder="Username"
        onChange={(e) => setForm({ ...form, username: e.target.value })}
        style={{ width: "100%", marginBottom: 10 }}
      />

      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        style={{ width: "100%", marginBottom: 10 }}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;