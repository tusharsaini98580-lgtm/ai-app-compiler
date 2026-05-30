export default function TrustedBy() {

  return (

    <section className="px-10 pb-24 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        <div className="text-center text-slate-500 uppercase tracking-[0.3em] text-sm mb-10">

          Trusted by enterprise runtime teams

        </div>

        <div className="flex gap-10 whitespace-nowrap animate-pulse">

          {[
            "OpenAI",
            "Vercel",
            "Retool",
            "Linear",
            "Framer",
            "Scale AI",
            "Anthropic",
            "Notion",
          ].map((item, index) => (

            <div
              key={index}
              className="text-4xl font-black text-white/20"
            >

              {item}

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}