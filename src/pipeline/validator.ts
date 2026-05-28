type ValidationResult = {
  valid: boolean;
  errors: string[];
};

export function validateSchema(schema: any): ValidationResult {

  const errors: string[] = [];

  // Check schema exists

  if (!schema) {
    errors.push("Schema is missing");

    return {
      valid: false,
      errors,
    };
  }

  // Check schemas object

  if (!schema.schemas) {
    errors.push("schemas object missing");
  }

  // Check uiSchema

  if (!schema.schemas?.uiSchema) {
    errors.push("uiSchema missing");
  }

  // Check apiSchema

  if (!schema.schemas?.apiSchema) {
    errors.push("apiSchema missing");
  }

  // Check databaseSchema

  if (!schema.schemas?.databaseSchema) {
    errors.push("databaseSchema missing");
  }

  // Check pages array

  if (
    schema.schemas?.uiSchema &&
    !Array.isArray(
      schema.schemas.uiSchema.pages
    )
  ) {
    errors.push(
      "uiSchema.pages must be array"
    );
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}