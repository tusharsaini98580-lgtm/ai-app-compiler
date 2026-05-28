import { client } from "../lib/gemini";

function sleep(ms: number) {
  return new Promise((resolve) =>
    setTimeout(resolve, ms)
  );
}

export async function extractIntent(userPrompt: string) {
  const prompt = `
You are an AI system compiler.

Extract the app intent into STRICT JSON.

Return ONLY valid JSON.

Schema:
{
  "appType": "",
  "features": [],
  "roles": [],
  "entities": []
}

User Request:
${userPrompt}
`;

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      console.log(`Attempt ${attempt}`);

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

      console.log("FULL COMPLETION:");
      console.log(completion);

      const text =
        completion.choices[0].message.content;

      console.log("TEXT:");
      console.log(text);

      if (!text) {
        throw new Error("Empty response");
      }

     const cleanedText = text
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();

return JSON.parse(cleanedText);
    } catch (error: any) {
      console.error("REAL ERROR:");
      console.error(error);

      await sleep(3000);
    }
  }

  return {
    success: false,
    error: "Max retries exceeded",
  };
}