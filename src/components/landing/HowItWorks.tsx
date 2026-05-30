"use client";

import {
  motion,
} from "framer-motion";

const steps = [

  {
    number:
      "01",

    title:
      "Intent Extraction",

    desc:
      "AI analyzes user prompts and extracts enterprise business requirements dynamically.",
  },

  {
    number:
      "02",

    title:
      "Architecture Planning",

    desc:
      "Runtime orchestration pipelines generate scalable SaaS application structures.",
  },

  {
    number:
      "03",

    title:
      "Schema Generation",

    desc:
      "AI produces database schemas, APIs, UI layouts, workflows, and auth systems.",
  },

  {
    number:
      "04",

    title:
      "Runtime Deployment",

    desc:
      "Production-grade dashboards and analytics systems render instantly in real time.",
  },
];

export default function HowItWorks() {

  return (

   <section
  id="pipeline" className="px-10 pb-40">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="text-center mb-24">

          <h2 className="text-6xl font-black mb-6">

            AI Runtime Pipeline

          </h2>

          <p className="text-slate-400 text-xl max-w-3xl mx-auto">

            Advanced orchestration pipelines convert prompts into
            scalable enterprise applications automatically.

          </p>

        </div>

        {/* TIMELINE */}

        <div className="relative">

          {/* LINE */}

          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 hidden md:block" />

          <div className="space-y-24">

            {steps.map((step, index) => (

              <motion.div

                key={index}

                initial={{
                  opacity: 0,
                  y: 80,
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

                className={`relative flex flex-col md:flex-row items-center gap-12 ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >

                {/* CARD */}

                <div className="flex-1">

                  <div className="rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 shadow-[0_0_60px_rgba(6,182,212,0.08)]">

                    <div className="text-cyan-400 text-lg font-bold mb-4">

                      STEP {step.number}

                    </div>

                    <h3 className="text-4xl font-black mb-6">

                      {step.title}

                    </h3>

                    <p className="text-slate-400 text-lg leading-relaxed">

                      {step.desc}

                    </p>

                  </div>

                </div>

                {/* CENTER NODE */}

                <div className="hidden md:flex w-20 h-20 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-xl items-center justify-center text-cyan-400 font-black text-2xl z-10">

                  {step.number}

                </div>

                {/* VISUAL */}

                <div className="flex-1">

                  <div className="rounded-[36px] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 h-[260px] flex items-center justify-center text-7xl">

                    ⚡

                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}