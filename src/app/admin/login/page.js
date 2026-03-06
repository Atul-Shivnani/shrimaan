"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await signIn("credentials", { email, password, redirect: false });

    setLoading(false);
    if (result?.error) {
      setError("Invalid credentials.");
      return;
    }

    router.push("/admin");
    router.refresh();
  };

  return (
    <main className="min-h-screen bg-slate-100 grid place-items-center p-4">
      <form onSubmit={onSubmit} className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-4">
        <h1 className="text-2xl font-bold text-slate-900">Admin Login</h1>
        <input className="w-full border rounded-lg p-3" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input className="w-full border rounded-lg p-3" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        {error ? <p className="text-red-600 text-sm">{error}</p> : null}
        <button disabled={loading} className="w-full rounded-lg bg-sky-600 text-white p-3 font-semibold">{loading ? "Signing in..." : "Sign in"}</button>
      </form>
    </main>
  );
}
