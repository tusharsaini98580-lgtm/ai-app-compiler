import { NextResponse } from "next/server";

import {
  compileApplication,
} from "../../../legacy-pipeline/compiler";

export async function POST(
  req: Request
) {
  try {

    const body =
      await req.json();

    // =========================
    // REQUEST DATA
    // =========================

    const prompt =
      body.prompt || "";

    const existingRuntime =
      body.existingRuntime || null;

    const mode =
      body.mode || "generate";

    // =========================
    // INTENT
    // =========================

    const intent = {
      appName: "AI RuntimeOS",

      appType:
        "Enterprise SaaS",

      features: [
        "Authentication",
        "Dashboard",
        "Analytics",
        "Workflow Automation",
      ],
    };

    // =========================
    // COMPILE APPLICATION
    // =========================

   const compiled =
  await compileApplication({

    prompt,

    existingRuntime,

    mode,

  });

    // =========================
    // RESPONSE
    // =========================

    return NextResponse.json({

      success: true,

      intent,

      ...compiled,

      generatedCode: {

        frontend:
`export default function Dashboard() {
  return (
    <main className="p-10">
      <h1>AI Runtime Dashboard</h1>
    </main>
  );
}`,

        backend:
`app.post("/api/runtime", async (req, res) => {
  res.json({ success: true });
});`,

        database:
`model User {
  id String @id
  email String
}`,

        appspec:
JSON.stringify(
  compiled,
  null,
  2
),

      },

      deployment: {

        status: "ready",

        provider: "vercel",

      },

    });

  } catch (error: any) {

    console.error(error);

    return NextResponse.json(

      {
        success: false,

        error:
          error?.message ||
          "Internal server error",
      },

      {
        status: 500,
      }

    );
  }
}