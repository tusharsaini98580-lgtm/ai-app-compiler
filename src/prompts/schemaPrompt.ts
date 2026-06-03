export const SYSTEM_DESIGN_SCHEMA = {

  type: "object",

  properties: {

    roles: {

      type: "array",

      items: {
        type: "string",
      },

    },

    entities: {

      type: "array",

      items: {

        type: "object",

        properties: {

          name: {
            type: "string",
          },

          fields: {

            type: "array",

            items: {
              type: "string",
            },

          },

        },

        required: [
          "name",
          "fields",
        ],

      },

    },

  },

  required: [
    "roles",
    "entities",
  ],

};

export const FINAL_COMPILER_SCHEMA = {

  type: "object",

  properties: {

    uiSchema: {

      type: "object",

      properties: {

        pages: {

          type: "array",

          items: {

            type: "object",

            properties: {

              name: {
                type: "string",
              },

              route: {
                type: "string",
              },

              layout: {
                type: "string",
              },

              components: {

                type: "array",

                items: {

                  type: "object",

                  properties: {

                    type: {
                      type: "string",
                    },

                    properties: {
                      type: "object",
                    },

                  },

                  required: [
                    "type",
                  ],

                },

              },

            },

            required: [

              "name",

              "route",

              "layout",

              "components",

            ],

          },

        },

      },

      required: [
        "pages",
      ],

    },

    apiSchema: {

      type: "object",

      properties: {

        endpoints: {

          type: "array",

          items: {

            type: "object",

            properties: {

              path: {
                type: "string",
              },

              method: {
                type: "string",
              },

            },

          },

        },

      },

    },

    databaseSchema: {

      type: "object",

      properties: {

        tables: {

          type: "array",

          items: {

            type: "object",

            properties: {

              name: {
                type: "string",
              },

              columns: {

                type: "array",

                items: {

                  type: "object",

                  properties: {

                    name: {
                      type: "string",
                    },

                    type: {
                      type: "string",
                    },

                  },

                },

              },

            },

          },

        },

      },

    },

  },

  required: [

    "uiSchema",

    "apiSchema",

    "databaseSchema",

  ],

};