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

export async function schemaGenerator(
  architecture: any
) {

  try {

    const prompt = `

You are an AI application schema generator.

Convert the architecture into a clean JSON schema.

Return ONLY valid JSON.

Required structure:

{
  "uiSchema": {
    "pages": [
      {
        "name": "Dashboard",
        "components": [
          {
            "type": "text",
            "properties": {
              "text": "Welcome"
            }
          }
        ]
      }
    ]
  },

  "apiSchema": {
    "endpoints": [
      {
        "path": "/api/data",
        "method": "GET"
      }
    ]
  },

  "databaseSchema": {
    "tables": [
      {
        "name": "users",
        "columns": [
          {
            "name": "id",
            "type": "Int"
          }
        ]
      }
    ]
  },

  "authSystem": {
    "enabled": true,
    "roles": [
      "Admin",
      "User"
    ]
  }
}

Architecture:

${JSON.stringify(
  architecture,
  null,
  2
)}

Rules:
- Keep schema lightweight
- Use valid JSON only
- No explanations
- No markdown
- No comments

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

      uiSchema:
        parsed.uiSchema || {
          pages: [],
        },

      apiSchema:
        parsed.apiSchema || {
          endpoints: [],
        },

      databaseSchema:
        parsed.databaseSchema || {
          tables: [],
        },

      authSystem:
        parsed.authSystem || {
          enabled: false,
          roles: [],
        },

    };

  } catch (error) {

    console.error(
      "Schema generation failed:",
      error
    );

    return {

      uiSchema: {

        pages: [
          {
            name:
              "Dashboard",

            components: [
              {
                type:
                  "text",

                properties: {
                  text:
                    "Welcome to AI App Compiler",
                },
              },
            ],
          },
        ],

      },

      apiSchema: {
        endpoints: [],
      },

      databaseSchema: {
        tables: [],
      },

      authSystem: {

        enabled: false,

        roles: [
          "Admin",
          "User",
        ],

      },

    };

  }

}