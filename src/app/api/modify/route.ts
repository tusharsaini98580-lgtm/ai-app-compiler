
import { NextResponse } from "next/server";

import {
  groqModel,
} from "../../../lib/gemini";

// =========================
// CLEAN JSON
// =========================

function cleanJSON(
  text: string
) {

  return text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
}

// =========================
// MODIFY ROUTE
// =========================

export async function POST(
  req: Request
) {

  try {

    // =========================
    // REQUEST BODY
    // =========================

    const body =
      await req.json();

    const {
      currentSchema,
      prompt,
    } = body;

    // =========================
    // VALIDATION
    // =========================

    if (!currentSchema) {

      return NextResponse.json(
        {
          success: false,
          error:
            "Missing current schema",
        },
        {
          status: 400,
        }
      );
    }

    if (
      !prompt ||
      typeof prompt !==
        "string"
    ) {

      return NextResponse.json(
        {
          success: false,
          error:
            "Missing prompt",
        },
        {
          status: 400,
        }
      );
    }

    // =========================
    // PROMPT
    // =========================

    const promptText = `

You are an AI application editor.

Modify the existing application schema.

Rules:
- Return ONLY valid JSON
- No markdown
- No explanations
- Preserve structure
- Preserve uiSchema
- Preserve apiSchema
- Preserve databaseSchema
- Preserve authSystem

Current Schema:

${JSON.stringify(
  currentSchema,
  null,
  2
)}

User Request:

${prompt}

`;

    // =========================
    // AI GENERATION
    // =========================

    const result =
      await groqModel.generateContent(
        promptText
      );

    const response =
      await result.response;

    const text =
      response.text();

    const cleaned =
      cleanJSON(text);

    // =========================
    // PARSE JSON
    // =========================

    let updatedSchema;

    try {

      updatedSchema =
        JSON.parse(
          cleaned
        );

    } catch (error) {

      console.error(
        "JSON parse failed:",
        error
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "Invalid AI JSON output",
        },
        {
          status: 500,
        }
      );
    }

    // =========================
    // SAFE FALLBACKS
    // =========================

    updatedSchema = {

      uiSchema:
        updatedSchema?.uiSchema ||

        currentSchema?.uiSchema ||

        {
          pages: [],
        },

      apiSchema:
        updatedSchema?.apiSchema ||

        currentSchema?.apiSchema ||

        {
          endpoints: [],
        },

      databaseSchema:
        updatedSchema?.databaseSchema ||

        currentSchema?.databaseSchema ||

        {
          tables: [],
        },

      authSystem:
        updatedSchema?.authSystem ||

        currentSchema?.authSystem ||

        {
          enabled: false,

          roles: [
            "Admin",
            "User",
          ],
        },
    };

    // =========================
    // SUCCESS
    // =========================

    return NextResponse.json({

      success: true,

      schema:
        updatedSchema,
    });

  } catch (error) {

    console.error(
      "Modify route failed:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          "Internal server error",
      },
      {
        status: 500,
      }
    );
  }
}

