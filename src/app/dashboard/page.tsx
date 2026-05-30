
"use client";

import { useState } from "react";

import toast from "react-hot-toast";

import {
  LayoutDashboard,
  FolderKanban,
  Users,
  Briefcase,
  Activity,
  Settings,
  Bell,
  Moon,
  Sun,
  Sparkles,
} from "lucide-react";

function SidebarItem({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={`
        flex items-center gap-4
        px-5 py-4
        rounded-2xl
        border
        cursor-pointer
        transition-all duration-300

        ${
          active
            ? "bg-cyan-500/15 border-cyan-400/30 text-white"
            : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white"
        }
      `}
    >
      {icon}

      <span className="font-medium">
        {label}
      </span>
    </div>
  );
}

function AnalyticsCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div
      className="
        rounded-[32px]
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        p-8
        hover:border-cyan-400/20
        hover:-translate-y-1
        transition-all duration-300
      "
    >
      <div className="text-slate-400 mb-4 text-sm uppercase tracking-[0.2em]">
        {title}
      </div>

      <div className="text-5xl font-black mb-8">
        {value}
      </div>

      <div className="flex items-end gap-2 h-16">
        {[25, 40, 32, 60, 45].map((h, i) => (
          <div
            key={i}
            style={{
              height: `${h}px`,
            }}
            className="flex-1 rounded-t-xl bg-gradient-to-t from-cyan-500 to-blue-500"
          />
        ))}
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const [prompt, setPrompt] = useState(
    "build enterprise CRM SaaS platform..."
  );

  const [modifyPrompt, setModifyPrompt] = useState(
    "Add analytics dashboard..."
  );

  const [loading, setLoading] = useState(false);

  const [darkMode, setDarkMode] = useState(true);

  async function generateApplication() {
    try {
      setLoading(true);

      await new Promise((resolve) =>
        setTimeout(resolve, 1800)
      );

      toast.success(
        "AI runtime generated successfully"
      );
    } catch (error) {
      toast.error(
        "Runtime generation failed"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      className={`
        min-h-screen
        flex
        overflow-hidden
        transition-all

        ${
          darkMode
            ? "bg-[#020617] text-white"
            : "bg-slate-100 text-slate-900"
        }
      `}
    >
      {/* SIDEBAR */}

      <aside
        className="
          hidden
          lg:flex

          w-72

          flex-col

          border-r
          border-white/10

          bg-black/30
          backdrop-blur-2xl

          p-6
        "
      >
        {/* LOGO */}

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div
              className="
                w-14 h-14
                rounded-2xl
                bg-gradient-to-r
                from-cyan-500
                to-blue-500
                flex items-center justify-center
                font-black text-2xl
              "
            >
              AI
            </div>

            <div>
              <h1
                className="
                  text-4xl
                  font-black
                  flex
                  items-center
                  gap-4
                "
              >
                RuntimeOS
              </h1>

              <p className="text-slate-400 text-sm mt-1">
                Runtime SaaS Builder
              </p>
            </div>
          </div>
        </div>

        {/* NAVIGATION */}

        <div className="space-y-3">
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            label="Dashboard"
            active
          />

          <SidebarItem
            icon={<FolderKanban size={20} />}
            label="Projects"
          />

          <SidebarItem
            icon={<Users size={20} />}
            label="Customers"
          />

          <SidebarItem
            icon={<Briefcase size={20} />}
            label="Workspace"
          />

          <SidebarItem
            icon={<Activity size={20} />}
            label="Analytics"
          />

          <SidebarItem
            icon={<Settings size={20} />}
            label="Settings"
          />
        </div>

        {/* STATUS */}

        <div
          className="
            mt-auto
            rounded-3xl
            border border-green-400/20
            bg-green-500/10
            p-5
          "
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

            <div className="font-semibold text-green-300">
              AI Runtime Engine Active
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            Production infrastructure operational
            across all deployment pipelines.
          </p>
        </div>
      </aside>

      {/* MAIN CONTENT */}

      <div
        className="
          flex-1
          overflow-y-auto
          px-8
          py-6
        "
      >
        {/* TOPBAR */}

        <div
          className="
            flex
            flex-wrap
            items-center
            justify-between
            gap-6
            mb-8
          "
        >
          {/* LEFT */}

          <div>
            <div
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                border border-green-400/20
                bg-green-500/10
                text-green-300
                mb-5
              "
            >
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

              Systems Operational
            </div>

            <h1 className="text-6xl font-black leading-tight mb-4">
              Build Enterprise
              <br />
              AI Runtime Systems
            </h1>

            <p className="text-slate-400 text-lg max-w-3xl leading-relaxed">
              AI-powered runtime compiler that transforms prompts into production-grade SaaS applications.
            </p>
          </div>

          {/* RIGHT */}

          <div className="flex items-center gap-5">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="
                px-5 py-3
                rounded-2xl
                border border-white/10
                bg-white/5
                hover:bg-white/10
                transition-all
              "
            >
              {darkMode ? (
                <Sun size={20} />
              ) : (
                <Moon size={20} />
              )}
            </button>

            <button
              className="
                w-12 h-12
                rounded-2xl
                border border-white/10
                bg-white/5
                flex items-center justify-center
              "
            >
              <Bell size={20} />
            </button>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="font-semibold text-lg">
                  Tushar Saini
                </div>

                <div className="text-slate-400 text-sm">
                  Runtime Engineer
                </div>
              </div>

              <div
                className="
                  w-12 h-12
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-500
                  flex items-center justify-center
                  font-black
                "
              >
                T
              </div>
            </div>
          </div>
        </div>

        {/* ANALYTICS */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          <AnalyticsCard
            title="Runtime Executions"
            value="12.4K"
          />

          <AnalyticsCard
            title="Deployments"
            value="842"
          />

          <AnalyticsCard
            title="Schema Accuracy"
            value="98%"
          />

          <AnalyticsCard
            title="Runtime Speed"
            value="4.1s"
          />
        </div>

        {/* MAIN GRID */}

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          {/* GENERATE */}

          <div
            className="
              xl:col-span-5

              rounded-[32px]

              border
              border-white/10

              bg-white/5
              backdrop-blur-xl

              p-8
            "
          >
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="text-cyan-400" />

              <h2 className="text-3xl font-black">
                Generate Application
              </h2>
            </div>

            <textarea
              value={prompt}
              onChange={(e) =>
                setPrompt(e.target.value)
              }
              rows={8}
              placeholder="Describe your SaaS application..."
              className="
                w-full

                rounded-2xl

                border
                border-white/10

                bg-black/30

                px-5
                py-4

                text-white

                outline-none

                focus:border-cyan-400/40

                transition-all
              "
            />

            <button
              onClick={generateApplication}
              disabled={loading}
              className="
                mt-5

                w-full

                rounded-2xl

                bg-gradient-to-r
                from-cyan-500
                to-blue-500

                py-4

                font-semibold

                hover:scale-[1.02]

                transition-all
              "
            >
              {loading
                ? "Generating Runtime..."
                : "Generate Runtime"}
            </button>
          </div>

          {/* EMPTY STATE */}

          <div
            className="
              xl:col-span-4

              rounded-[32px]

              border
              border-white/10

              bg-gradient-to-br
              from-cyan-500/10
              to-blue-500/10

              backdrop-blur-xl

              p-10

              flex
              flex-col
              justify-center
              items-center

              text-center
            "
          >
            <div className="text-7xl mb-6">
              ⚡
            </div>

            <h2 className="text-4xl font-black mb-5">
              No Runtime Generated Yet
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed">
              Generate enterprise SaaS applications dynamically using AI-powered runtime orchestration pipelines.
            </p>
          </div>

          {/* MODIFY */}

          <div
            className="
              xl:col-span-3

              rounded-[32px]

              border
              border-white/10

              bg-white/5
              backdrop-blur-xl

              p-8
            "
          >
            <h2 className="text-3xl font-black mb-6">
              Modify Runtime
            </h2>

            <textarea
              value={modifyPrompt}
              onChange={(e) =>
                setModifyPrompt(e.target.value)
              }
              rows={6}
              className="
                w-full
                rounded-2xl
                border border-white/10
                bg-black/30
                px-5 py-4
                text-white
                outline-none
              "
            />

            <button
              onClick={() =>
                toast.success(
                  "Runtime modified successfully"
                )
              }
              className="
                mt-5
                w-full
                rounded-2xl
                border border-white/10
                bg-white/10
                py-4
                font-semibold
                hover:bg-white/20
                transition-all
              "
            >
              Modify Runtime
            </button>
          </div>

          {/* LOGS */}

          <div
            className="
              xl:col-span-12

              rounded-[32px]

              border
              border-white/10

              bg-black/30
              backdrop-blur-xl

              p-8
            "
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-black">
                Runtime Logs
              </h2>

              <div className="flex items-center gap-2 text-green-300">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

                Streaming
              </div>
            </div>

            <div className="space-y-4 font-mono text-sm">
              <div className="text-green-400">
                ✓ Intent extraction completed
              </div>

              <div className="text-cyan-400">
                ✓ Runtime schema generated
              </div>

              <div className="text-purple-400">
                ✓ API orchestration validated
              </div>

              <div className="text-yellow-400">
                ✓ Deployment pipeline initialized
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

