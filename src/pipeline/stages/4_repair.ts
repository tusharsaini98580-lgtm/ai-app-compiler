export async function runValidationAndRepair(
  generatedOutput: any
): Promise<any> {

  try {

    // =========================
    // SAFE PARSE
    // =========================

    const schema =

      typeof generatedOutput ===
      "string"

        ? JSON.parse(
            generatedOutput
          )

        : generatedOutput;

    // =========================
    // UI SCHEMA
    // =========================

    if (
      !schema.uiSchema
    ) {

      schema.uiSchema = {
        pages: [],
      };
    }

    if (
      !Array.isArray(
        schema.uiSchema.pages
      )
    ) {

      schema.uiSchema.pages = [];
    }

    // =========================
    // API SCHEMA
    // =========================

    if (
      !schema.apiSchema
    ) {

      schema.apiSchema = {
        endpoints: [],
      };
    }

    if (
      !Array.isArray(
        schema.apiSchema.endpoints
      )
    ) {

      schema.apiSchema.endpoints =
        [];
    }

    // =========================
    // DATABASE SCHEMA
    // =========================

    if (
      !schema.databaseSchema
    ) {

      schema.databaseSchema = {
        tables: [],
      };
    }

    if (
      !Array.isArray(
        schema.databaseSchema.tables
      )
    ) {

      schema.databaseSchema.tables =
        [];
    }

    // =========================
    // AUTH SYSTEM
    // =========================

    if (
      !schema.authSystem
    ) {

      schema.authSystem = {

        enabled: false,

        roles: [
          "Admin",
          "User",
        ],
      };
    }

    // =========================
    // PAGE VALIDATION
    // =========================

    schema.uiSchema.pages =
      schema.uiSchema.pages.map(
        (
          page: any,
          pageIndex: number
        ) => {

          return {

            name:
              page?.name ||
              `Page ${pageIndex + 1}`,

            components:
              Array.isArray(
                page?.components
              )

                ? page.components

                : [],
          };
        }
      );

    // =========================
    // FALLBACK PAGE
    // =========================

    if (
      schema.uiSchema.pages
        .length === 0
    ) {

      schema.uiSchema.pages = [

        {
          name:
            "Dashboard",

          components: [

            {
              type:
                "text",

              properties: {
                text:
                  "Application generated successfully",
              },
            },

            {
              type:
                "input",

              properties: {

                label:
                  "Name",

                name:
                  "name",

                placeholder:
                  "Enter value",
              },
            },

            {
              type:
                "button",

              properties: {
                text:
                  "Submit",
              },
            },
          ],
        },
      ];
    }

    // =========================
    // RETURN CLEAN SCHEMA
    // =========================

    return schema;

  } catch (error) {

    console.error(
      "Repair stage failed:",
      error
    );

    // =========================
    // HARD FALLBACK
    // =========================

    return {

      uiSchema: {

        pages: [

          {
            name:
              "Dashboard",

            components: [

              {
                type:
                  "text",

                properties: {
                  text:
                    "Fallback UI loaded",
                },
              },
            ],
          },
        ],
      },

      apiSchema: {
        endpoints: [],
      },

      databaseSchema: {
        tables: [],
      },

      authSystem: {

        enabled: false,

        roles: [
          "Admin",
          "User",
        ],
      },
    };
  }
}