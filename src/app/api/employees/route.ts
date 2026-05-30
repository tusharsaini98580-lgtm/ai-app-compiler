export const dynamic = "force-dynamic";

import prisma from "../../../lib/prisma";



// GET ALL EMPLOYEES

export async function GET() {

  try {

    const employees =
      await prisma.employee.findMany({

        orderBy: {
          id: "desc",
        },
      });

    return Response.json(
      employees
    );

  } catch (error) {

    console.log(error);

    return Response.json(
      {
        success: false,
        error: "Failed to fetch employees",
      },
      {
        status: 500,
      }
    );
  }
}

// CREATE EMPLOYEE

export async function POST(
  req: Request
) {

  try {

    const body =
      await req.json();

    const employee =
      await prisma.employee.create({

        data: {

          name:
            body.name,

          email:
            body.email,

          role:
            body.role,
        },
      });

    return Response.json(
      employee
    );

  } catch (error) {

    console.log(error);

    return Response.json(
      {
        success: false,
        error: "Failed to create employee",
      },
      {
        status: 500,
      }
    );
  }
}

// UPDATE EMPLOYEE

export async function PUT(
  req: Request
) {

  try {

    const body =
      await req.json();

    const updatedEmployee =
      await prisma.employee.update({

        where: {
          id: body.id,
        },

        data: {

          name:
            body.name,

          email:
            body.email,

          role:
            body.role,
        },
      });

    return Response.json(
      updatedEmployee
    );

  } catch (error) {

    console.log(error);

    return Response.json(
      {
        success: false,
        error: "Failed to update employee",
      },
      {
        status: 500,
      }
    );
  }
}

// DELETE EMPLOYEE

export async function DELETE(
  req: Request
) {

  try {

    const body =
      await req.json();

    await prisma.employee.delete({

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
        error: "Failed to delete employee",
      },
      {
        status: 500,
      }
    );
  }
}