"use client";

import Link from "next/link";

export default function SignupPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#020617] text-white p-6">
      <div className="w-full max-w-md rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-10">

        <h1 className="text-5xl font-black mb-2">
          Signup
        </h1>

        <p className="text-slate-400 mb-8">
          Create RuntimeOS Account
        </p>

        <div className="space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 rounded-2xl bg-black/40 border border-white/10 outline-none"
          />

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
  Create Account
</button>

        </div>

        <p className="mt-6 text-slate-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-cyan-400"
          >
            Login
          </Link>
        </p>

      </div>
    </main>
  );
}