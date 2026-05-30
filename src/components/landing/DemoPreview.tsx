"use client";

import {
  motion,
} from "framer-motion";

export default function DemoPreview() {

  return (

    <section
  id="preview" className="px-10 pb-40">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="text-center mb-20">

          <h2 className="text-6xl font-black mb-6">

            Live Runtime Preview

          </h2>

          <p className="text-slate-400 text-xl max-w-3xl mx-auto">

            AI-generated enterprise dashboards rendered dynamically
            through runtime orchestration pipelines.

          </p>

        </div>

        {/* MACBOOK */}

        <motion.div

          initial={{
            opacity: 0,
            y: 80,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 1,
          }}

          viewport={{
            once: true,
          }}

          className="relative"
        >

          {/* GLOW */}

          <div className="absolute inset-0 bg-cyan-500/10 blur-[120px]" />

          {/* DEVICE */}

          <div className="relative rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 shadow-[0_0_120px_rgba(6,182,212,0.15)]">

            {/* BROWSER */}

            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-slate-950">

              {/* TOPBAR */}

              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900">

                <div className="flex items-center gap-3">

                  <div className="w-3 h-3 rounded-full bg-red-400" />

                  <div className="w-3 h-3 rounded-full bg-yellow-400" />

                  <div className="w-3 h-3 rounded-full bg-green-400" />

                </div>

                <div className="text-sm text-slate-400">

                  runtimeos.ai/dashboard

                </div>

                <div className="bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full">

                  LIVE

                </div>

              </div>

              {/* CONTENT */}

              <div className="grid lg:grid-cols-[260px_1fr] min-h-[700px]">

                {/* SIDEBAR */}

                <div className="border-r border-white/10 bg-slate-900/50 p-6">

                  <div className="text-2xl font-black mb-10">

                    RuntimeOS

                  </div>

                  <div className="space-y-4">

                    {[
                      "Dashboard",
                      "Analytics",
                      "Runtime",
                      "Schemas",
                      "Deployments",
                      "Settings",
                    ].map((item, index) => (

                      <div

                        key={index}

                        className={`rounded-2xl px-5 py-4 ${
                          index === 0
                            ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/20"
                            : "bg-white/5 text-slate-300"
                        }`}
                      >

                        {item}

                      </div>
                    ))}

                  </div>

                </div>

                {/* MAIN */}

                <div className="p-8">

                  {/* TOP METRICS */}

                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

                    <MetricCard
                      title="Revenue"
                      value="$84K"
                    />

                    <MetricCard
                      title="Users"
                      value="2,184"
                    />

                    <MetricCard
                      title="Growth"
                      value="+18%"
                    />

                    <MetricCard
                      title="Deployments"
                      value="842"
                    />

                  </div>

                  {/* CHART */}

                  <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 mb-8 h-[320px] relative overflow-hidden">

                    <div className="absolute bottom-0 left-0 right-0 h-[220px] bg-gradient-to-t from-cyan-500/20 to-transparent" />

                    <div className="relative z-10">

                      <div className="text-2xl font-bold mb-6">

                        Runtime Analytics

                      </div>

                      <div className="flex items-end gap-5 h-[180px]">

                        {[40, 65, 80, 55, 90, 120, 140].map(
                          (height, index) => (

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

                              className="flex-1 rounded-t-2xl bg-gradient-to-t from-cyan-500 to-blue-500"
                            />
                          )
                        )}

                      </div>

                    </div>

                  </div>

                  {/* TABLE */}

                  <div className="rounded-[32px] border border-white/10 bg-white/5 overflow-hidden">

                    <div className="px-8 py-6 border-b border-white/10 flex items-center justify-between">

                      <h3 className="text-2xl font-bold">

                        Active Runtime Pipelines

                      </h3>

                      <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm">

                        12 Active

                      </div>

                    </div>

                    <div>

                      {[
                        "Enterprise CRM Runtime",
                        "Hospital Management Runtime",
                        "Inventory AI Runtime",
                        "HR Analytics Runtime",
                      ].map((item, index) => (

                        <div

                          key={index}

                          className="px-8 py-5 border-b border-white/5 flex items-center justify-between hover:bg-white/5 transition-all"
                        >

                          <div>

                            <div className="font-semibold mb-1">

                              {item}

                            </div>

                            <div className="text-sm text-slate-400">

                              Runtime pipeline deployed successfully

                            </div>

                          </div>

                          <div className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm">

                            Active

                          </div>

                        </div>
                      ))}

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

function MetricCard({
  title,
  value,
}: any) {

  return (

    <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">

      <div className="text-slate-400 mb-3">

        {title}

      </div>

      <div className="text-4xl font-black">

        {value}

      </div>

    </div>
  );
}