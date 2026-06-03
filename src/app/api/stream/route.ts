import { NextResponse }
  from "next/server";

export async function GET() {

  const encoder =
    new TextEncoder();

  const stream =
    new ReadableStream({

      async start(controller) {

        const sendEvent = (
          data: any
        ) => {

          controller.enqueue(
            encoder.encode(
              `data: ${JSON.stringify(data)}\n\n`
            )
          );

        };

        // =========================
        // PIPELINE EVENTS
        // =========================

        sendEvent({
          stage:
            "Intent Extraction",

          status:
            "running",
        });

        await delay(800);

        sendEvent({
          stage:
            "Architecture Planning",

          status:
            "running",
        });

        await delay(1000);

        sendEvent({
          stage:
            "Schema Generation",

          status:
            "running",
        });

        await delay(1200);

        sendEvent({
          stage:
            "Repair Engine",

          status:
            "running",
        });

        await delay(700);

        sendEvent({
          stage:
            "Validation",

          status:
            "running",
        });

        await delay(600);

        sendEvent({
          stage:
            "Completed",

          status:
            "success",
        });

        controller.close();

      },

    });

  return new NextResponse(
    stream,

    {
      headers: {

        "Content-Type":
          "text/event-stream",

        "Cache-Control":
          "no-cache",

        Connection:
          "keep-alive",

      },

    }
  );

}

function delay(ms: number) {

  return new Promise(
    (resolve) =>
      setTimeout(resolve, ms)
  );

}