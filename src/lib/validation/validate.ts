export function validateStageOutput(
  data: any,
  requiredKeys: string[]
) {
  const errors: string[] = [];

  for (const key of requiredKeys) {
    if (!(key in data)) {
      errors.push(`Missing key: ${key}`);
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}