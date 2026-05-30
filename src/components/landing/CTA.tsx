"use client";

import {
  motion,
} from "framer-motion";

export default function CTA() {

  return (

    <section className="px-10 pb-32">

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

        className="relative overflow-hidden max-w-7xl mx-auto rounded-[48px] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-2xl p-20 text-center shadow-[0_0_120px_rgba(6,182,212,0.12)]"
      >

        {/* GLOW */}

        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/20 blur-[140px]" />

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-[140px]" />

        <div className="relative z-10">

          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 mb-10">

            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

            <span className="text-slate-300">

              Runtime Infrastructure Active

            </span>

          </div>

          <h2 className="text-7xl font-black leading-tight mb-10">

            Start Building
            <br />

            with AI Runtime Pipelines

          </h2>

          <p className="text-slate-300 text-2xl max-w-4xl mx-auto leading-relaxed mb-14">

            Generate enterprise-grade SaaS platforms,
            dashboards, workflows, analytics systems,
            and deployable runtime applications using AI.

          </p>

          <div className="flex flex-wrap justify-center gap-6">

            <button className="px-10 py-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 font-bold text-lg hover:scale-105 hover:shadow-[0_0_60px_rgba(6,182,212,0.35)] transition-all duration-300 shadow-[0_0_60px_rgba(6,182,212,0.35)]">

              Launch Runtime

            </button>

            <button className="px-10 py-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:shadow-[0_0_60px_rgba(6,182,212,0.35)] transition-all duration-300 backdrop-blur-xl text-lg">

              View Documentation

            </button>

          </div>

        </div>

      </motion.div>

    </section>
  );
}