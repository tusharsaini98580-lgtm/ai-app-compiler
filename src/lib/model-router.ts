export const MODEL_ROUTER = {

  intentExtraction: {
    primary: "groq-llama3",
    fallback: "gpt-4o-mini",
    latencyPriority: true,
  },

  schemaGeneration: {
    primary: "gpt-4o",
    fallback: "claude-sonnet",
    latencyPriority: false,
  },

  appSpecGeneration: {
    primary: "claude-sonnet",
    fallback: "gemini-1.5-pro",
    latencyPriority: false,
  },

  repairEngine: {
    primary: "gpt-4o",
    fallback: "openrouter-mixtral",
    latencyPriority: true,
  },

};

export function resolveModel(stage: string) {

  const route =
    MODEL_ROUTER[
      stage as keyof typeof MODEL_ROUTER
    ];

  if (!route) {

    return {
      provider: "openrouter",
      model: "mixtral",
    };
  }

  return {
    provider: route.primary,
    fallback: route.fallback,
    latencyPriority: route.latencyPriority,
  };
}