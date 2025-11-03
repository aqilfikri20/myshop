"use client";
import "./login.css";
import { useState } from "react";
import { useRouter } from "next/navigation"; // ⚠️ gunakan "next/navigation" bukan "next/router"
import { loginUser } from "../../../lib/api";

export default function LoginInput() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const data = await loginUser({ phone, password });

      // Kalau API kamu mengembalikan token atau user info:
      localStorage.setItem("token", data.token);
      localStorage.setItem("userFullName", data.user.full_name);


      // Redirect ke dashboard
      router.push("/");
    } catch (err) {
      setError("Login gagal, periksa kembali nomor HP dan password kamu.");
    }
  }

  return (
    <>
      <h1>Login</h1>
      <form className="login-input" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="No Hp"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
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
