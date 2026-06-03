import { groqModel }
  from "../lib/gemini";

function cleanJSON(
  text: string
) {

  return text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
}

export async function extractIntent(
  userPrompt: string
) {

  try {

    const prompt = `

You are an AI intent extraction system.

Convert the user request into structured JSON.

Return ONLY valid JSON.

Required structure:

{
  "appType": "string",

  "features": [
    "string"
  ],

  "roles": [
    "string"
  ],

  "entities": [
    "string"
  ],

  "assumptionsMade": [
    "string"
  ]
}

User Request:

${userPrompt}

Rules:
- If request is vague, make smart assumptions
- Include standard features
- Keep output lightweight
- No explanations
- No markdown
- Return only JSON

`;

    const result =
      await groqModel.generateContent(
        prompt
      );

    const response =
      await result.response;

    const text =
      response.text();

    const cleaned =
      cleanJSON(text);

    const parsed =
      JSON.parse(cleaned);

    // =========================
    // SAFE FALLBACKS
    // =========================

    return {

      appType:
        parsed.appType ||
        "Management System",

      features:
        Array.isArray(
          parsed.features
        ) &&
        parsed.features.length > 0

          ? parsed.features

          : [
              "Dashboard",
              "Authentication",
              "Data Management",
            ],

      roles:
        Array.isArray(
          parsed.roles
        ) &&
        parsed.roles.length > 0

          ? parsed.roles

          : [
              "Admin",
              "User",
            ],

      entities:
        Array.isArray(
          parsed.entities
        ) &&
        parsed.entities.length > 0

          ? parsed.entities

          : [
              "users",
              "records",
            ],

      assumptionsMade:
        Array.isArray(
          parsed.assumptionsMade
        )

          ? parsed.assumptionsMade

          : [],
    };

  } catch (error) {

    console.error(
      "Intent extraction failed:",
      error
    );

    return {

      appType:
        "Management System",

      features: [
        "Dashboard",
        "Authentication",
      ],

      roles: [
        "Admin",
        "User",
      ],

      entities: [
        "users",
        "records",
      ],

      assumptionsMade: [
        "Used default fallback intent",
      ],
    };
  }
}