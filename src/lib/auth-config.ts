export const AUTH_ROLES = [

  {
    role: "admin",

    permissions: [
      "read",
      "write",
      "delete",
      "manage_integrations",
    ],
  },

  {
    role: "manager",

    permissions: [
      "read",
      "write",
    ],
  },

  {
    role: "viewer",

    permissions: [
      "read",
    ],
  },

];