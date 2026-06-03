import { callOpenRouter } from "../ai/openrouter";

import { MODEL_ROUTING } from "../config/modelRouting";

export async function appSpecGeneration(
  schema: any
) {
  const raw = await callOpenRouter({
    model:
      MODEL_ROUTING.appSpecGeneration.primary,

    prompt: `
Generate AppSpec.

Return JSON only.

Schema:
${JSON.stringify(schema)}

Format:
{
  "pages": [],
  "apiEndpoints": [],
  "workflowStubs": [],
  "jsx": ""
}
`,
  });

 try {

  const parsed = JSON.parse(
    raw.replace(/```json/g, "")
      .replace(/```/g, "")
      .trim()
  );

console.log("APPSPEC:", parsed);

  return {
    ...parsed,

    pages:
      parsed?.pages || [],

    apiEndpoints:
      parsed?.apiEndpoints || [],

    workflowStubs:
      parsed?.workflowStubs || [],
  };

} catch (error) {

  console.error("APPSPEC ERROR:", error);

  return {
    pages: [],
    apiEndpoints: [],
    workflowStubs: [],
  };

}
}