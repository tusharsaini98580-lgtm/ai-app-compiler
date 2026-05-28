import { executeAction } from "./actionExecutor";
import { useState } from "react";
import TableRenderer from "./TableRenderer";
import ChartRenderer from "./ChartRenderer";
type Props = {
  components: any[];

  formData: any;

  setFormData: any;

  refresh: boolean;

  setRefresh: any;
};

export default function FormRenderer({
  components,
  formData,
  setFormData,
  refresh,
  setRefresh
}: Props) {

  return (
    <div className="space-y-4">
      {components.map((component, index) => {

          // INPUT
          if (
            component.type === "input"
          ) {
            return (
              <div key={index}>
                <label className="block mb-1 font-medium">
                  {
                    component.properties
                      ?.label
                  }
                </label>

               <input

  value={
    formData[
      component.properties?.name
    ] || ""
  }

  onChange={(e) =>
    setFormData({
      ...formData,

      [component.properties?.name]:
        e.target.value,
    })
  }

  placeholder={
    component.properties
      ?.placeholder
  }

 className="
   border
    p-2
    rounded-lg
    w-full
  "
/>
              </div>
            );
          }

          // TEXTAREA
          if (
            component.type ===
            "textarea"
          ) {
            return (
              <div key={index}>
                <textarea
                  placeholder={
                    component.properties
                      ?.placeholder
                  }
                  className="
                    border
                    p-3
                    rounded-lg
                    w-full
                  "
                />
              </div>
            );
          }

          // SELECT
          if (
            component.type ===
            "select"
          ) {
            return (
              <div key={index}>
                <select
                  className="
                    border
                    p-3
                    rounded-lg
                    w-full
                  "
                >
                  {(
                    component.properties
                      ?.options || []
                  ).map(
                    (
                      option: string,
                      i: number
                    ) => (
                      <option key={i}>
                        {option}
                      </option>
                    )
                  )}
                </select>
              </div>
            );
          }
         // TABLE
// TABLE
if (component.type === "table") {
  return (
    <div
      key={index}
      className="overflow-x-auto"
    >
      <table
        className="
          min-w-full
          border
          border-gray-300
          rounded-lg
          overflow-hidden
        "
      >
        <thead className="bg-gray-100">
          <tr>
            {(
              component.properties
                ?.columns || []
            ).map(
              (
                col: string,
                i: number
              ) => (
                <th
                  key={i}
                  className="
                    border
                    p-3
                    text-left
                  "
                >
                  {col}
                </th>
              )
            )}
          </tr>
        </thead>

        <tbody>
          {(
            component.properties
              ?.rows || []
          ).map(
            (
              row: any,
              rowIndex: number
            ) => (
              <tr
                key={rowIndex}
                className="
                  hover:bg-gray-50
                "
              >
                {row.map(
                  (
                    cell: any,
                    cellIndex: number
                  ) => (
                    <td
                      key={cellIndex}
                      className="
                        border
                        p-3
                      "
                    >
                      {cell}
                    </td>
                  )
                )}
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
          // BUTTON
          if (
            component.type ===
            "button"
          ) {
           return (
  <button
    key={index}
 onClick={() => {

  executeAction(
    component.properties
      ?.action || "submit",

    formData
  );

  setRefresh(!refresh);
}}

  className="
    bg-black
    text-white
    px-4
    py-2
    rounded-lg
  "
>
  {
    component.properties?.label
  }
</button>
            );
          }
          // TEXT
if (component.type === "text") {
  return (
    <p
      key={index}
      className="text-gray-700"
    >
      {
        component.properties
          ?.text
      }
    </p>
  );
}

          // CARD
          if (
            component.type === "card"
          ) {
            return (
              <div
                key={index}
                className="
                 bg-white
shadow-2xl
rounded-3xl
p-10
space-y-8
max-w-5xl
mx-auto
                "
              >
                <h3 className="font-bold text-lg">
                  {
                    component.properties
                      ?.title
                  }
                </h3>

                <p>
                  {
                    component.properties
                      ?.content
                  }
                </p>
              </div>
            );
          } 
          if (
  component.type === "chart"
) {
  return (
    <ChartRenderer
      key={index}
      data={
        component.properties
          ?.data || []
      }
    />
  );
}

          return null;
        }
      )}
    </div>
  );
}