export function repairSchema(
  schema: any
) {

  // Create schemas object

  if (!schema.schemas) {
    schema.schemas = {};
  }

  // Create uiSchema

  if (!schema.schemas.uiSchema) {
    schema.schemas.uiSchema = {
      pages: [],
    };
  }

  // Create apiSchema

  if (!schema.schemas.apiSchema) {
    schema.schemas.apiSchema = {
      endpoints: [],
    };
  }

  // Create databaseSchema

  if (
    !schema.schemas.databaseSchema
  ) {
    schema.schemas.databaseSchema = {
      tables: [],
    };
  }

  return schema;
}