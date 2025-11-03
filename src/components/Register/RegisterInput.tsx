"use client";
import React, { useState } from "react";
import { sendOTP, verifyOTP } from "@/../lib/api";
import "./register.css";
export default function RegisterInput() {
  const [step, setStep] = useState(1);
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [no_hp, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSendOTP = async () => {
    if (!no_hp) return alert("Masukkan nomor HP");
    setLoading(true);
    const res = await sendOTP(no_hp);
    setLoading(false);
    if (res.error) return setMessage(res.error);
    setMessage("OTP dikirim ke WhatsApp kamu!");
    setStep(2);
  };

  const handleRegister = async () => {
    if (password !== confirmPassword)
      return setMessage("Password tidak sama!");

    setLoading(true);
    const res = await verifyOTP(no_hp, otp);
    setLoading(false);

    if (res.error) {
      setMessage("❌ " + res.error);
    } else {
      setMessage("✅ Pendaftaran berhasil!");
      console.log("Token:", res.token);
      // TODO: Simpan token di localStorage
      setStep(3);
    }
  };

  return (
    <>
      <h1>Daftar Akun</h1>
      <form className="register-input">
        <input type="text" placeholder="Nama Lengkap"/>
        <input type="password" placeholder="Password"/>
        <input type="password" placeholder="Konfirmasi Password"/>
        <input type="text" placeholder="Nomor Whatsapp"/>
        <button type="button" onClick={handleSendOTP} disabled={loading}>
          {loading ? "Mengirim OTP..." : "Kirim OTP"}
        </button>
        <div className="check-otp">
            <input
            type="text"
            placeholder="Masukkan OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            />
            <button type="button" onClick={handleRegister} disabled={loading}>
            {loading ? "Memverifikasi..." : "Daftar"}
            </button>
            {message && <p>{message}</p>}
        </div>
        <button type="submit">Daftar</button>
      </form>
    </>
  );
}
