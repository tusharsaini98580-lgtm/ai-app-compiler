import { AppIntent }
  from "../lib/types/app";

export function schemaPrompt(
  intent: AppIntent
) {

  return `

You are an advanced AI application compiler.

Generate a VALID JSON application schema.

Application Intent:

${JSON.stringify(
  intent,
  null,
  2
)}

Return ONLY valid JSON.

Required structure:

{
  "uiSchema": {
    "pages": [
      {
        "name": "Dashboard",
        "route": "/dashboard",
        "layout": "grid",
        "components": [
          {
            "type": "text",
            "properties": {
              "text": "Welcome to RuntimeOS"
            }
          },
          {
            "type": "button",
            "properties": {
              "text": "Submit"
            }
          }
        ]
      }
    ]
  },

  "apiSchema": {
    "endpoints": [
      {
        "path": "/api/users",
        "method": "GET"
      },
      {
        "path": "/api/users",
        "method": "POST"
      }
    ]
  },

  "databaseSchema": {
    "tables": [
      {
        "name": "users",
        "columns": [
          {
            "name": "id",
            "type": "string"
          },
          {
            "name": "email",
            "type": "string"
          }
        ]
      }
    ]
  },

  "authSystem": {
    "enabled": true,
    "roles": [
      "Admin",
      "User"
    ]
  }
}

Rules:
- Return ONLY valid JSON
- No markdown
- No explanations
- No comments
- All routes must start with /
- Components must contain type
- Use lightweight schema design

`;

}