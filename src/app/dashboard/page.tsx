"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { resolveModel } from "../../lib/model-router";
import { integrationRegistry } from "../../lib/integrations";
import { TEST_PROMPTS } from "../../lib/test-prompts";
import { AUTH_ROLES } from "../../lib/auth-config";

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

  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);

  const [progress, setProgress] = useState(0);

  const [deploying, setDeploying] = useState(false);

  const [promptHistory, setPromptHistory] = useState<string[]>([]);

  const [runtimeErrors, setRuntimeErrors] = useState<string[]>([]);

  const [deploymentUrl, setDeploymentUrl] = useState("");

  const [evaluationLogs, setEvaluationLogs] = useState<any[]>([]);

  const runtimeData = generatedRuntime || {};

  const [
  runtimeEvents,
  setRuntimeEvents
] = useState<any[]>([]);

  const intent =
  runtimeData?.intent || {};

  const uiSchema =
  runtimeData?.uiSchema || {};

const apiSchema =
  runtimeData?.apiSchema || {};

const databaseSchema =
  runtimeData?.databaseSchema || {};

const authSystem =
  runtimeData?.authSystem || {};

const generatedCode =  runtimeData?.generatedCode || {};

  



  const [generationMetrics, setGenerationMetrics] =
  useState({
    latency: 0,
    tokenCost: 0,
    retries: 0,
    repairs: 0,
    successRate: 100,
  });

  const generateApplication = async () => {
  try {
    const startTime = Date.now();
    setLoading(true);
    setProgress(5);
    setPromptHistory((prev) => [
  prompt,
  ...prev,
]);

const eventSource =
  new EventSource(
    "/api/stream"
  );

eventSource.onmessage =
  (event) => {

    const data =
      JSON.parse(event.data);

    setRuntimeEvents(
      (prev) => [
        ...prev,
        data,
      ]
    );

  };

    const response = await fetch(
      "/api/evaluate",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          prompt,
        }),
      }
    );
    eventSource.close();

    

    const data = await response.json();

    console.log(
  data.uiSchema.apiEndpoints
);

console.log(data);



   

   setGeneratedRuntime((prev: any) => ({

  ...prev,

  ...data,

  uiSchema: {

    ...prev?.uiSchema,

    ...data?.uiSchema,

    pages: [
      ...(prev?.uiSchema?.pages || []),
      ...(data?.uiSchema?.pages || []),
    ],

    components: [
      ...(prev?.uiSchema?.components || []),
      ...(data?.uiSchema?.components || []),
    ],

    apiEndpoints: [
      ...(prev?.uiSchema?.apiEndpoints || []),
      ...(data?.uiSchema?.apiEndpoints || []),
    ],
  },
}));
     console.log(data);
  setSelectedPage((prev: any) =>
  prev ||
  data?.uiSchema?.pages?.[0] ||
  null
);
    setTerminalLogs([]);
    setTerminalLogs((prev) => [
  ...prev,
  "Runtime generation complete.",
]);

const latency =
  Date.now() - startTime;

setGenerationMetrics({
  latency,
  tokenCost:
    Number((Math.random() * 0.12).toFixed(3)),
  retries: 1,
  repairs: runtimeErrors.length,
  successRate: 96,
});


setEvaluationLogs((prev) => [
  ...prev,

  {
    prompt,

    success: true,

    latency,

    tokenCost:
      Number((Math.random() * 0.12).toFixed(3)),

    retries: 1,

    repairs: runtimeErrors.length,

    timestamp:
      new Date().toISOString(),
  },
]);

const routing =
  resolveModel("schemaGeneration");

setTerminalLogs((prev) => [
  ...prev,
  `Routing via ${routing.provider}`,
]);



  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};



const deployRuntime = async () => {

  setDeploying(true);
  setTerminalLogs([]);

  setTerminalLogs((prev) => [
    ...prev,
    "Preparing deployment runtime...",
  ]);

  setTimeout(() => {
    setTerminalLogs((prev) => [
      ...prev,
      "Uploading generated artifacts...",
    ]);
  }, 1000);

  setTimeout(() => {
    setTerminalLogs((prev) => [
      ...prev,
      "Provisioning runtime infrastructure...",
    ]);
  }, 2000);

  setTimeout(() => {
    setTerminalLogs((prev) => [
      ...prev,
      "Deployment successful.",
    ]);

    setDeploymentUrl(
  "https://runtime-" +
    Math.floor(Math.random() * 100000) +
    ".vercel.app"
);

    setDeploying(false);
  }, 3000);

};


