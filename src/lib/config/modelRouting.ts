export const MODEL_ROUTING = {
  intentExtraction: {
    primary: "openai/gpt-3.5-turbo",
    fallback: "mistralai/mistral-7b-instruct",
  },

  schemaGeneration: {
    primary: "openai/gpt-4o",
    fallback: "google/gemini-pro",
  },

  appSpecGeneration: {
    primary: "openai/gpt-4o",
    fallback: "anthropic/claude-3-sonnet",
  },
};