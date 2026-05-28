export function executeAction(
  action: string,
  formData: any
) {

  console.log(
    "ACTION:",
    action
  );

  console.log(
    "FORM DATA:",
    formData
  );

  // LOGIN

  if (action === "login") {

    alert(
      `Logged in as ${formData.username}`
    );

    return;
  }

  // ADD EMPLOYEE

  if (
    action === "addEmployee"
  ) {

    const employees =
      JSON.parse(
        localStorage.getItem(
          "employees"
        ) || "[]"
      );

    employees.push(formData);

    localStorage.setItem(
      "employees",
      JSON.stringify(employees)
    );

    alert(
      "Employee added"
    );

    window.location.reload();

    return;
  }

  // DELETE EMPLOYEE

  if (
    action === "deleteEmployee"
  ) {

    const employees =
      JSON.parse(
        localStorage.getItem(
          "employees"
        ) || "[]"
      );

    employees.pop();

    localStorage.setItem(
      "employees",
      JSON.stringify(employees)
    );

    alert(
      "Employee deleted"
    );

    

    return;
  }

  // DEFAULT

  alert(
    `Executed action: ${action}`
  );
}