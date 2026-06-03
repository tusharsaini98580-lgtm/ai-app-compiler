export function generateReactCode(
  schema: any
) {

  const pages =
    schema?.uiSchema
      ?.pages || [];

  let code = `
"use client";

import { useState } from "react";

export default function GeneratedApp() {

  const [formData, setFormData] =
    useState({});

  function updateField(
    name,
    value
  ) {

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  return (

    <div className="
      min-h-screen
      bg-gray-100
      p-10
    ">
`;

  // =========================
  // PAGES
  // =========================

  pages.forEach(
    (
      page: any,
      pageIndex: number
    ) => {

      code += `

      <div
        className="
          bg-white
          rounded-2xl
          shadow-lg
          p-8
          mb-10
        "
      >

        <h1
          className="
            text-3xl
            font-bold
            mb-6
          "
        >
          ${page.name || `Page ${pageIndex + 1}`}
        </h1>
`;

      const components =
        page?.components || [];

      // =========================
      // COMPONENTS
      // =========================

      components.forEach(
        (
          component: any,
          index: number
        ) => {

          // =========================
          // TEXT
          // =========================

          if (
            component.type ===
            "text"
          ) {

            code += `

        <p
          className="
            text-lg
            mb-4
          "
        >
          ${
            component
              ?.properties
              ?.text || ""
          }
        </p>
`;
          }

          // =========================
          // INPUT
          // =========================

          if (
            component.type ===
            "input"
          ) {

            const name =
              component
                ?.properties
                ?.name ||

              `field_${index}`;

            code += `

        <div className="mb-4">

          <label
            className="
              block
              mb-2
              font-medium
            "
          >
            ${
              component
                ?.properties
                ?.label || "Input"
            }
          </label>

          <input

            type="${
              component
                ?.properties
                ?.inputType ||
              "text"
            }"

            placeholder="${
              component
                ?.properties
                ?.placeholder ||
              ""
            }"

            value={
              formData["${name}"] || ""
            }

            onChange={(e) =>
              updateField(
                "${name}",
                e.target.value
              )
            }

            className="
              w-full
              border
              rounded-xl
              px-4
              py-3
            "
          />

        </div>
`;
          }

          // =========================
          // TEXTAREA
          // =========================

          if (
            component.type ===
            "textarea"
          ) {

            const name =
              component
                ?.properties
                ?.name ||

              `textarea_${index}`;

            code += `

        <div className="mb-4">

          <label
            className="
              block
              mb-2
              font-medium
            "
          >
            ${
              component
                ?.properties
                ?.label ||
              "Textarea"
            }
          </label>

          <textarea

            rows={5}

            value={
              formData["${name}"] || ""
            }

            onChange={(e) =>
              updateField(
                "${name}",
                e.target.value
              )
            }

            className="
              w-full
              border
              rounded-xl
              px-4
              py-3
            "
          />

        </div>
`;
          }

          // =========================
          // BUTTON
          // =========================

          if (
            component.type ===
            "button"
          ) {

            code += `

        <button

          className="
            bg-indigo-600
            text-white
            px-6
            py-3
            rounded-xl
            mb-4
          "

          onClick={() =>
            alert("Button clicked")
          }
        >

          ${
            component
              ?.properties
              ?.text ||
            "Submit"
          }

        </button>
`;
          }

          // =========================
          // TABLE
          // =========================

          if (
            component.type ===
            "table"
          ) {

            const columns =
              component
                ?.properties
                ?.columns || [];

            code += `

        <div className="
          overflow-auto
          mb-6
        ">

          <table
            className="
              w-full
              border
            "
          >

            <thead>

              <tr>
`;

            columns.forEach(
              (column: any) => {

                code += `
                <th
                  className="
                    border
                    p-3
                    bg-gray-200
                  "
                >
                  ${column}
                </th>
`;
              }
            );

            code += `
              </tr>

            </thead>

            <tbody>

              <tr>
`;

            columns.forEach(() => {

              code += `
                <td
                  className="
                    border
                    p-3
                  "
                >
                  Data
                </td>
`;
            });

            code += `
              </tr>

            </tbody>

          </table>

        </div>
`;
          }

          // =========================
          // CHART
          // =========================

          if (
            component.type ===
            "chart"
          ) {

            code += `

        <div
          className="
            h-64
            bg-gray-200
            rounded-2xl
            flex
            items-center
            justify-center
            mb-6
          "
        >

          Chart Placeholder

        </div>
`;
          }
        }
      );

      code += `
      </div>
`;
    }
  );

  // =========================
  // END
  // =========================

  code += `

    </div>
  );
}
`;

  return code;
}