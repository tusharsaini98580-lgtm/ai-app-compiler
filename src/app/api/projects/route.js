import prisma
from "../../../lib/prisma";
import {
  geminiModel,
} from "../../../lib/gemini";

// GET PROJECTS

export async function GET() {

  try {

    const projects =
      await prisma.project.findMany({

        orderBy: {
          id: "desc",
        },
      });

    return Response.json(
      projects
    );

  } catch (error) {

    console.log(error);

    return Response.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}

// CREATE PROJECT

export async function POST(
  req
) {

  try {

    const body =
      await req.json();

    const project =
      await prisma.project.create({

        data: {

          name:
            body.name,

          schema:
            JSON.stringify(
              body.schema
            ),
        },
      });

    return Response.json(
      project
    );

  } catch (error) {

    console.log(error);

    return Response.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}

// DELETE PROJECT

export async function DELETE(
  req
) {

  try {

    const body =
      await req.json();

    await prisma.project.delete({

      where: {
        id: body.id,
      },
    });

    return Response.json({
      success: true,
    });

  } catch (error) {

    console.log(error);

    return Response.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}

// UPDATE PROJECT

export async function PUT(
  req
) {

  try {

    const body =
      await req.json();

    const updated =
      await prisma.project.update({

        where: {
          id: body.id,
        },

        data: {

          name:
            body.name,
        },
      });

    return Response.json(
      updated
    );

  } catch (error) {

    console.log(error);

    return Response.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}