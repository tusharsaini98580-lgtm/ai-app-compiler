import JSZip
from "jszip";

export async function
exportFullProject(
  schema: any
) {

  const zip =
    new JSZip();

  // README

  zip.file(
    "README.md",

    `# AI Generated App

Generated using
AI App Compiler.
`
  );

  // PACKAGE JSON

  zip.file(
    "package.json",

    JSON.stringify(
      {
        name:
          "ai-generated-app",

        version:
          "1.0.0",

        scripts: {
          dev:
            "next dev",
        },
      },

      null,
      2
    )
  );

  // APP JSON

  zip.file(
    "schema.json",

    JSON.stringify(
      schema,
      null,
      2
    )
  );

  // INDEX PAGE

  zip.file(
    "src/app/page.tsx",

    `
export default function Home() {

  return (

    <div>

      <h1>
        AI Generated App
      </h1>

    </div>
  );
}
`
  );

  const content =
    await zip.generateAsync({
      type: "blob",
    });

  const url =
    URL.createObjectURL(
      content
    );

  const link =
    document.createElement(
      "a"
    );

  link.href = url;

  link.download =
    "ai-app.zip";

  link.click();
}