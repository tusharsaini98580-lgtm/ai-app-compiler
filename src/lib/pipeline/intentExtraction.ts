import { callOpenRouter } from "../ai/openrouter";

import { MODEL_ROUTING } from "../config/modelRouting";

export async function intentExtraction(
  prompt: string
) {

  const raw = await callOpenRouter({
    model:
      MODEL_ROUTING.intentExtraction.primary,

    prompt: `
Extract structured AppIntent.

Return JSON only.

Prompt:
${prompt}

Format:
{
  "appName": "",
  "appType": "",
  "features": [],
  "entities": [],
  "integrations_requested": [],
  "assumptions": []
}
`,
  });

  try {

    const parsed = JSON.parse(
      raw.replace(/```json/g, "")
        .replace(/```/g, "")
        .trim()
    );

    if (
      !parsed.entities ||
      parsed.entities.length === 0
    ) {

      parsed.entities = [
        "User",
        "Dashboard",
        "Analytics",
      ];

    }

    if (
      !parsed.features ||
      parsed.features.length === 0
    ) {

      parsed.features = [
        "Authentication",
        "Dashboard",
      ];

    }

    console.log("INTENT:", parsed);

    return {
      appName:
        parsed.appName || "RuntimeOS App",

      appType:
        parsed.appType || "Application",

      features:
        parsed.features || [],

      entities:
        parsed.entities || [],

      integrations_requested:
        parsed.integrations_requested || [],

      assumptions:
        parsed.assumptions || [],
    };

  } catch (error) {

    console.error(
      "Intent Extraction Failed:",
      error
    );

    return {

      appName: "RuntimeOS App",

      appType: "Application",

      features: [
        "Authentication",
        "Dashboard",
      ],

      entities: [
        "User",
        "Analytics",
      ],

      integrations_requested: [],

      assumptions: [],
    };

  }

}