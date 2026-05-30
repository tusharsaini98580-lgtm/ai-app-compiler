export async function executeAction(
  action: string,
  formData: any
) {

  try {

    // ADD EMPLOYEE

    if (
      action ===
      "addEmployee"
    ) {

      const response =
        await fetch(
          "/api/employees",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body:
              JSON.stringify({
                name:
                  formData.name,

                email:
                  formData.email,

                role:
                  formData.role,
              }),
          }
        );

      const data =
        await response.json();

      console.log(data);

      alert(
        "Employee Added!"
      );

      return data;
    }

  } catch (error) {

    console.log(error);

    alert("Action failed");
  }
}