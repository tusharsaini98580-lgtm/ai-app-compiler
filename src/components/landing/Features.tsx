"use client";

import {
  motion,
} from "framer-motion";

const features = [

  {
    title:
      "Intent Extraction",

    desc:
      "AI analyzes prompts and transforms business intent into structured runtime architecture.",

    icon:
      "🧠",
  },

  {
    title:
      "Schema Generation",

    desc:
      "Automatically generate UI, API, database, and authentication schemas.",

    icon:
      "⚡",
  },

  {
    title:
      "Repair Engine",

    desc:
      "Self-healing runtime repair pipelines validate and correct generated schemas.",

    icon:
      "🛠️",
  },

  {
    title:
      "Runtime Rendering",

    desc:
      "Dynamically render dashboards, analytics, forms, tables, and charts.",

    icon:
      "🚀",
  },

  {
    title:
      "AI Modifications",

    desc:
      "Modify generated enterprise apps in real-time using natural language.",

    icon:
      "✨",
  },

  {
    title:
      "Enterprise Deployment",

    desc:
      "Production-ready runtime infrastructure with scalable SaaS architecture.",

    icon:
      "🌍",
  },
];

export default function Features() {

  return (

    <section
      id="features"
      className="relative px-6 md:px-10 pb-40 overflow-hidden"
    >

      {/* BACKGROUND GLOW */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}

        <motion.div

          initial={{
            opacity: 0,
            y: 50,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
          }}

          viewport={{
            once: true,
          }}

          className="text-center mb-24"
        >

          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 mb-8">

            <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />

            <span className="text-cyan-300 text-sm tracking-wide">

              Enterprise Runtime Modules

            </span>

          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">

            AI Runtime
            <br />

            Infrastructure

          </h2>

          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">

            Production-grade orchestration pipelines for dynamically generating scalable SaaS applications, runtime dashboards, workflows, analytics, and enterprise systems.

          </p>

        </motion.div>

        {/* GRID */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {features.map((feature, index) => (

            <motion.div

              key={index}

              initial={{
                opacity: 0,
                y: 50,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}

              viewport={{
                once: true,
              }}

              whileHover={{
                y: -12,
              }}

              className="
                group
                relative
                overflow-hidden
                rounded-[36px]
                border
                border-white/10
                bg-white/5
                backdrop-blur-2xl
                p-10

                hover:border-cyan-400/30
                hover:bg-white/10
                hover:shadow-[0_0_80px_rgba(6,182,212,0.12)]

                transition-all
                duration-500
              "
            >

              {/* HOVER GLOW */}

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />

              {/* TOP LIGHT */}

              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />

              <div className="relative z-10">

                {/* ICON */}

                <div className="mb-8">

                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center text-4xl shadow-[0_0_40px_rgba(6,182,212,0.15)]">

                    {feature.icon}

                  </div>

                </div>

                {/* TITLE */}

                <h3 className="text-3xl font-black mb-5">

                  {feature.title}

                </h3>

                {/* DESCRIPTION */}

                <p className="text-slate-400 leading-relaxed text-lg">

                  {feature.desc}

                </p>

                {/* FOOTER */}

                <div className="mt-10 flex items-center justify-between">

                  <div className="flex items-center gap-2 text-cyan-300 text-sm">

                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

                    Runtime Ready

                  </div>

                  <div className="text-slate-500 group-hover:text-cyan-300 transition-all duration-300">

                    →
                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}