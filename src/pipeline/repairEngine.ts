export function repairSchema(
  schema: any
) {

  // =========================
  // SAFE INPUT
  // =========================

  if (!schema) {

    schema = {};
  }

  // =========================
  // SUPPORT OLD STRUCTURE
  // =========================

  const source =

    schema?.schemas

      ? schema.schemas

      : schema;

  // =========================
  // UI SCHEMA
  // =========================

  const uiSchema =

    source?.uiSchema &&
    Array.isArray(
      source.uiSchema.pages
    )

      ? source.uiSchema

      : {
          pages: [],
        };

  // =========================
  // API SCHEMA
  // =========================

  const apiSchema =

    source?.apiSchema &&
    Array.isArray(
      source.apiSchema.endpoints
    )

      ? source.apiSchema

      : {
          endpoints: [],
        };

  // =========================
  // DATABASE SCHEMA
  // =========================

  const databaseSchema =

    source?.databaseSchema &&
    Array.isArray(
      source.databaseSchema.tables
    )

      ? source.databaseSchema

      : {
          tables: [],
        };

  // =========================
  // AUTH SYSTEM
  // =========================

  const authSystem =

    source?.authSystem

      ? source.authSystem

      : {
          enabled: false,

          roles: [
            "Admin",
            "User",
          ],
        };

  // =========================
  // RETURN CLEAN STRUCTURE
  // =========================

  return {

    uiSchema,

    apiSchema,

    databaseSchema,

    authSystem,
  };
}