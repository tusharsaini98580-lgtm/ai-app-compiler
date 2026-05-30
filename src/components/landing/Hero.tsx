"use client";

import {
  motion,
} from "framer-motion";

export default function Hero() {

  return (

    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-10 overflow-hidden">

      {/* BACKGROUND LIGHTS */}

      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-cyan-500/10 blur-[160px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-purple-500/10 blur-[160px] rounded-full" />

      {/* GRID */}

      <div className="absolute inset-0 opacity-[0.04]">

        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:80px_80px]" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">

        {/* STATUS */}

        <motion.div

          initial={{
            opacity: 0,
            y: 20,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
          }}

          className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-cyan-400/20 bg-cyan-500/10 backdrop-blur-xl mb-10"
        >

          <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

          <span className="text-cyan-200 text-sm tracking-wide">

            AI Runtime Infrastructure Online

          </span>

        </motion.div>

        {/* TITLE */}

        <motion.h1

          initial={{
            opacity: 0,
            y: 40,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 1,
          }}

          className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-10"
        >

          Build
          {" "}

          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">

            Enterprise SaaS

          </span>

          <br />

          using AI Runtime Pipelines

        </motion.h1>

        {/* DESCRIPTION */}

        <motion.p

          initial={{
            opacity: 0,
          }}

          animate={{
            opacity: 1,
          }}

          transition={{
            delay: 0.4,
            duration: 1,
          }}

          className="max-w-4xl mx-auto text-lg md:text-2xl text-slate-400 leading-relaxed mb-14"
        >

          Generate production-grade SaaS applications,
          analytics dashboards, workflows, schemas,
          runtime systems, and enterprise infrastructure
          dynamically using natural language prompts.

        </motion.p>

        {/* BUTTONS */}

        <motion.div

          initial={{
            opacity: 0,
            y: 30,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 0.8,
            duration: 0.8,
          }}

          className="flex flex-wrap justify-center gap-5 mb-20"
        >

          <a
            href="/dashboard"
            className="
              px-10 py-5 rounded-2xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-500

              font-bold
              text-lg

              hover:scale-105
              hover:shadow-[0_0_60px_rgba(6,182,212,0.35)]

              transition-all
              duration-300
            "
          >

            Launch Runtime

          </a>

          <button
            className="
              px-10 py-5 rounded-2xl
              border border-white/10
              bg-white/5
              backdrop-blur-xl

              hover:bg-white/10
              hover:border-cyan-400/20

              transition-all
              duration-300

              text-lg
            "
          >

            View Architecture

          </button>

        </motion.div>

{/* COMMAND INPUT */}

<motion.div

  initial={{
    opacity: 0,
    y: 20,
  }}

  animate={{
    opacity: 1,
    y: 0,
  }}

  transition={{
    delay: 1,
    duration: 0.8,
  }}

  className="max-w-4xl mx-auto mb-24"
>

  <div
    className="
      flex
      items-center
      gap-4

      rounded-[28px]

      border
      border-white/10

      bg-black/40
      backdrop-blur-2xl

      px-6
      py-5

      shadow-[0_0_80px_rgba(6,182,212,0.08)]
    "
  >

    <div className="text-cyan-400 text-xl">

      ✦

    </div>

    <input
      type="text"
      placeholder="Describe the SaaS platform you want to build..."
      className="
        flex-1
        bg-transparent
        outline-none

        text-lg
        text-white

        placeholder:text-slate-500

        font-mono
      "
    />

    <button
      className="
        px-5
        py-3

        rounded-xl

        bg-gradient-to-r
        from-cyan-500
        to-blue-500

        font-semibold

        hover:scale-105

        transition-all
      "
    >

      Generate

    </button>

  </div>

</motion.div>


{/* TRUST METRICS */}

<motion.div

  initial={{
    opacity: 0,
  }}

  animate={{
    opacity: 1,
  }}

  transition={{
    delay: 1,
    duration: 1,
  }}

  className="
    flex
    flex-wrap
    justify-center
    items-center
    gap-16
    text-slate-400
    mb-24
  "
>

  <div className="text-center min-w-[160px]">

    <div className="text-4xl font-black text-white mb-2">

      12.4K

    </div>

    <div>

      Runtime Executions

    </div>

  </div>

  <div className="text-center min-w-[160px]">

    <div className="text-4xl font-black text-white mb-2">

      842

    </div>

    <div>

      Deployments

    </div>

  </div>

  <div className="text-center min-w-[160px]">

    <div className="text-4xl font-black text-white mb-2">

      98%

    </div>

    <div>

      Schema Accuracy

    </div>

  </div>

</motion.div>

        {/* FLOATING DASHBOARD */}

        <motion.div

          initial={{
            opacity: 0,
            y: 80,
          }}

          animate={{
            opacity: 1,
            y: [0, -12, 0],
          }}

          transition={{
            opacity: {
              duration: 1,
            },

            y: {
              duration: 6,
              repeat: Infinity,
            },
          }}

          className="relative max-w-6xl mx-auto mt-16"
        >

          {/* GLOW */}

          <div className="absolute inset-0 bg-cyan-500/20 blur-[120px]" />

          {/* CONTAINER */}

          <div className="relative rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-5 shadow-[0_0_120px_rgba(6,182,212,0.15)]">

            {/* WINDOW */}

            <div className="
overflow-hidden
rounded-[30px]
border border-white/10
bg-slate-950/90
backdrop-blur-2xl
">

              {/* TOPBAR */}

              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900">

                <div className="flex items-center gap-3">

                  <div className="w-3 h-3 rounded-full bg-red-400" />

                  <div className="w-3 h-3 rounded-full bg-yellow-400" />

                  <div className="w-3 h-3 rounded-full bg-green-400" />

                </div>

                <div className="text-slate-500 text-sm">

                  runtimeos.ai/dashboard

                </div>

                <div className="flex items-center gap-2 text-green-300 text-sm">

                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

                  Live Runtime

                </div>

              </div>

              {/* DASHBOARD */}

              <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 p-10">

                {[
                  "Analytics",
                  "Deployments",
                  "Schemas",
                  "AI Runtime",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="
  h-40
  rounded-3xl
                      bg-gradient-to-br
                      from-cyan-500/10
                      to-blue-500/10

                      border border-white/10

                      flex items-center justify-center

                      text-xl font-bold

                      hover:-translate-y-2
                      hover:border-cyan-400/20

                      transition-all duration-500
                    "
                  >

                    {item}

                  </div>
                ))}

              </div>

            </div>

          </div>

        </motion.div>

        {/* SCROLL INDICATOR */}

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">

          <div className="w-7 h-12 rounded-full border border-white/20 flex justify-center p-2">

            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" />

          </div>

        </div>

      </div>

    </section>
  );
}