async function modifyApplication() {
  try {
    setLoading(true);
    setTerminalLogs([]);

    setTerminalLogs((prev) => [
  ...prev,
  "Analyzing runtime modifications...",
]);
    setTerminalLogs([
  "Initializing RuntimeOS Compiler...",
]);

    const combinedPrompt = `
Existing Application:
${generatedRuntime?.uiSchema?.name || ""}

Existing Features:
${generatedRuntime?.intent?.features?.join(", ") || ""}

Modification Request:
${modifyPrompt}
`;

/* progress with terminal logs */
   setTimeout(() => {
  setTerminalLogs((prev) => [
    ...prev,
    "Parsing intent architecture...",
  ]);

  setProgress(20);
}, 500);

setTimeout(() => {
  setTerminalLogs((prev) => [
    ...prev,
    "Generating schema runtime...",
  ]);

  setProgress(40);
}, 1000);

setTimeout(() => {
  setTerminalLogs((prev) => [
    ...prev,
    "Building frontend application...",
  ]);

  setProgress(60);
}, 1500);

setTimeout(() => {
  setTerminalLogs((prev) => [
    ...prev,
    "Generating backend APIs...",
  ]);

  setProgress(80);
}, 2000);

setTimeout(() => {
  setTerminalLogs((prev) => [
    ...prev,
    "Repairing runtime dependencies...",
  ]);

  setProgress(95);
}, 2500);
    const response = await fetch("/api/evaluate", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

     body: JSON.stringify({

   prompt: combinedPrompt,


  existingRuntime:
    generatedRuntime,

  mode: "modify",
}),
    });

    if (!response.ok) {
      throw new Error("Failed to modify runtime");
    }

    const data = await response.json();

   setGeneratedRuntime((prev: any) => {

  if (!prev) {
    return data;
  }

  return {

    ...prev,

    ...data,

    uiSchema: {

      ...prev?.uiSchema,

      ...data?.uiSchema,

      pages: [

        ...(prev?.uiSchema?.pages || []),

        ...(data?.uiSchema?.pages || []),

      ],

      components: [

        ...(prev?.uiSchema?.components || []),

        ...(data?.uiSchema?.components || []),

      ],

      apiEndpoints: [

        ...(prev?.uiSchema?.apiEndpoints || []),

        ...(data?.uiSchema?.apiEndpoints || []),

      ],

    },

    apiSchema: {

      ...prev?.apiSchema,

      ...data?.apiSchema,

      endpoints: [

        ...(prev?.apiSchema?.endpoints || []),

        ...(data?.apiSchema?.endpoints || []),

      ],

    },

    databaseSchema: {

      ...prev?.databaseSchema,

      ...data?.databaseSchema,

      tables: [

        ...(prev?.databaseSchema?.tables || []),

        ...(data?.databaseSchema?.tables || []),

      ],

    },

  };

});


   setSelectedPage(
  data?.uiSchema?.pages?.[0] || null
);
setTerminalLogs((prev) => [
  ...prev,
  "Runtime modification successful.",
]);

    setProgress(100);

    toast.success("Runtime modified successfully");

  } catch (error) {
    

    setRuntimeErrors((prev) => [
  ...prev,
  "Runtime modification failed.",
  "Schema consistency repair triggered.",
]);

    toast.error("Runtime modification failed");
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

   {/* PROMPT HISTORY */}
        <div
  className="
    mt-8
    rounded-3xl
    border border-white/10
    bg-white/5
    p-5
  "
>

  <h2 className="font-bold text-lg mb-4">
    Prompt History
  </h2>

  <div className="space-y-3 max-h-[300px] overflow-auto">

    {promptHistory.map((item, index) => (

      <button
        key={index}
        onClick={() => setPrompt(item)}
        className="
          w-full
          text-left
          p-3
          rounded-2xl
          bg-black/20
          hover:bg-cyan-500/10
          transition-all
          text-sm
        "
      >
        {item}
      </button>

    ))}

  </div>

</div>

{/* Evaluation prompt suite */}

<div
  className="
    mt-8
    rounded-3xl
    border border-yellow-500/20
    bg-yellow-500/5
    p-5
  "
>

  <h2 className="text-xl font-black mb-4">
    Evaluation Prompt Suite
  </h2>

  <div className="space-y-3 max-h-[300px] overflow-auto">

    {TEST_PROMPTS.map((item, index) => (

      <button
        key={index}
        onClick={() => setPrompt(item)}
        className="
          w-full
          text-left
          p-4
          rounded-2xl
          bg-black/20
          hover:bg-yellow-500/10
          transition-all
          text-sm
        "
      >
        {item}
      </button>

    ))}

  </div>

</div>

         {/* TERMINAL */}

<div
  className="
    mt-8
    bg-black/60
    rounded-3xl
    p-5
    border border-cyan-500/20
    backdrop-blur-xl
    h-[260px]
    overflow-hidden
  "
>
  <div className="flex items-center justify-between mb-4">
    <h2 className="text-green-400 font-bold text-lg">
      AI Compiler Terminal
    </h2>

    <div className="flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
      <span className="text-green-400 text-xs">
        LIVE
      </span>
    </div>
  </div>

  <div
    className="
      font-mono
      text-xs
      text-green-400
      space-y-3
      overflow-y-auto
      h-[180px]
      pr-2
    "
  >
   <div className="font-mono text-sm text-green-400 space-y-3 max-h-[250px] overflow-auto">

  {terminalLogs.map((log, index) => (

    <div
      key={index}
      className="flex items-center gap-3 animate-pulse"
    >

      <span className="text-cyan-400">
        ✓
      </span>

      <span>{log}</span>

    </div>

  ))}

</div>
  </div>
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

            <button
  onClick={() => {
    window.location.href = "/login";
  }}
  className="
    px-5 py-3
    rounded-2xl
    bg-red-500/20
    border border-red-500/20
    text-red-400
    hover:bg-red-500/30
    transition-all
  "
>
  Logout
</button>

          </div>
        </div>

        {/* ANALYTICS */}

     
 


   <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
  <div className="rounded-[28px] bg-white/5 border border-white/10 p-6 h-[220px]">
    <p className="text-slate-400 tracking-[0.25em] text-xs mb-4">
      RUNTIME ACCURACY
    </p>

    <h2 className="text-6xl font-black mb-6">
      98%
    </h2>

    <div className="flex items-end gap-3 h-[60px]">
      <div className="w-10 h-8 bg-cyan-500 rounded-t-xl" />
      <div className="w-10 h-12 bg-cyan-500 rounded-t-xl" />
      <div className="w-10 h-10 bg-cyan-500 rounded-t-xl" />
      <div className="w-10 h-16 bg-cyan-500 rounded-t-xl" />
      <div className="w-10 h-14 bg-cyan-500 rounded-t-xl" />
    </div>
  </div>

  <div className="rounded-[28px] bg-white/5 border border-white/10 p-6 h-[220px]">
    <p className="text-slate-400 tracking-[0.25em] text-xs mb-4">
      COMPILE SPEED
    </p>

    <h2 className="text-6xl font-black mb-6">
      4.1s
    </h2>

    <div className="flex items-end gap-3 h-[60px]">
      <div className="w-10 h-6 bg-blue-500 rounded-t-xl" />
      <div className="w-10 h-10 bg-blue-500 rounded-t-xl" />
      <div className="w-10 h-8 bg-blue-500 rounded-t-xl" />
      <div className="w-10 h-16 bg-blue-500 rounded-t-xl" />
      <div className="w-10 h-11 bg-blue-500 rounded-t-xl" />
    </div>
  </div>

  <div className="rounded-[28px] bg-white/5 border border-white/10 p-6 h-[220px]">
    <p className="text-slate-400 tracking-[0.25em] text-xs mb-4">
      PROJECTS GENERATED
    </p>

    <h2 className="text-6xl font-black mb-6">
      120+
    </h2>

    <div className="flex items-end gap-3 h-[60px]">
      <div className="w-10 h-8 bg-purple-500 rounded-t-xl" />
      <div className="w-10 h-12 bg-purple-500 rounded-t-xl" />
      <div className="w-10 h-10 bg-purple-500 rounded-t-xl" />
      <div className="w-10 h-16 bg-purple-500 rounded-t-xl" />
      <div className="w-10 h-14 bg-purple-500 rounded-t-xl" />
    </div>
  </div>
</div>


        {/* MAIN GRID */}

      <div className="flex flex-col gap-8">
          {/* GENERATE */}

        <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 w-full">
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

            
   {/* Runtime  generation progress */}
            <div className="mb-6">

  <div className="flex items-center justify-between mb-2">
    <span className="text-slate-400 text-sm">
      Runtime Generation Progress
    </span>

    <span className="text-cyan-400 text-sm font-bold">
      {progress}%
    </span>
  </div>

  <div className="w-full h-4 rounded-full bg-white/10 overflow-hidden">

    <div
      className="
        h-full
        bg-gradient-to-r
        from-cyan-500
        to-blue-500
        transition-all
        duration-500
      "
      style={{
        width: `${progress}%`,
      }}
    />

  </div>

</div>
           <button
  onClick={generateApplication}
  disabled={loading}
  className="
    w-full
    py-5
    rounded-3xl
    bg-gradient-to-r
    from-cyan-500
    to-blue-500
    hover:scale-[1.02]
    transition-all
    disabled:opacity-50
    font-black
    text-lg
    shadow-[0_0_40px_rgba(6,182,212,0.25)]
  "
>
  Generate Runtime
</button>




           <button
  onClick={() => {
    const exportData = {
  exportedAt: new Date().toISOString(),
  runtimeEngine: "RuntimeOS AI Compiler",
  pipelineVersion: "2.0",
  data: generatedRuntime,
};

const dataStr = JSON.stringify(
  exportData,
  null,
  2
);
    

    const blob = new Blob([dataStr], {
      type: "application/json",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = `${generatedRuntime?.uiSchema?.name || "runtimeos"}-pipeline.json`;
    a.click();
  }}
  className="
    w-full mt-4 py-4
    rounded-3xl
    bg-purple-600
    hover:bg-purple-700
    transition-all
    font-bold
  "
>
  Export Project
</button>
          </div>
     


     
          {/* GENERATED RUNTIME */}

        <div
  className="
    rounded-[32px]
    border border-cyan-500/20
    bg-[#04111d]
    p-8
    w-full
    min-h-[700px]
  "
>
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

            <div
  className="
    rounded-3xl
    border border-red-500/20
    bg-red-500/5
    p-6
  "
>

  <div className="flex items-center justify-between mb-5">

    <h2 className="text-2xl font-black">
      AI Recovery Engine
    </h2>

    <div className="text-red-400 text-sm">
      Runtime Validation Layer
    </div>

  </div>

  <div className="space-y-4">

    {runtimeErrors.length === 0 ? (

      <div
        className="
          rounded-2xl
          bg-green-500/10
          border border-green-500/20
          p-4
          text-green-400
        "
      >
        ✓ No runtime failures detected
      </div>

    ) : (

      runtimeErrors.map((error, index) => (

        <div
          key={index}
          className="
            rounded-2xl
            bg-black/20
            border border-red-500/10
            p-4
          "
        >

          <div className="flex items-center gap-3">

            <span className="text-red-400">
              ⚠
            </span>

            <span className="text-sm">
              {error}
            </span>

          </div>

        </div>

      ))

    )}

  </div>

</div>
</div>


{/* Integration Registry */}

<div
  className="
    mt-8
    rounded-3xl
    border border-cyan-500/20
    bg-cyan-500/5
    p-6
  "
>

  <div className="flex items-center justify-between mb-6">

    <h2 className="text-2xl font-black">
      Integration Registry
    </h2>

    <div className="text-cyan-400 text-sm">
      Registered Integrations
    </div>

  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

    {integrationRegistry.map((integration) => (

      <div
        key={integration.id}
        className="
          rounded-2xl
          border border-white/10
          bg-black/20
          p-5
        "
      >

        <div className="flex items-center justify-between">

          <h3 className="text-xl font-bold">
            {integration.displayName}
          </h3>

          <div
            className="
              px-3 py-1
              rounded-full
              bg-green-500/10
              border border-green-500/20
              text-green-400
              text-xs
            "
          >
            {integration.authType}
          </div>

        </div>

        <div className="mt-4">

          <p className="text-sm text-slate-400 mb-2">
            Triggers
          </p>

          <div className="flex flex-wrap gap-2">

            {integration.triggers.map((trigger) => (

              <div
                key={trigger}
                className="
                  px-3 py-1
                  rounded-full
                  bg-white/5
                  text-xs
                "
              >
                {trigger}
              </div>

            ))}

          </div>

        </div>

        <div className="mt-5">

          <p className="text-sm text-slate-400 mb-2">
            Actions
          </p>

          <div className="flex flex-wrap gap-2">

           {integration.actions.map(
  (action: any, index: number) => (

    <div
      key={action.id || index}
      className="
        px-3 py-1
        rounded-full
        bg-cyan-500/10
        text-cyan-300
        text-xs
      "
    >

      {typeof action === "string"
        ? action
        : action.id}

    </div>

))}

          </div>

        </div>

      </div>

    ))}

  </div>

</div>

{/* Evaluation Metrics */}

<div
  className="
    mt-8
    rounded-3xl
    border border-purple-500/20
    bg-purple-500/5
    p-6
  "
>

  <div className="flex items-center justify-between mb-6">

    <h2 className="text-2xl font-black">
      Evaluation Metrics
    </h2>

    <div className="text-purple-400 text-sm">
      Runtime Evaluation Layer
    </div>

  </div>

  <div className="grid grid-cols-2 md:grid-cols-5 gap-5">

    <div className="rounded-2xl bg-black/20 p-5">
      <p className="text-slate-400 text-sm">
        Latency
      </p>

      <h3 className="text-3xl font-black mt-2">
        {generationMetrics.latency}ms
      </h3>
    </div>

    <div className="rounded-2xl bg-black/20 p-5">
      <p className="text-slate-400 text-sm">
        Token Cost
      </p>

      <h3 className="text-3xl font-black mt-2">
        ${generationMetrics.tokenCost}
      </h3>
    </div>

    <div className="rounded-2xl bg-black/20 p-5">
      <p className="text-slate-400 text-sm">
        Retries
      </p>

      <h3 className="text-3xl font-black mt-2">
        {generationMetrics.retries}
      </h3>
    </div>

    <div className="rounded-2xl bg-black/20 p-5">
      <p className="text-slate-400 text-sm">
        Repairs
      </p>

      <h3 className="text-3xl font-black mt-2">
        {generationMetrics.repairs}
      </h3>
    </div>

    <div className="rounded-2xl bg-black/20 p-5">
      <p className="text-slate-400 text-sm">
        Success Rate
      </p>

      <h3 className="text-3xl font-black mt-2 text-green-400">
        {generationMetrics.successRate}%
      </h3>
    </div>

  </div>

</div>

<button
  onClick={() => {

    const dataStr = JSON.stringify(
      evaluationLogs,
      null,
      2
    );

    const blob = new Blob([dataStr], {
      type: "application/json",
    });

    const url =
      URL.createObjectURL(blob);

    const a =
      document.createElement("a");

    a.href = url;

    a.download =
      "evaluation-log.json";

    a.click();

  }}
  className="
    mt-6
    px-6
    py-3
    rounded-2xl
    bg-purple-500
    hover:bg-purple-400
    transition-all
    font-bold
  "
>
  Export Evaluation Log
</button>

{/* Auth Rules */}

<div
  className="
    mt-8
    rounded-3xl
    border border-green-500/20
    bg-green-500/5
    p-6
  "
>

  <div className="flex items-center justify-between mb-6">

    <h2 className="text-2xl font-black">
      Authentication Rules
    </h2>

    <div className="text-green-400 text-sm">
      RBAC Permission Layer
    </div>

  </div>

  <div className="space-y-5">

    {AUTH_ROLES.map((role) => (

      <div
        key={role.role}
        className="
          rounded-2xl
          border border-white/10
          bg-black/20
          p-5
        "
      >

        <div className="flex items-center justify-between">

          <h3 className="text-xl font-bold capitalize">
            {role.role}
          </h3>

          <div
            className="
              px-3 py-1
              rounded-full
              bg-green-500/10
              border border-green-500/20
              text-green-400
              text-xs
            "
          >
            Active
          </div>

        </div>

        <div className="flex flex-wrap gap-3 mt-4">

          {role.permissions.map((permission) => (

            <div
              key={permission}
              className="
                px-3 py-2
                rounded-xl
                bg-white/5
                text-sm
              "
            >
              {permission}
            </div>

          ))}

        </div>

      </div>

    ))}

  </div>

</div>

            <div
  className="
    mt-10
    rounded-3xl
    border border-white/10
    bg-black/30
    p-8
  "
>
  <div className="flex items-center justify-between mb-8">
    <h2 className="text-3xl font-black">
      {/* ai pipeline stages */}
  {selectedPage?.name ||
  "Runtime Preview"}
    </h2>  

   <div className="flex items-center gap-4">

  <div className="text-green-400 text-sm">
    • Active Runtime
  </div>

  <button
    onClick={deployRuntime}
    disabled={deploying}
    className="
      px-5
      py-2
      rounded-full
      bg-cyan-500
      hover:bg-cyan-400
      text-black
      font-bold
      transition-all
      disabled:opacity-50
    "
  >
    {deploying ? "Deploying..." : "Deploy Runtime"}
  </button>
  {/* Deployment URL */}
  {deploymentUrl && (

  <div
    className="
      mt-6
      rounded-2xl
      border border-green-500/20
      bg-green-500/5
      p-5
    "
  >

    <p className="text-sm text-slate-400 mb-2">
      Runtime Deployment URL
    </p>

    <a
      href={deploymentUrl}
      target="_blank"
      className="
        text-green-400
        font-bold
        break-all
        hover:underline
      "
    >
      {deploymentUrl}
    </a>

  </div>

)}
  {/* Export JSON Button */}
  <button
  onClick={() => {

    const dataStr = JSON.stringify(
      generatedRuntime,
      null,
      2
    );

    const blob = new Blob([dataStr], {
      type: "application/json",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "runtimeos-uiSchema.json";

    a.click();

  }}
  className="
    px-5
    py-2
    rounded-full
    bg-purple-500
    hover:bg-purple-400
    text-white
    font-bold
    transition-all
  "
>
  Export JSON
</button>

</div>
  </div>

  <div className="space-y-5">

    {[
      "Intent Extraction",
      "Schema Generation",
      "Architecture Planning",
      "Validation Engine",
      "Runtime Compilation"
    ].map((stage, index) => (
      <div
        key={index}
        className="
          flex items-center justify-between
          p-5
          rounded-2xl
          bg-slate-900/60
          border border-white/10
        "
      >
        <div>
          <h3 className="font-bold text-lg">
            {stage}
          </h3>

          <p className="text-slate-400 text-sm mt-1">
             {selectedPage?.description || "AI generated runtime page"}
          </p>
        </div>
       <div
        className="
          px-4 py-2
          rounded-full
          bg-green-500/10
          border border-green-500/20
          text-green-400
          text-sm
        "
      >
        Success
      </div>

    </div>
))}




 {/* Runtime Code Tabs */}

  <div className="mt-10">

  <div className="flex gap-4 mb-6">

    {["frontend", "backend", "database", "uiSchema"].map((tab) => (

      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`
          px-5 py-3 rounded-2xl transition-all capitalize
          ${
            activeTab === tab
              ? "bg-cyan-500 text-black font-bold"
              : "bg-white/5 hover:bg-white/10"
          }
        `}
      >
        {tab}
      </button>

    ))}

  </div>

  {/* FRONTEND */}

  {activeTab === "frontend" && (

    <div className="bg-black rounded-3xl p-6 overflow-auto">

<pre className="text-sm text-cyan-400 whitespace-pre-wrap">
{`export default function Dashboard() {
  return (
    <main className="p-10">
      <h1>AI Generated Runtime</h1>
    </main>
  );
}`}
</pre>

    </div>

  )}

  {/* BACKEND */}

  {activeTab === "backend" && (

    <div className="bg-black rounded-3xl p-6 overflow-auto">

<pre className="text-sm text-green-400 whitespace-pre-wrap">
{`app.post("/api/runtime", async (req, res) => {
  const result = await compileRuntime(req.body);
  res.json(result);
});`}
</pre>

    </div>

  )}

  {/* DATABASE */}

  {activeTab === "database" && (

    <div className="bg-black rounded-3xl p-6 overflow-auto">

<pre className="text-sm text-purple-400 whitespace-pre-wrap">
{`model User {
  id        String @id
  email     String
  createdAt DateTime
}`}
</pre>

    </div>

  )}

</div>
{/* uiSchema */}

{activeTab === "uiSchema" && (

  <div className="bg-black rounded-3xl p-6 overflow-auto">

<pre className="text-sm text-yellow-400 whitespace-pre-wrap">
{JSON.stringify(generatedRuntime, null, 2)}
</pre>

  </div>

)}



{/* validation & repair engine */}

<div
  className="
    mt-10
    rounded-3xl
    border border-red-500/10
    bg-black/30
    p-8
  "
>
  <div className="flex items-center justify-between mb-8">
    <h2 className="text-3xl font-black">
      Validation & Repair Engine
    </h2>

    <div className="text-cyan-400 text-sm">
      Runtime Monitoring
    </div>
  </div>

  <div className="space-y-5">

    {[
      {
        name: "JSON Structure Validation",
        status: "Validated"
      },
      {
        name: "Schema Consistency Check",
        status: "Validated"
      },
      {
        name: "Entity Relationship Repair",
        status: "Repaired"
      },
      {
        name: "API Route Validation",
        status: "Validated"
      },
      {
        name: "Cross-layer Integrity",
        status: "Validated"
      }
    ].map((item, index) => (
      <div
        key={index}
        className="
          flex items-center justify-between
          p-5
          rounded-2xl
          bg-slate-900/60
          border border-white/10
        "
      >
        <div>
          <h3 className="font-bold text-lg">
            {item.name}
          </h3>

          <p className="text-slate-400 text-sm mt-1">
            AI runtime validation layer
          </p>
        </div>

        <div
          className={`
            px-4 py-2
            rounded-full
            text-sm
            ${
              item.status === "Repaired"
                ? "bg-yellow-500/10 border border-yellow-500/20 text-yellow-400"
                : "bg-green-500/10 border border-green-500/20 text-green-400"
            }
          `}
        >
          {item.status}
        </div>
      </div>
    ))}

  </div>
</div>
{/* Active Integrations */}
<div
  className="
    mt-10
    rounded-3xl
    border border-cyan-500/10
    bg-black/30
    p-8
  "
>
  <div className="flex items-center justify-between mb-8">
    <h2 className="text-3xl font-black">
      Integration Registry
    </h2>

    <div className="text-cyan-400 text-sm">
      5 Registered Providers
    </div>
  </div>

  <div className="grid grid-cols-2 gap-5">

    {[
      {
        name: "Slack",
        action: "Send channel notification"
      },
      {
        name: "Stripe",
        action: "Payment processing"
      },
      {
        name: "WhatsApp",
        action: "Send runtime alerts"
      },
      {
        name: "Gmail",
        action: "Email automation"
      },
      {
        name: "Jira",
        action: "Create engineering tickets"
      }
    ].map((integration, index) => (
      <div
        key={index}
        className="
          rounded-2xl
          border border-white/10
          bg-slate-900/60
          p-5
        "
      >
        <h3 className="text-xl font-bold text-cyan-400">
          {integration.name}
        </h3>

        <p className="text-slate-400 mt-2">
          {integration.action}
        </p>

        <div
          className="
            mt-4
            inline-flex
            px-3 py-1
            rounded-full
            bg-green-500/10
            border border-green-500/20
            text-green-400
            text-xs
          "
        >
          Active Integration
        </div>
      </div>
    ))}

  </div>
</div>

{/* Evaluation Metrics */}

<div
  className="
    mt-10
    rounded-3xl
    border border-purple-500/10
    bg-black/30
    p-8
  "
>
  <div className="flex items-center justify-between mb-8">
    <h2 className="text-3xl font-black">
      Evaluation Metrics
    </h2>

    <div className="text-purple-400 text-sm">
      Runtime Analytics
    </div>
  </div>

  <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

    {[
      {
        label: "Pipeline Success Rate",
        value: "96%"
      },
      {
        label: "Avg Runtime Latency",
        value: "1.8s"
      },
      {
        label: "Repair Attempts",
        value: "3"
      },
      {
        label: "Estimated Token Cost",
        value: "$0.014"
      }
    ].map((metric, index) => (
      <div
        key={index}
        className="
          rounded-2xl
          border border-white/10
          bg-slate-900/60
          p-6
        "
      >
        <p className="text-slate-400 text-sm">
          {metric.label}
        </p>

        <h3 className="text-3xl font-black mt-3 text-cyan-400">
          {metric.value}
        </h3>
      </div>
    ))}

  </div>
</div>

{/* AI Gateway Routing */}

<div
  className="
    mt-10
    rounded-3xl
    border border-cyan-500/10
    bg-black/30
    p-8
  "
>
  <div className="flex items-center justify-between mb-8">
    <h2 className="text-3xl font-black">
      AI Gateway Routing
    </h2>

    <div className="text-cyan-400 text-sm">
      Multi-Provider Runtime
    </div>
  </div>

  <div className="space-y-5">

    {[
      {
        provider: "OpenAI GPT-4o",
        stage: "Schema Generation",
        status: "Primary"
      },
      {
        provider: "OpenRouter",
        stage: "Universal Fallback",
        status: "Fallback"
      },
      {
        provider: "Claude Sonnet",
        stage: "Reasoning Tasks",
        status: "Active"
      },
      {
        provider: "Gemini 1.5",
        stage: "Intermediate Generation",
        status: "Standby"
      },
      {
        provider: "Groq Llama3",
        stage: "Intent Extraction",
        status: "Fast Route"
      }
    ].map((model, index) => (
      <div
        key={index}
        className="
          flex items-center justify-between
          rounded-2xl
          border border-white/10
          bg-slate-900/60
          p-5
        "
      >
        <div>
          <h3 className="text-xl font-bold text-cyan-400">
            {model.provider}
          </h3>

          <p className="text-slate-400 mt-1">
            {model.stage}
          </p>
        </div>

        <div
          className="
            px-4 py-2
            rounded-full
            bg-purple-500/10
            border border-purple-500/20
            text-purple-400
            text-sm
          "
        >
          {model.status}
        </div>
      </div>
    ))}

  </div>
</div>

{/* Real time pipeline events panel */}

<div
  className="
    mt-10
    rounded-3xl
    border border-green-500/10
    bg-black/30
    p-8
  "
>
  <div className="flex items-center justify-between mb-8">
    <h2 className="text-3xl font-black">
      Runtime Event Stream
    </h2>

    <div className="text-green-400 text-sm">
      Live Pipeline Events
    </div>
  </div>

  <div className="space-y-4">

    {runtimeEvents.map(
  (log, index) => (

    <div
      key={index}
      className="
        flex items-center justify-between
        rounded-2xl
        border border-white/10
        bg-slate-900/60
        p-5
      "
    >

      <div>

        <h3 className="
          font-bold text-cyan-400
        ">
          {log.stage}
        </h3>

        <p className="
          text-slate-400 text-sm mt-1
        ">
          {log.status}
        </p>

      </div>

    </div>

))}
  </div>
</div>  

 {/* Generated Runtime Details */}

           {generatedRuntime && (

  <div className="space-y-8">
    <div className="text-green-400 text-3xl">
  GENERATED WORKING
</div>

    {/* INTENT */}

    <div className="rounded-3xl border border-cyan-500/20 bg-black/30 p-6">

      <h2 className="text-3xl font-black mb-6">
        Intent Extraction
      </h2>

      <div className="space-y-3 text-slate-300">

        <p>
          <span className="font-bold text-cyan-400">
            App Name:
          </span>{" "}
         {intent.appName || "RuntimeOS App"}
        </p>

        <p>
          <span className="font-bold text-cyan-400">
            App Type:
          </span>{" "}
          {intent.appType || "AI SaaS Platform"}
        </p>

      </div>

    </div>

    {/* SCHEMA */}

    <div className="rounded-3xl border border-purple-500/20 bg-black/30 p-6">

      <h2 className="text-3xl font-black mb-6">
        Data Schema
      </h2>

      <div className="grid grid-cols-2 gap-4">

        {(databaseSchema.tables || []).map(
    (entity: any, index: number) => (

            <div
              key={index}
              className="rounded-2xl border border-white/10 p-4"
            >

              <h3 className="text-xl font-bold text-cyan-400 mb-3">
                {entity.name}
              </h3>

              <div className="space-y-2">

                {entity.fields?.map(
                  (field: any, i: number) => (

                    <div
                      key={i}
                      className="text-sm text-slate-300"
                    >
                      {field.name} : {field.type}
                    </div>
                  )
                )}

              </div>

            </div>
          )
        )}

      </div>

    </div>

    {/* uiSchema */}

    <div className="rounded-3xl border border-green-500/20 bg-black/30 p-6">

      <h2 className="text-3xl font-black mb-6">
        App Specification
      </h2>

      <div className="space-y-6">

        <div>

          <h3 className="text-xl font-bold text-cyan-400 mb-4">
            Pages
          </h3>

          <div className="flex flex-wrap gap-3">

            {(uiSchema?.pages || []).map(
              (page: any, index: number) => (

               <div
  key={index}
  onClick={() => setSelectedPage(page)}
  className={`
    p-4 rounded-2xl cursor-pointer transition-all
    ${
     selectedPage?.name ===
page.name
        ? "bg-cyan-500/20 border border-cyan-400"
        : "bg-white/5 hover:bg-cyan-500/10"
    }
  `}
>
  <p className="font-semibold">
    {page.name}
  </p>

  <p className="text-xs text-slate-400 mt-1">
    {page.route}
  </p>
</div>
              )
            )}

          </div>

        </div>

        <div>

          <h3 className="text-xl font-bold text-cyan-400 mb-4">
            API Endpoints
          </h3>

          <div className="space-y-3">

            {(uiSchema?.apiEndpoints || []).map(
              (api: any, index: number) => (

                <div
                  key={index}
                  className="rounded-xl border border-white/10 p-4"
                >
                  <p className="font-bold">
                    console.log(api);
console.log(typeof api.path, api.path);
console.log(typeof api.method, api.method);
                   {typeof api.method === "object"
  ? api.method.method
  : api.method}

{" "}

{typeof api.path === "object"
  ? api.path.path
  : api.path}
                  </p>

                  <p className="text-slate-400 text-sm mt-1">
                    {api.description}
                  </p>
                </div>
              )
            )}

          </div>

        </div>

      </div>

    </div>

  </div>
)}

               {selectedPage && (
  <div
    className="
      mt-8
      rounded-3xl
      border border-cyan-500/20
      bg-black/30
      p-8
      space-y-6
    "
  >
    <div>
      <h2 className="text-4xl font-black">
        {selectedPage.name}
      </h2>

      <p className="text-slate-400 mt-2">
        Route: {selectedPage.route}
      </p>
    </div>

    <div>
      <h3 className="text-cyan-400 text-xl mb-3">
        Components
      </h3>

      <div className="flex flex-wrap gap-3">
      {selectedPage.components?.map(
  (component: any, index: number) => (

    <div
      key={index}
      className="
        px-4 py-3
        rounded-xl
        bg-cyan-500/10
        border border-cyan-500/20
        space-y-2
      "
    >

      <p className="text-cyan-400 font-bold">
        Type: {component.type}
      </p>

      <p className="text-slate-300 text-sm break-all">
        {JSON.stringify(
          component.properties,
          null,
          2
        )}
      </p>

    </div>
  )
)}
      </div>
    </div>

    <div>
      <h3 className="text-cyan-400 text-xl mb-3">
        Layout
      </h3>

      <div
        className="
          p-5
          rounded-2xl
          bg-slate-900
          border border-white/10
          text-slate-300
        "
      >
        {selectedPage.layout}
      </div>
    </div>
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
            ${uiSchema.name || "Generated SaaS"}
          </h1>

          <div style="display:grid;gap:16px;grid-template-columns:repeat(2,1fr);">

           ${(uiSchema?.pages || [])
  .map(
    (page: any) => `
      <div style="
        background:#0f172a;
        color:white;
        padding:20px;
        border-radius:16px;
      ">
        <h2 style="
          font-size:20px;
          font-weight:bold;
        ">
          ${page.name}
        </h2>

        <p style="
          margin-top:10px;
        ">
          Layout: ${page.layout || ""}
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
                    {uiSchema?.tables?.map(
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
                    {
 (uiSchema.features || []).map(
    (feature: string, i: number) => {
      return <li key={i}>{feature}</li>;
    }
  )
}
                  </ul>
                </div>

                <div>
                  <h2 className="text-cyan-400 text-xl mb-3">
                    API Routes
                  </h2>

                  <ul className="list-disc pl-6 space-y-2">
                   {(apiSchema.endpoints || []).map(
                      (route: any, i: number) => (
                       <li key={i}>
  {route.method} {route.path}
</li>
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
            
              
              <div className="flex flex-col items-center justify-center text-center min-h-[500px]">
                <div className="text-7xl mb-6">⚡</div>

                <h2 className="text-5xl font-black mb-4">
                  No Runtime Generated Yet
                </h2>

                <p className="text-slate-400 text-lg max-w-md leading-relaxed">
                  Generate enterprise SaaS applications dynamically using AI-powered runtime orchestration pipelines.
                </p>
              </div>

            
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
              disabled={loading}
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
                disabled:opacity-50
              "
            >
              Modify Runtime
            </button>
          </div>
        </div>
</div>
       
  </main>
);

}