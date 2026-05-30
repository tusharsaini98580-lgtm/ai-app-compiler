
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

      <span className="font-medium">{label}</span>
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

      <div className="text-5xl font-black mb-8">{value}</div>

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
    "build enterprise CRM SaaS platform"
  );

  const [modifyPrompt, setModifyPrompt] = useState(
    "Add analytics dashboard"
  );

  const [loading, setLoading] = useState(false);

  const [darkMode, setDarkMode] = useState(true);

  const [generatedRuntime, setGeneratedRuntime] = useState<any>(null);

  const [selectedPage, setSelectedPage] = useState<any>(null);

  const [activeTab, setActiveTab] = useState("frontend");

  async function generateApplication() {
    try {
      setLoading(true);

      const response = await fetch("/api/evaluate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate runtime");
      }

      const data = await response.json();

      console.log(data);

      setGeneratedRuntime(data);

      toast.success("AI runtime generated successfully");
    } catch (error) {
      console.error(error);

      toast.error("Runtime generation failed");
    } finally {
      setLoading(false);
    }
  }

  function modifyApplication() {
    toast.success(`Modification queued: ${modifyPrompt}`);
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
              <h1 className="text-4xl font-black flex items-center gap-4">
                RuntimeOS
              </h1>

              <p className="text-slate-400 text-sm mt-1">
                Runtime SaaS Builder
              </p>
            </div>
          </div>
        </div>

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
      </aside>

      {/* CONTENT */}

      <div className="flex-1 p-8 overflow-y-auto">
        {/* TOPBAR */}

        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-5xl font-black mb-2">
              RuntimeOS
            </h1>

            <p className="text-slate-400">
              AI Powered SaaS Compiler
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
              <Bell size={20} />
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>

        {/* ANALYTICS */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <AnalyticsCard
            title="Runtime Accuracy"
            value="98%"
          />

          <AnalyticsCard
            title="Compile Speed"
            value="4.1s"
          />

          <AnalyticsCard
            title="Projects Generated"
            value="120+"
          />
        </div>

        {/* MAIN GRID */}

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* GENERATE */}

          <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="text-cyan-400" />

              <h2 className="text-4xl font-black">
                Generate Application
              </h2>
            </div>

            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="
                w-full
                h-56
                rounded-3xl
                bg-[#020617]
                border border-white/10
                p-6
                text-lg
                resize-none
                outline-none
              "
            />

            <button
              onClick={generateApplication}
              className="
                w-full
                mt-6
                py-5
                rounded-3xl
                bg-gradient-to-r
                from-cyan-500
                to-blue-500
                text-xl
                font-bold
                hover:scale-[1.02]
                transition-all
              "
            >
              {loading ? "Compiling AI Runtime..." : "Generate Runtime"}
            </button>

            <button
              className="w-full mt-4 py-4 rounded-3xl bg-purple-600 hover:bg-purple-700 transition-all font-bold"
            >
              Export Project
            </button>
          </div>

          {/* GENERATED RUNTIME */}

          <div className="rounded-[32px] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl p-8 overflow-hidden">
            <div className="flex gap-2 mb-4 flex-wrap">
              <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                AI Active
              </div>

              <div className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                Runtime Compiler
              </div>

              <div className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                Live Preview
              </div>
            </div>

            {generatedRuntime ? (
              <div className="space-y-6 text-white">
                <h1 className="text-5xl font-black leading-tight">
                  {generatedRuntime.title}
                </h1>

                <div>
                  <h2 className="text-cyan-400 text-xl mb-3">
                    Pages
                  </h2>

                  <div className="flex flex-wrap gap-3">
                    {generatedRuntime.pages?.map((page: any, index: number) => (
                      <button
                        key={index}
                        onClick={() => setSelectedPage(page)}
                        className="px-4 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-600 transition-all"
                      >
                        {page.name}
                      </button>
                    ))}
                  </div>
                </div>

                {selectedPage && (
                  <div className="bg-black/40 border border-cyan-500 rounded-3xl p-6">
                    <h2 className="text-3xl font-black mb-3">
                      {selectedPage.name}
                    </h2>

                    <p className="text-slate-300 mb-2">
                      Route: {selectedPage.route}
                    </p>

                    <p>{selectedPage.description}</p>
                  </div>
                )}

                <div className="flex gap-2 mb-4 flex-wrap">
                  <button
                    onClick={() => setActiveTab("frontend")}
                    className={`px-4 py-2 rounded-xl ${
                      activeTab === "frontend"
                        ? "bg-cyan-500 text-white"
                        : "bg-black/40 text-slate-300"
                    }`}
                  >
                    Frontend
                  </button>

                  <button
                    onClick={() => setActiveTab("backend")}
                    className={`px-4 py-2 rounded-xl ${
                      activeTab === "backend"
                        ? "bg-cyan-500 text-white"
                        : "bg-black/40 text-slate-300"
                    }`}
                  >
                    Backend
                  </button>

                  <button
                    onClick={() => setActiveTab("database")}
                    className={`px-4 py-2 rounded-xl ${
                      activeTab === "database"
                        ? "bg-cyan-500 text-white"
                        : "bg-black/40 text-slate-300"
                    }`}
                  >
                    Database
                  </button>
                </div>

                {activeTab === "frontend" && (
                <iframe
  title="Generated App"
  className="w-full h-[500px] rounded-3xl border border-cyan-500 bg-white"
  srcDoc={`
    <!DOCTYPE html>
    <html>
      <head>
        <script src="https://cdn.tailwindcss.com"></script>

        <style>
          body {
            background: #f1f5f9;
            padding: 30px;
            font-family: sans-serif;
          }

          .card {
            background: white;
            border-radius: 20px;
            padding: 24px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          }
        </style>
      </head>

      <body>

        <div class="card">
          <h1 style="font-size:32px;font-weight:bold;margin-bottom:20px;">
            ${generatedRuntime.title || "Generated SaaS"}
          </h1>

          <div style="display:grid;gap:16px;grid-template-columns:repeat(2,1fr);">

            ${(generatedRuntime.pages || [])
              .map(
                (page: any) => `
                  <div style="
                    background:#0f172a;
                    color:white;
                    padding:20px;
                    border-radius:16px;
                  ">
                    <h2 style="font-size:20px;font-weight:bold;">
                      ${page.name}
                    </h2>

                    <p style="margin-top:10px;">
                      ${page.description || ""}
                    </p>

                    <div style="
                      margin-top:12px;
                      font-size:14px;
                      opacity:0.7;
                    ">
                      Route: ${page.route}
                    </div>
                  </div>
                `
              )
              .join("")}

          </div>

        </div>

      </body>
    </html>
  `}
/>
                )}

                {activeTab === "backend" && (
                  <div className="bg-black p-4 rounded-3xl overflow-auto text-green-400 text-sm">
                    <pre>
{`// Express API Example

app.get("/api/users", async (req, res) => {
  const users = await prisma.user.findMany();

  res.json(users);
});

app.post("/api/auth/login", async (req, res) => {
  // JWT LOGIN
});`}
                    </pre>
                  </div>
                )}

                {activeTab === "database" && (
                  <div className="bg-black p-4 rounded-3xl text-cyan-400">
                    {generatedRuntime.databaseTables?.map(
                      (table: string, i: number) => (
                        <div
                          key={i}
                          className="border border-cyan-500 rounded-2xl p-4 mb-3"
                        >
                          📦 {table}
                        </div>
                      )
                    )}
                  </div>
                )}

                <div>
                  <h2 className="text-cyan-400 text-xl mb-3">
                    Features
                  </h2>

                  <ul className="list-disc pl-6 space-y-2">
                    {generatedRuntime.features?.map(
                      (feature: string, i: number) => (
                        <li key={i}>{feature}</li>
                      )
                    )}
                  </ul>
                </div>

                <div>
                  <h2 className="text-cyan-400 text-xl mb-3">
                    API Routes
                  </h2>

                  <ul className="list-disc pl-6 space-y-2">
                    {generatedRuntime.apiRoutes?.map(
                      (route: string, i: number) => (
                        <li key={i}>{route}</li>
                      )
                    )}
                  </ul>
                </div>

                <div>
                  <h2 className="text-cyan-400 text-xl mb-3">
                    Project Structure
                  </h2>

                  <div className="bg-black/40 p-4 rounded-2xl text-sm text-slate-300 space-y-1">
                    <p>📁 app/</p>
                    <p> ┣ 📄 dashboard/page.tsx</p>
                    <p> ┣ 📄 students/page.tsx</p>
                    <p> ┣ 📄 api/students/route.ts</p>
                    <p> ┣ 📄 api/auth/route.ts</p>
                    <p> ┗ 📄 layout.tsx</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center min-h-[500px]">
                <div className="text-7xl mb-6">⚡</div>

                <h2 className="text-5xl font-black mb-4">
                  No Runtime Generated Yet
                </h2>

                <p className="text-slate-400 text-lg max-w-md leading-relaxed">
                  Generate enterprise SaaS applications dynamically using AI-powered runtime orchestration pipelines.
                </p>
              </div>
            )}
          </div>

          {/* MODIFY */}

          <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8">
            <h2 className="text-4xl font-black mb-6">
              Modify Runtime
            </h2>

            <textarea
              value={modifyPrompt}
              onChange={(e) => setModifyPrompt(e.target.value)}
              className="
                w-full
                h-56
                rounded-3xl
                bg-[#020617]
                border border-white/10
                p-6
                text-lg
                resize-none
                outline-none
              "
            />

            <button
              onClick={modifyApplication}
              className="
                w-full
                mt-6
                py-5
                rounded-3xl
                bg-white/10
                border border-white/10
                text-xl
                font-bold
                hover:bg-white/20
                transition-all
              "
            >
              Modify Runtime
            </button>
          </div>
        </div>

        {/* TERMINAL */}

        <div className="mt-8 bg-black rounded-[32px] p-6 border border-cyan-500/20">
          <h2 className="text-green-400 font-bold mb-4 text-xl">
            AI Compiler Terminal
          </h2>

          <div className="font-mono text-sm text-green-400 space-y-2">
            <p>✓ Initializing RuntimeOS Compiler...</p>
            <p>✓ Parsing architecture...</p>
            <p>✓ Building frontend...</p>
            <p>✓ Building backend APIs...</p>
            <p>✓ Generating database schema...</p>
            <p>✓ Runtime compilation complete</p>
          </div>
        </div>
      </div>
    </main>
  );
}
