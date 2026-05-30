"use client";

import {
  motion,
} from "framer-motion";

export default function AIControlCenter() {

  return (

    <section className="px-10 pb-40">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="text-center mb-24">

          <h2 className="text-5xl md:text-7xl font-black mb-8">

            AI Control Center

          </h2>

          <p className="text-slate-400 text-2xl max-w-4xl mx-auto leading-relaxed">

            Monitor runtime orchestration, AI pipelines,
            schema generation, deployment execution,
            and enterprise infrastructure in real time.

          </p>

        </div>

        {/* MAIN GRID */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT PANEL */}

          <motion.div

            initial={{
              opacity: 0,
              x: -80,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 1,
            }}

            viewport={{
              once: true,
            }}

            className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 shadow-[0_0_100px_rgba(6,182,212,0.12)]"
          >

            <div className="flex items-center justify-between mb-10">

              <h3 className="text-3xl font-black">

                Runtime Status

              </h3>

             <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-400/20">

  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

  <span className="text-green-300 text-sm">

    Active

  </span>

</div>

            </div>

            <div className="space-y-6">

              <StatusRow
                title="AI Compiler"
                value="Operational"
              />

              <StatusRow
                title="Schema Engine"
                value="Running"
              />

              <StatusRow
                title="Repair Pipeline"
                value="Validated"
              />

              <StatusRow
                title="Runtime Deployments"
                value="842"
              />

              <StatusRow
                title="Execution Latency"
                value="4.1s"
              />

            </div>

            {/* GRAPH */}

            <div className="mt-12 rounded-[32px] bg-slate-950 border border-white/10 p-8">

              <div className="text-2xl font-bold mb-8">

                AI Runtime Analytics

              </div>

              <div className="flex items-end gap-4 h-[220px]">

                {[50, 90, 120, 70, 150, 180, 220].map(
                  (
                    height,
                    index
                  ) => (

                    <motion.div

                      key={index}

                      initial={{
                        height: 0,
                      }}

                      whileInView={{
                        height,
                      }}

                      transition={{
                        duration: 1,
                        delay: index * 0.1,
                      }}

                      viewport={{
                        once: true,
                      }}

                      className="flex-1 rounded-t-3xl bg-gradient-to-t from-cyan-500 via-blue-500 to-purple-500"
                    />
                  )
                )}

              </div>

            </div>

          </motion.div>

          {/* RIGHT PANEL */}

          <motion.div

            initial={{
              opacity: 0,
              x: 80,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 1,
            }}

            viewport={{
              once: true,
            }}

            className="space-y-10"
          >

            {/* DEPLOYMENT */}

            <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-2xl p-10">

              <div className="text-6xl mb-8">

                🚀

              </div>

              <h3 className="text-4xl font-black mb-6">

                Enterprise Deployment Infrastructure

              </h3>

              <p className="text-slate-300 text-lg leading-relaxed mb-8">

                AI-generated SaaS applications deploy instantly
                through dynamic runtime rendering pipelines.

              </p>

              <div className="flex flex-wrap gap-4">

                <TechPill text="Next.js" />

                <TechPill text="TypeScript" />

                <TechPill text="OpenRouter" />

                <TechPill text="TailwindCSS" />

                <TechPill text="Runtime Engine" />

              </div>

            </div>

            {/* TEAM */}

            <div className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10">

              <div className="flex items-center justify-between mb-10">

                <h3 className="text-3xl font-black">

                  AI Runtime Team

                </h3>

                <div className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm">

                  12 Online

                </div>

              </div>

              <div className="space-y-5">

                <TeamMember
                  name="Alex Morgan"
                  role="AI Runtime Engineer"
                />

                <TeamMember
                  name="Sarah Chen"
                  role="Schema Architect"
                />

                <TeamMember
                  name="David Kim"
                  role="Deployment Lead"
                />

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

function StatusRow({
  title,
  value,
}: any) {

  return (

    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-5">

      <span className="text-slate-300">
        {title}
      </span>

      <span className="text-cyan-400 font-semibold">
        {value}
      </span>

    </div>
  );
}

function TeamMember({
  name,
  role,
}: any) {

  return (

    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-5">

      <div className="flex items-center gap-4">

        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center font-black text-xl">

          {name[0]}

        </div>

        <div>

          <div className="font-semibold text-lg">

            {name}

          </div>

          <div className="text-slate-400 text-sm">

            {role}

          </div>

        </div>

      </div>

      <div className="text-green-400 text-sm">

        Online

      </div>

    </div>
  );
}

function TechPill({
  text,
}: any) {

  return (

    <div className="px-5 py-3 rounded-full border border-white/10 bg-white/5 text-sm">

      {text}

    </div>
  );
}

<div className="mt-10 rounded-[32px] border border-white/10 bg-black/30 backdrop-blur-xl p-8">

  <div className="text-2xl font-bold mb-6">

    Live Runtime Activity

  </div>

  <div className="space-y-5">

    {[
      "Enterprise CRM deployed successfully",
      "AI schema validation completed",
      "Runtime pipeline generated",
      "Analytics dashboard rendered",
    ].map((item, index) => (

      <div
        key={index}
        className="
          flex
          items-center
          gap-4

          rounded-2xl

          border
          border-white/10

          bg-white/5

          px-5
          py-4
        "
      >

        <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

        <div className="text-slate-300">

          {item}

        </div>

      </div>
    ))}

  </div>

</div>