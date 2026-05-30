"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#020617] text-white p-6">
      <div className="w-full max-w-md rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-10">

        <h1 className="text-5xl font-black mb-2">
          Login
        </h1>

        <p className="text-slate-400 mb-8">
          Access RuntimeOS Dashboard
        </p>

        <div className="space-y-5">

          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 rounded-2xl bg-black/40 border border-white/10 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 rounded-2xl bg-black/40 border border-white/10 outline-none"
          />

         <button
  onClick={() => {
  setTimeout(() => {
    window.location.assign("/dashboard");
  }, 100);
}}
  className="
    w-full
    py-3
    rounded-xl
    bg-gradient-to-r
    from-cyan-500
    to-blue-500
    font-semibold
    hover:scale-[1.02]
    transition-all
  "
>
  Login
</button>

        </div>

        <p className="mt-6 text-slate-400">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="text-cyan-400"
          >
            Signup
          </Link>
        </p>

      </div>
    </main>
  );
}