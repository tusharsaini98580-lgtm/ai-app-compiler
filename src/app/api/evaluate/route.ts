import { NextResponse } from "next/server";

import {
  compileApplication,
} from "../../../pipeline/compiler";

// =========================
// TEST DATASET
// =========================

const TEST_CASES = [

  // REAL APPS

  {
    id: "REAL-01",

    prompt:
      "Build a hospital management system",
  },

  {
    id: "REAL-02",

    prompt:
      "Create a school management dashboard",
  },

  {
    id: "REAL-03",

    prompt:
      "Build an employee CRM system",
  },

  {
    id: "REAL-04",

    prompt:
      "Create an inventory tracking app",
  },

  {
    id: "REAL-05",

    prompt:
      "Build a gym membership platform",
  },

  // EDGE CASES

  {
    id: "EDGE-01",

    prompt:
      "Build a dashboard",
  },

  {
    id: "EDGE-02",

    prompt:
      "Create a form app",
  },

  {
    id: "EDGE-03",

    prompt:
      "Hospital app",
  },

  {
    id: "EDGE-04",

    prompt:
      "Role based application",
  },

  {
    id: "EDGE-05",

    prompt:
      "Application with charts and tables",
  },
];

// =========================
// EVALUATION ROUTE
// =========================

export async function GET() {

  const results: any[] = [];

  let passed = 0;

  let failed = 0;

  let totalLatency = 0;

  // =========================
  // RUN TESTS
  // =========================

  for (const test of TEST_CASES) {

    const start =
      performance.now();

    try {

      const result =
        await compileApplication(
          test.prompt
        );

      const latency =
        performance.now() - start;

      totalLatency += latency;

      // =========================
      // VALIDATION
      // =========================

      const success =

        !!result?.uiSchema &&
        Array.isArray(
          result.uiSchema.pages
        );

      if (success) {

        passed++;

      } else {

        failed++;
      }

      results.push({

        id: test.id,

        prompt: test.prompt,

        success,

        latency:
          `${latency.toFixed(0)}ms`,

        pages:
          result?.uiSchema
            ?.pages?.length || 0,
      });

    } catch (error: any) {

      failed++;

      results.push({

        id: test.id,

        prompt: test.prompt,

        success: false,

        error:
          error?.message ||
          "Evaluation failed",
      });
    }
  }

  // =========================
  // SUMMARY
  // =========================

  return NextResponse.json({

    success: true,

    totalTests:
      TEST_CASES.length,

    passed,

    failed,

    averageLatency:
      `${(
        totalLatency /
        TEST_CASES.length
      ).toFixed(0)}ms`,

    results,
  });
}