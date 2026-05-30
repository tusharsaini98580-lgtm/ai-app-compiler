export default function Footer() {

  return (

    <footer
      id="footer"
      className="
        relative
        border-t
        border-white/10

        mt-40
        overflow-hidden
      "
    >

      {/* BACKGROUND GLOW */}

      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[140px]" />

      <div
        className="
          relative
          z-10

          max-w-7xl
          mx-auto

          px-6
          py-24
        "
      >

        {/* TOP */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4

            gap-16
          "
        >

          {/* BRAND */}

          <div>

            <div className="flex items-center gap-4 mb-8">

              <div
                className="
                  w-14
                  h-14
                  rounded-2xl

                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-500

                  flex
                  items-center
                  justify-center

                  text-2xl
                  font-black

                  shadow-[0_0_50px_rgba(6,182,212,0.25)]
                "
              >

                AI

              </div>

              <div>

                <h2 className="text-3xl font-black">

                  RuntimeOS

                </h2>

                <p className="text-slate-400 text-sm">

                  AI Runtime Infrastructure

                </p>

              </div>

            </div>

            <p className="text-slate-400 leading-relaxed text-lg">

              Enterprise-grade AI orchestration platform
              for generating scalable SaaS applications,
              runtime dashboards, analytics systems,
              and deployment pipelines.

            </p>

          </div>

          {/* PRODUCT */}

          <div>

            <h3 className="text-xl font-bold mb-8">

              Product

            </h3>

            <div className="space-y-5 text-slate-400">

              <div className="hover:text-cyan-300 transition-all cursor-pointer">

                Runtime Engine

              </div>

              <div className="hover:text-cyan-300 transition-all cursor-pointer">

                Schema Generation

              </div>

              <div className="hover:text-cyan-300 transition-all cursor-pointer">

                AI Deployments

              </div>

              <div className="hover:text-cyan-300 transition-all cursor-pointer">

                Analytics

              </div>

            </div>

          </div>

          {/* COMPANY */}

          <div>

            <h3 className="text-xl font-bold mb-8">

              Company

            </h3>

            <div className="space-y-5 text-slate-400">

              <div className="hover:text-cyan-300 transition-all cursor-pointer">

                About

              </div>

              <div className="hover:text-cyan-300 transition-all cursor-pointer">

                Careers

              </div>

              <div className="hover:text-cyan-300 transition-all cursor-pointer">

                Blog

              </div>

              <div className="hover:text-cyan-300 transition-all cursor-pointer">

                Contact

              </div>

            </div>

          </div>

          {/* RESOURCES */}

          <div>

            <h3 className="text-xl font-bold mb-8">

              Resources

            </h3>

            <div className="space-y-5 text-slate-400">

              <div className="hover:text-cyan-300 transition-all cursor-pointer">

                Documentation

              </div>

              <div className="hover:text-cyan-300 transition-all cursor-pointer">

                API

              </div>

              <div className="hover:text-cyan-300 transition-all cursor-pointer">

                Guides

              </div>

              <div className="hover:text-cyan-300 transition-all cursor-pointer">

                Support

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM */}

        <div
          className="
            mt-20
            pt-10

            border-t
            border-white/10

            flex
            flex-col
            md:flex-row

            items-center
            justify-between

            gap-6
          "
        >

          <div className="text-slate-500 text-sm">

            © 2026 RuntimeOS. All rights reserved.

          </div>

          <div className="flex items-center gap-8 text-slate-500 text-sm">

            <div className="hover:text-cyan-300 transition-all cursor-pointer">

              Privacy

            </div>

            <div className="hover:text-cyan-300 transition-all cursor-pointer">

              Terms

            </div>

            <div className="hover:text-cyan-300 transition-all cursor-pointer">

              Security

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}