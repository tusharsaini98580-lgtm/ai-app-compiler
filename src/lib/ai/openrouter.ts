import OpenAI from "openai";

// =========================
// GROQ CLIENT
// =========================

const client =
  new OpenAI({

    apiKey:
      process.env.GROQ_API_KEY,

    baseURL:
      "https://api.groq.com/openai/v1",

  });

// =========================
// CALL GROQ
// =========================

export async function callOpenRouter({

  model,

  prompt,

}: {

  model: string;

  prompt: string;

}) {

  const completion =
    await client.chat.completions.create({

      model:
        model ||
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

  return (

    completion
      ?.choices?.[0]
      ?.message?.content ||

    "{}"

  );

}