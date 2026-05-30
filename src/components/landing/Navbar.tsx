export default function Navbar() {

  return (

    <nav
      className="
        fixed
        top-0
        left-0
        right-0
        z-50

        backdrop-blur-2xl
        bg-slate-950/40

        border-b
        border-white/10
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto

          flex
          items-center
          justify-between

          px-6
          py-5
        "
      >

        {/* LOGO */}

        <div className="flex items-center gap-4">

          <div
            className="
              w-12
              h-12
              rounded-2xl

              bg-gradient-to-r
              from-cyan-500
              to-blue-500

              flex
              items-center
              justify-center

              font-black
              text-xl

              shadow-[0_0_40px_rgba(6,182,212,0.25)]
            "
          >

            AI

          </div>

          <div>

            <h1 className="font-black text-2xl tracking-tight">

              RuntimeOS

            </h1>

            <p className="text-xs text-slate-400">

              AI Runtime Infrastructure

            </p>

          </div>

        </div>

        {/* NAVIGATION */}

        <div
          className="
            hidden
            md:flex
            items-center
            gap-10

            text-slate-300
          "
        >

          <a
            href="#features"
            className="
              hover:text-white
              transition-all
              duration-300
            "
          >

            Features

          </a>

          <a
            href="#pipeline"
            className="
              hover:text-white
              transition-all
              duration-300
            "
          >

            Pipeline

          </a>

          <a
            href="#preview"
            className="
              hover:text-white
              transition-all
              duration-300
            "
          >

            Preview

          </a>

          <a
            href="#footer"
            className="
              hover:text-white
              transition-all
              duration-300
            "
          >

            Contact

          </a>

        </div>

        {/* RIGHT SECTION */}

        <div className="flex items-center gap-4">

          {/* STATUS */}

          <div
            className="
              hidden
              lg:flex

              items-center
              gap-2

              px-4
              py-2

              rounded-full

              bg-green-500/10
              border
              border-green-400/20
            "
          >

            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

            <span className="text-green-300 text-sm">

              Live Runtime

            </span>

          </div>

          {/* LOGIN */}

          <a
  href="/login"
            className="
              px-5
              py-2
              rounded-xl

              border
              border-white/10

              bg-white/5

              hover:bg-white/10
              hover:border-cyan-400/20

              transition-all
              duration-300
            "
          >

            Login

          </a>

          {/* BUTTON */}

         <a
  href="/signup"
            className="
              px-6
              py-3
              rounded-xl

              bg-gradient-to-r
              from-cyan-500
              to-blue-500

              font-semibold

              hover:scale-105
              hover:shadow-[0_0_40px_rgba(6,182,212,0.25)]

              transition-all
              duration-300
            "
          >

            Launch Runtime

          </a>

        </div>

      </div>

    </nav>
  );
}