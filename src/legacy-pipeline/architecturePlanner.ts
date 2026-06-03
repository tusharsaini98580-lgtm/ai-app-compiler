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

export async function architecturePlanner(
  intent: any
) {

  try {

    const prompt = `

You are an expert software architect.

Convert the user intent into a clean application architecture plan.

Return ONLY valid JSON.

Required structure:

{
  "pages": [
    {
      "name": "Dashboard",
      "purpose": "Main overview page"
    }
  ],

  "roles": [
    "Admin",
    "User"
  ],

  "modules": [
    "Authentication",
    "Analytics"
  ],

  "dataFlows": [
    {
      "source": "Form",
      "destination": "Database",
      "description": "Stores records"
    }
  ]
}

Intent:

${JSON.stringify(
  intent,
  null,
  2
)}

Do NOT explain anything.
Return ONLY pure JSON.

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

    return {

      pages:
        parsed.pages || [],

      roles:
        parsed.roles || [],

      modules:
        parsed.modules || [],

      dataFlows:
        parsed.dataFlows || [],
    };

  } catch (error) {

    console.error(
      "Architecture planning failed:",
      error
    );

    return {

      pages: [
        {
          name:
            "Dashboard",

          purpose:
            "Main application page",
        },
      ],

      roles: [
        "Admin",
        "User",
      ],

      modules: [
        "Dashboard",
      ],

      dataFlows: [],
    };
  }
}