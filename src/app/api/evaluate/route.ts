import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const prompt = body.prompt;

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",

        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:3000",
          "X-Title": "RuntimeOS",
        },

        body: JSON.stringify({
          model: "openai/gpt-3.5-turbo",

          temperature: 0.7,

          max_tokens: 2500,

          messages: [
            {
              role: "system",

              content: `
You are an elite AI SaaS compiler.

You generate REAL enterprise applications.

You ONLY return valid JSON.

Never return markdown.
Never return explanations.
Never return triple backticks.

Generate realistic:
- CRM systems
- SaaS dashboards
- ERP systems
- Hospital systems
- School systems
- HR platforms
- Analytics dashboards

The JSX must be REAL React + Tailwind UI.
`,
            },

            {
              role: "user",

              content: `
Build a production-ready SaaS app for:

"${prompt}"

Return ONLY valid JSON in this EXACT structure:

{
  "title": "",
  "description": "",
  "features": [],
  "pages": [
    {
      "name": "",
      "route": "",
      "description": ""
    }
  ],
  "databaseTables": [],
  "apiRoutes": [],
  "components": [],
  "jsx": ""
}

Rules:

- title should be realistic
- pages must be real SaaS pages
- databaseTables must be production-grade
- apiRoutes must be REST API routes
- features must be enterprise-level
- jsx must contain REAL React + Tailwind dashboard UI
- jsx must NOT contain markdown
- jsx must NOT contain triple backticks
`,
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();

      console.error("OPENROUTER ERROR:", errorText);

      return NextResponse.json(
        {
          error: "OpenRouter request failed",
          details: errorText,
        },
        { status: 500 }
      );
    }

    const data = await response.json();

    const rawContent =
      data?.choices?.[0]?.message?.content || "{}";

    const cleanedContent = rawContent
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    let parsed;

    try {
      parsed = JSON.parse(cleanedContent);
    } catch (parseError) {
      console.error("JSON PARSE ERROR:", parseError);

      return NextResponse.json(
        {
          error: "Invalid AI JSON response",
          raw: cleanedContent,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(parsed);

  } catch (error: any) {
    console.error("SERVER ERROR:", error);

    return NextResponse.json(
      {
        error: "Runtime generation failed",
        details: error.message,
      },
      { status: 500 }
    );
  }
}