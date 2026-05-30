import OpenAI from "openai";

const apiKey =
  process.env.OPENROUTER_API_KEY;

if (!apiKey) {
  throw new Error(
    "Missing OPENROUTER_API_KEY in .env.local"
  );
}

export const client =
  new OpenAI({
    baseURL:
      "https://openrouter.ai/api/v1",

    apiKey,
  });

export const geminiModel = {
  async generateContent(
    prompt: string
  ) {
    const completion =
      await client.chat.completions.create(
        {
          model:
            "openai/gpt-4o-mini",

          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
        }
      );

    return {
      response: {
        text: () =>
          completion
            .choices[0]
            .message.content || "",
      },
    };
  },
};