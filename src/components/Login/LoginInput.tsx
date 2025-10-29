"use client";
import "./login.css";
import { useState } from "react";
import { useRouter } from "next/navigation"; // ⚠️ gunakan "next/navigation" bukan "next/router"
import { loginUser } from "../../../lib/api";

export default function LoginInput() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const data = await loginUser({ email, password });

      // Kalau API kamu mengembalikan token atau user info:
      localStorage.setItem("token", data.token);

      // Redirect ke dashboard
      router.push("/");
    } catch (err) {
      setError("Login gagal, periksa kembali email dan password kamu.");
    }
  }

  return (
    <>
      <h1>Login</h1>
      <form className="login-input" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Masukkan Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Masukkan Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Masuk</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </>
  );
}
