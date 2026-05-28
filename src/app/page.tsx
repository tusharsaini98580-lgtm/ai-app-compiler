"use client";

import { useState } from "react";
import AppRenderer from "../runtime/AppRenderer";

export default function Home() {
  const [prompt, setPrompt] =
    useState("");

  const [result, setResult] =
    useState<any>(null);

    const [importLoading, setImportLoading] =
  useState(false);

  async function generateApp() {
    try {
      const response = await fetch(
        "/api/test",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            prompt,
          }),
        }
      );

      const data =
        await response.json();

      console.log(
        "API RESPONSE:",
        data
      );

      setResult(data);
    } catch (error) {
      console.error(
        "Frontend error:",
        error
      );
    }
  }

  console.log(
    "FULL RESULT",
    result
  );

  console.log(
    "SCHEMAS",
    result?.schemas
  );

  console.log(
    "UI SCHEMA",
    result?.schemas?.uiSchema
  );

  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold mb-6">
        AI App Compiler
      </h1>

      <div className="flex gap-4 mb-8">

        <div className="mb-8">

  <input

    type="file"

    accept=".json"

    onChange={async (e) => {

      const file =
        e.target.files?.[0];

      if (!file) return;

      setImportLoading(true);

      const text =
        await file.text();

      const parsed =
        JSON.parse(text);

      setResult(parsed);

      setImportLoading(false);
    }}

    className="
      border
      p-3
      rounded-lg
      bg-white
    "
  />

  {importLoading && (

    <p className="mt-2">
      Importing app...
    </p>
  )}

</div>
        <input
          value={prompt}
          onChange={(e) =>
            setPrompt(
              e.target.value
            )
          }
          placeholder="Describe your app..."
          className="border p-3 rounded w-full"
        />

        <button
          onClick={generateApp}
          className="bg-black text-white px-6 py-3 rounded"
        >
          Generate
        </button>
      </div>

      {!result && (
        <p>
          No app generated yet
        </p>
      )}

     {result?.schemas && (
  <AppRenderer
    schema={result.schemas}
  />
)}
    </main>
  );
}