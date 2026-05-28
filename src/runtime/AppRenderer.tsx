"use client";
import FormRenderer from "./FormRenderer";
import { useState } from "react";
import { generateReactCode } from "../pipeline/codeGenerator";

type Props = {
  schema: any;
};

export default function AppRenderer({
  schema,
}: Props) {

  const [currentPage, setCurrentPage] =
    useState(0);
  const [formData, setFormData] =
    useState({});
  const [refresh, setRefresh] = useState(false);

  if (!schema?.uiSchema) {
    return (
      <p>No UI schema found</p>
    );
  }

  const pages =
    schema.uiSchema.pages || [];

  return (

  <div className="flex min-h-screen">

    {/* SIDEBAR */}

    <div className="
      w-64
      bg-black
      text-white
      p-6
      space-y-4
    ">

      <h1 className="
        text-2xl
        font-bold
        mb-8
      ">
        AI App Compiler
      </h1>

      {pages.map(
        (
          page: any,
          index: number
        ) => (

          <button
            key={index}

            onClick={() =>
              setCurrentPage(index)
            }

           className={`
  block
  w-full
  text-left
  px-4
  py-3
  rounded-xl
  transition
  ${
    currentPage === index
      ? "bg-white text-black"
      : "hover:bg-gray-800"
  }
`}
          >
            {page.name}
          </button>
        )
      )}

    </div>

    {/* MAIN CONTENT */}

    <div className="
     flex-1
p-10
bg-gray-100
overflow-auto
    ">

      <h2 className="
        text-4xl
        font-bold
        mb-6
      ">
        Generated App
      </h2>

      <div className="flex gap-4 mb-6">
        <button

  onClick={() => {

    const blob =
      new Blob(

        [
          JSON.stringify(
            schema,
            null,
            2
          )
        ],

        {
          type:
            "application/json",
        }
      );

    const url =
      URL.createObjectURL(blob);

    const a =
      document.createElement("a");

    a.href = url;

    a.download =
      "generated-app.json";

    a.click();

    URL.revokeObjectURL(url);
  }}

  className="
    bg-green-600
    text-white
    px-4
    py-2
    rounded-xl
  "
>
  Export App
</button>

        <button

  onClick={() => {

    const generatedCode =
      generateReactCode(schema.schemas);

    const blob =
      new Blob(
        [generatedCode],
        {
          type:
            "text/plain",
        }
      );

    const url =
      URL.createObjectURL(blob);

    const a =
      document.createElement("a");

    a.href = url;

    a.download =
      "GeneratedApp.tsx";

    a.click();

    URL.revokeObjectURL(url);
  }}

  className="
    bg-blue-600
    text-white
    px-4
    py-2
    rounded-xl
  "
>
  Export React Code
</button>
      </div>

      {pages[currentPage] && (

        <div className="
          bg-white
          shadow-xl
          rounded-2xl
          p-8
          space-y-6
        ">

          <h3 className="
            text-2xl
            font-bold
          ">
            {
              pages[currentPage]
                .name
            }
          </h3>

          <p>
            Page {currentPage + 1}
            of {pages.length}
          </p>

          <FormRenderer
            components={
              pages[currentPage]
                .components || []
            }
            formData={formData}
            setFormData={setFormData}
            refresh={refresh}
            setRefresh={setRefresh}
          />

        </div>
      )}

    </div>

  </div>
);
}