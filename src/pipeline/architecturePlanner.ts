import { client } from "../lib/gemini";

function sleep(ms: number) {
  return new Promise((resolve) =>
    setTimeout(resolve, ms)
  );
}

export async function architecturePlanner(
  intent: any
) {
  const prompt = `
You are a senior software architect.

Convert this app intent into structured architecture.

Return ONLY valid JSON.

Schema:
{
  "pages": [],
  "roles": [],
  "modules": [],
  "dataFlows": []
}

Intent:
${JSON.stringify(intent)}
`;

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      console.log(
        `Architecture attempt ${attempt}`
      );

      const completion =
        await client.chat.completions.create({
          model: "openai/gpt-4o-mini",
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
        });

      const text =
        completion.choices[0].message.content;

      console.log(
        "ARCHITECTURE RESPONSE:"
      );
      console.log(text);

      if (!text) {
        throw new Error(
          "Empty architecture response"
        );
      }

      const cleanedText = text
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();

return JSON.parse(cleanedText);
    } catch (error) {
      console.error(
        "Architecture planning failed:",
        error
      );

      await sleep(3000);
    }
  }

  return {
    success: false,
    error: "Architecture planner failed",
  };
}