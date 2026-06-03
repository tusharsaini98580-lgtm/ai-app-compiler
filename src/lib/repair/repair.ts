export function structuralRepair(
  raw: string
) {
  try {
    return JSON.parse(raw);
  } catch {
    const cleaned = raw
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(cleaned);
  }
}