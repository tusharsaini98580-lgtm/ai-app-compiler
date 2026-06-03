import {
  extractIntent,
} from "./intentExtractor";

import {
  architecturePlanner,
} from "./architecturePlanner";

import {
  schemaGenerator,
} from "./schemaGenerator";

import {
  repairSchema,
} from "./repairEngine";

import {
  generateWorkflowStub,
  validateWorkflowIntegrations,
} from "../lib/workflow-generator";

export async function compileApplication({
  prompt,
  existingRuntime,
  mode,
}: {
  prompt: string;
  existingRuntime?: any;
  mode?: string;
}) {

  try {

    // =========================
    // STEP 1
    // INTENT EXTRACTION
    // =========================

    console.log(
      "Extracting intent..."
    );

    const intent =
      await extractIntent(
        prompt
      );

    // =========================
    // STEP 2
    // ARCHITECTURE
    // =========================

    console.log(
      "Planning architecture..."
    );

    const architecture =
      await architecturePlanner(
        intent
      );

    // =========================
    // STEP 3
    // SCHEMA GENERATION
    // =========================

    console.log(
      "Generating schema..."
    );

    const rawSchema =
      await schemaGenerator(
        architecture
      );

    // =========================
    // STEP 4
    // REPAIR SCHEMA
    // =========================

    console.log(
      "Repairing schema..."
    );

   const workflows =
  generateWorkflowStub(
    prompt
  );

const workflowErrors =
  validateWorkflowIntegrations(
    workflows
  );

    // =========================
    // SAFE EXTRACTION
    // =========================
    const repaired =
  repairSchema(
    rawSchema
  );


    const uiSchema =

      repaired?.uiSchema ||

      {
        pages: [],
      };

    const apiSchema =

      repaired?.apiSchema ||

      {
        endpoints: [],
      };

    const databaseSchema =

      repaired?.databaseSchema ||

      {
        tables: [],
      };

    const authSystem =

      repaired?.authSystem ||

      {
        enabled: false,

        roles: [
          "Admin",
          "User",
        ],
      };

    // =========================
    // SAFE PAGE FALLBACK
    // =========================

    if (
      !Array.isArray(
        uiSchema.pages
      ) ||

      uiSchema.pages.length === 0
    ) {

      uiSchema.pages = [

       {
  name:
    "Dashboard",

  route:
    "/dashboard",

  layout:
    "grid",

  components: [

            {
              type:
                "text",

              properties: {
                text:
                  `Generated app for: ${prompt}`,
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
    // FINAL RESPONSE
    // =========================

    return {

      uiSchema,

      apiSchema,

      databaseSchema,

      authSystem,

      workflows,

workflowErrors,

    };

  } catch (error) {

    console.error(
      "Compiler failed:",
      error
    );

    // =========================
    // FULL FALLBACK
    // =========================

    return {

      uiSchema: {

        pages: [

          {
  name:
    "Dashboard",

  route:
    "/dashboard",

  layout:
    "grid",

  components: [

              {
                type:
                  "text",

                properties: {
                  text:
                    "Fallback application generated",
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