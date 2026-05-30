"use client";

type Props = {
  onLogin: () => void;
};

export default function LoginPage({
  onLogin,
}: Props) {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-3">
            AI App Compiler
          </h1>

          <p className="text-slate-400">
            Runtime SaaS Application Builder
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-sm text-slate-300 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="admin@example.com"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-300 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="••••••••"
            />
          </div>

          <button
            onClick={onLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold text-white"
          >
            Login
          </button>

          <button
  onClick={() => {

    alert(
      "Demo signup successful!"
    );

  }}
  className="
    w-full
    bg-slate-800
    hover:bg-slate-700
    py-3
    rounded-xl
    font-semibold
    text-white
    mt-3
  "
>

  Create Account

</button>


        </div>

        <div className="mt-8 grid grid-cols-3 gap-3 text-center">
          <div className="bg-slate-800 rounded-xl p-3">
            <div className="text-xl font-bold text-white">
              4
            </div>

            <div className="text-xs text-slate-400">
              Pipeline Stages
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-3">
            <div className="text-xl font-bold text-white">
              AI
            </div>

            <div className="text-xs text-slate-400">
              Runtime Engine
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-3">
            <div className="text-xl font-bold text-white">
              JSON
            </div>

            <div className="text-xs text-slate-400">
              Deterministic
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}