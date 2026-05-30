"use client";

import {
  motion,
} from "framer-motion";

const stats = [

  {
    label:
      "Runtime Executions",

    value:
      "12.4K",
  },

  {
    label:
      "Deployments",

    value:
      "2.1K",
  },

  {
    label:
      "AI Pipelines",

    value:
      "98%",
  },

  {
    label:
      "Active Projects",

    value:
      "842",
  },
];

export default function Stats() {

  return (

    <section className="px-10 pb-32">

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {stats.map((item, index) => (

          <motion.div

            key={index}

            initial={{
              opacity: 0,
              y: 40,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}

            viewport={{
              once: true,
            }}

            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[28px] p-8 text-center"
          >

            <h2 className="text-5xl font-black mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">

              {item.value}

            </h2>

            <p className="text-slate-400">

              {item.label}

            </p>

          </motion.div>
        ))}

      </div>

    </section>
  );
}