import { NextResponse } from "next/server";

import {
  compileApplication,
} from "../../../legacy-pipeline/compiler";

export const dynamic =
  "force-dynamic";

export const maxDuration =
  60;

export async function POST(
  req: Request
) {

  try {

    const body =
      await req.json();

    const prompt =
      body?.prompt;

    // =========================
    // VALIDATION
    // =========================

    if (
      !prompt ||

      typeof prompt !==
        "string" ||

      prompt.trim().length < 3
    ) {

      return NextResponse.json(
        {
          success: false,

          error:
            "Please enter a valid prompt.",
        },
        {
          status: 400,
        }
      );
    }

    // =========================
    // COMPILE APP
    // =========================

    const compiledData =
      await compileApplication(
        prompt
      );

    // =========================
    // SUCCESS
    // =========================

    return NextResponse.json({
      success: true,

      ...compiledData,
    });

  } catch (error: any) {

    console.error(
      "Compiler API Error:",
      error
    );

    return NextResponse.json(
      {
        success: false,

        error:
          error?.message ||
          "Failed to compile application.",
      },
      {
        status: 500,
      }
    );
  }
}