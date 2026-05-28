import { extractIntent } from "../../../pipeline/intentExtractor";
import { architecturePlanner } from "../../../pipeline/architecturePlanner";
import { schemaGenerator } from "../../../pipeline/schemaGenerator";
import { validateSchema } from "../../../pipeline/validator";
import { repairSchema } from "../../../pipeline/repairEngine";


export async function POST(req: Request) {

  try {

    const body = await req.json();

    // STEP 1 — Extract intent

    const intent =
      await extractIntent(
        body.prompt
      );

    if (
      (intent as any).success === false
    ) {

      return Response.json(
        intent,
        {
          status: 500,
        }
      );
    }

    // STEP 2 — Generate architecture

    const architecture =
      await architecturePlanner(
        intent
      );

    let finalSchema = null;

    // STEP 3 — Retry loop

    for (
      let attempt = 1;
      attempt <= 3;
      attempt++
    ) {

      console.log(
        `Schema generation attempt ${attempt}`
      );

      // Generate schema

      const schemaResult =
        await schemaGenerator(
          architecture
        );

      console.log(
        "FULL RESULT",
        schemaResult
      );

      // Validate schema

      const validation =
        validateSchema(
          schemaResult
        );

      // VALID

      if (validation.valid) {

        console.log(
          "VALID SCHEMA GENERATED"
        );

        finalSchema =
          schemaResult;

        // RETURN IMMEDIATELY

        return Response.json({
          success: true,
          repaired: false,
          intent,
          architecture,
          schemas: finalSchema,
        });
      }

      // INVALID

      console.log(
        "VALIDATION FAILED"
      );

      console.log(
        validation.errors
      );

      // Repair schema

      finalSchema =
        repairSchema(
          schemaResult
        );
    }

    // AFTER ALL RETRIES

    return Response.json({
      success: true,
      repaired: true,
      intent,
      architecture,
      schemas: finalSchema,
    });

  } catch (error) {

    console.error(
      "Pipeline failed:",
      error
    );

    return Response.json(
      {
        success: false,
        error:
          "Pipeline failed",
        details:
          String(error),
      },
      {
        status: 500,
      }
    );
  }
}