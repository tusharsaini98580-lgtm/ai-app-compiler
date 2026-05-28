export function generateReactCode(
  schema: any
) {

  const pages =
    schema?.uiSchema?.pages || [];

  let code = `
export default function GeneratedApp() {

  return (

    <div style={{
      padding: "40px",
      fontFamily: "sans-serif"
    }}>
`;

  pages.forEach((page: any) => {

    code += `

      <div style={{
        marginBottom: "40px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "12px"
      }}>

        <h2>${page.name}</h2>
`;

    page.components?.forEach(
      (component: any) => {

        // INPUT

        if (
          component.type === "input"
        ) {

          code += `

          <input
            placeholder="${component.properties?.placeholder || ""}"

            style={{
              display: "block",
              padding: "12px",
              marginBottom: "12px",
              width: "100%"
            }}
          />
`;
        }

        // TEXTAREA

        if (
          component.type === "textarea"
        ) {

          code += `

          <textarea
            placeholder="${component.properties?.placeholder || ""}"

            style={{
              display: "block",
              padding: "12px",
              marginBottom: "12px",
              width: "100%"
            }}
          />
`;
        }

        // BUTTON

        if (
          component.type === "button"
        ) {

          code += `

          <button
            style={{
              padding: "12px 20px",
              background: "black",
              color: "white",
              borderRadius: "8px"
            }}
          >
            ${component.properties?.label || "Submit"}
          </button>
`;
        }

      }
    );

    code += `
      </div>
`;
  });

  code += `
    </div>
  );
}
`;

  return code;
}