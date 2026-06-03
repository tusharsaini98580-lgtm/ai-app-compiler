import { groq }
  from "../groq";

import { AppIntent }
  from "../types/app";

import { schemaPrompt }
  from "../../prompts/schemaPrompt";

export async function schemaGeneration(
  intent: AppIntent
) {

  const prompt =
    schemaPrompt(intent);

  const response =
    await groq.chat.completions.create({

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

  const raw =
    response.choices[0]
      ?.message
      ?.content || "";

  try {

    const parsed =
      JSON.parse(

        raw
          .replace(/```json/g, "")
          .replace(/```/g, "")
          .trim()

      );

    console.log(
      "SCHEMA:",
      parsed
    );

    return {

      ...parsed,

      entities:
        parsed?.entities || [],

    };

  } catch (error) {

    console.error(
      "Schema Parse Error:",
      error
    );

    console.log(
      "RAW RESPONSE:",
      raw
    );

    return {

      entities: [],

    };

  }

}