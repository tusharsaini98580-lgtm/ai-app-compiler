import OpenAI from "openai";

// =========================
// GROQ API KEY
// =========================

const apiKey =
  process.env.GROQ_API_KEY;

if (!apiKey) {

  throw new Error(
    "Missing GROQ_API_KEY in .env.local"
  );

}

// =========================
// GROQ CLIENT
// =========================

export const client =
  new OpenAI({

    baseURL:
      "https://api.groq.com/openai/v1",

    apiKey,

  });

// =========================
// DEFAULT MODEL WRAPPER
// =========================

export const groqModel = {

  async generateContent(
    prompt: string
  ) {

    const completion =
      await client.chat.completions.create({

        model:
          "llama-3.3-70b-versatile",

        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],

        temperature: 0.3,

        max_tokens: 2048,

      });

    return {

      response: {

        text: () =>

          completion
            .choices[0]
            ?.message
            ?.content || "",

      },

    };

  },

};