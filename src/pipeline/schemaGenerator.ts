import { client } from "../lib/gemini";

function sleep(ms: number) {
  return new Promise((resolve) =>
    setTimeout(resolve, ms)
  );
}

export async function schemaGenerator(
  architecture: any
) {
  const prompt = `
You are an advanced AI UI schema generator.

Generate a COMPLETE application schema.

Supported components:
- input
- button
- textarea
- checkbox
- select
- card
- table
- chart

For tables always generate:
- columns array
- rows array

Example:

{
  "type": "table",
  "properties": {
    "columns": [
      "ID",
      "Name"
    ],
    "rows": [
      ["1", "Rahul"],
      ["2", "Aman"]
    ]
  }
}


RULES:

1. Every page must contain components.

2. Input components must include:
{
  "type": "input",
  "properties": {
    "label": "",
    "placeholder": ""
  }
}

3.Button components must include:
{
  "type": "button",
  "properties": {
    "label": "",
    "action": "login"
  }
}

4. Select components must include:
{
  "type": "select",
  "properties": {
    "options": [
      "Option 1",
      "Option 2",
      "Option 3"
    ]
  }
}

5. Card components must include:
{
  "type": "card",
  "properties": {
    "title": "",
    "content": ""
  }
}

6. Table components must include:
{
  "type": "table",
  "properties": {
    "columns": [
      "Column 1",
      "Column 2"
    ],
    "rows": [
      ["Data 1", "Data 2"],
      ["Data 3", "Data 4"]
    ]
  }
}

7. Text components must include:
{
  "type": "text",
  "properties": {
    "text": ""
  }
}
  8. Chart components must include:
{
  "type": "chart",
  "properties": {
    "data": [
      {
        "name": "Jan",
        "value": 400
      },
      {
        "name": "Feb",
        "value": 700
      }
    ]
  }
}

9. NEVER return empty components arrays.

10. Every page MUST contain at least:
- 2 inputs
- 1 button

11. Buttons MUST contain:
{
  "type": "button",
  "properties": {
    "text": "Submit",
    "action": "saveUser"
  }
}

12. Inputs MUST contain:
{
  "type": "input",
  "properties": {
    "label": "Name",
    "placeholder": "Enter name",
    "name": "Name"
  }
}

13. Generate realistic apps with forms, tables, charts, and buttons.

14. NEVER omit properties.

15. ALWAYS generate valid components arrays.

16. Form buttons should use actions like:
- saveUser
- submitFeedback
- login
- payment

17. Dynamic tables should include:

{
  "type": "table",
  "properties": {
    "columns": [
      "ID",
      "Name",
      "Email"
    ],
    "storageKey": "employees"
  }
}
  18. Employee systems should generate:

Button action:
"addEmployee"

Table component:
{
  "type": "table",
  "properties": {
    "columns": [
      "Name",
      "Email",
      "Role"
    ]
  }
}

19. Employee forms should use:
"action": "addEmployee"

Employee registration forms must include:

{
  "type": "input",
  "properties": {
    "label": "First Name",
    "name": "firstName",
    "placeholder": "Enter first name"
  }
}

{
  "type": "button",
  "properties": {
    "label": "Add Employee",
    "action": "addEmployee"
  }
}

Return ONLY valid JSON.

Schema format:

{
  "uiSchema": {
    "pages": []
  },
  "apiSchema": {},
  "databaseSchema": {}
}

Architecture:
${JSON.stringify(architecture)}
`;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
     console.log(
  `Schema generation attempt ${attempt}`
);

      const completion =
        await client.chat.completions.create({
          model: "openai/gpt-4o-mini",
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
        });

      const text =
        completion.choices[0].message.content;

      console.log("SCHEMA RESPONSE:");
      console.log(text);

      if (!text) {
        throw new Error("Empty schema response");
      }

      const cleanedText = text
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();

return JSON.parse(cleanedText);
    } catch (error) {
      console.error(
        "Schema generation failed:",
        error
      );

      await sleep(3000);
    }
  }

  return {
    success: false,
    error: "Schema generation failed",
  };
}