"use client";
import React, { useState } from "react";
import { sendOTP, verifyOTP } from "@/../lib/api";

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
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-md p-8 rounded-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Register dengan WhatsApp OTP
        </h2>

        {message && (
          <div className="text-sm text-center mb-3 text-blue-600">
            {message}
          </div>
        )}

        {step === 1 && (
          <>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700">
                Nama Lengkap
              </label>
              <input
                type="text"
                className="w-full border rounded-lg p-2"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                className="w-full border rounded-lg p-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700">
                Konfirmasi Password
              </label>
              <input
                type="password"
                className="w-full border rounded-lg p-2"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700">
                Nomor HP (WhatsApp)
              </label>
              <input
                type="text"
                placeholder="6281234567890"
                className="w-full border rounded-lg p-2"
                value={no_hp}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <button
              onClick={handleSendOTP}
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg"
            >
              {loading ? "Mengirim OTP..." : "Kirim OTP ke WhatsApp"}
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700">
                Masukkan Kode OTP
              </label>
              <input
                type="text"
                maxLength={6}
                className="w-full border rounded-lg p-2 text-center tracking-widest text-lg"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>

            <button
              onClick={handleRegister}
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
            >
              {loading ? "Memverifikasi..." : "Daftar Sekarang"}
            </button>
          </>
        )}

        {step === 3 && (
          <div className="text-center">
            <h3 className="text-green-600 font-semibold mb-2">
              🎉 Pendaftaran Berhasil!
            </h3>
            <p className="text-sm text-gray-600">
              Kamu sekarang bisa mengakses dashboard atau login otomatis.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
