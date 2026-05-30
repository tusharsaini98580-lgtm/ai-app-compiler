"use client";

import {
  Upload,
  Search,
  Plus,
  Download,
} from "lucide-react";

import TableRenderer from "./TableRenderer";
import ChartRenderer from "./ChartRenderer";

type Props = {
  components?: any[];
};

export default function FormRenderer({
  components = [],
}: Props) {

  return (

    <div className="space-y-8">

      {/* ACTION BAR */}

      <div className="flex flex-wrap gap-4">

        <button className="bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-xl font-semibold flex items-center gap-2">

          <Plus size={18} />

          Add Record

        </button>

        <button className="bg-slate-800 hover:bg-slate-700 px-5 py-3 rounded-xl flex items-center gap-2">

          <Upload size={18} />

          Upload File

        </button>

        <button className="bg-slate-800 hover:bg-slate-700 px-5 py-3 rounded-xl flex items-center gap-2">

          <Download size={18} />

          Export Data

        </button>

      </div>

      {/* SEARCH */}

      <div className="relative">

        <Search
          className="absolute left-4 top-4 text-slate-400"
          size={18}
        />

        <input
          placeholder="Search records..."
          className="w-full bg-slate-900 border border-slate-800 rounded-2xl py-4 pl-12 pr-5 outline-none focus:border-cyan-500"
        />

      </div>

      {/* COMPONENTS */}

      {components.map(
        (
          component: any,
          index: number
        ) => {

          // =========================
          // CARD
          // =========================

          if (
            component?.type ===
            "card"
          ) {

            return (

              <div
                key={index}
                className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-slate-800 rounded-3xl p-6"
              >

                <h3 className="text-2xl font-bold mb-3">
                  {
                    component
                      ?.properties
                      ?.title ||
                    "Dashboard Card"
                  }
                </h3>

                <p className="text-slate-300">
                  {
                    component
                      ?.properties
                      ?.content ||
                    "Runtime content"
                  }
                </p>

              </div>
            );
          }

          // =========================
          // TEXT
          // =========================

          if (
            component?.type ===
            "text"
          ) {

            return (

              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
              >

                <p className="text-lg text-slate-300 leading-relaxed">
                  {
                    component
                      ?.properties
                      ?.text ||
                    "Generated runtime text"
                  }
                </p>

              </div>
            );
          }

          // =========================
          // INPUT
          // =========================

          if (
            component?.type ===
            "input"
          ) {

            return (

              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
              >

                <label className="block text-sm text-slate-400 mb-3">

                  {
                    component
                      ?.properties
                      ?.label ||
                    "Input"
                  }

                </label>

                <input
                  type="text"
                  placeholder={
                    component
                      ?.properties
                      ?.placeholder ||
                    ""
                  }
                />

                {/* FILE UPLOAD */}

                <div className="mt-5 border-2 border-dashed border-slate-700 rounded-2xl p-8 text-center hover:border-cyan-500 transition-all">

                  <p className="text-slate-400 mb-3">
                    Drag & drop files here
                  </p>

                  <button className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-xl">
                    Choose File
                  </button>

                </div>

              </div>
            );
          }

          // =========================
          // TEXTAREA
          // =========================

          if (
            component?.type ===
            "textarea"
          ) {

            return (

              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
              >

                <label className="block text-sm text-slate-400 mb-3">

                  {
                    component
                      ?.properties
                      ?.label ||
                    "Textarea"
                  }

                </label>

                <textarea
                  rows={5}
                  placeholder={
                    component
                      ?.properties
                      ?.placeholder ||
                    ""
                  }
                />

              </div>
            );
          }

          // =========================
          // SELECT
          // =========================

          if (
            component?.type ===
            "select"
          ) {

            return (

              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
              >

                <label className="block text-sm text-slate-400 mb-3">

                  {
                    component
                      ?.properties
                      ?.label ||
                    "Select"
                  }

                </label>

                <select>

                  <option>
                    Select option
                  </option>

                  {component
                    ?.properties
                    ?.options?.map(
                      (
                        option: any,
                        optionIndex: number
                      ) => (

                        <option
                          key={
                            optionIndex
                          }
                        >
                          {option}
                        </option>
                      )
                    )}

                </select>

              </div>
            );
          }

          // =========================
          // BUTTON
          // =========================

          if (
            component?.type ===
            "button"
          ) {

            return (

              <button
                key={index}
                className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-2xl font-semibold"
              >

                {
                  component
                    ?.properties
                    ?.text ||
                  "Submit"
                }

              </button>
            );
          }

          // =========================
          // TABLE
          // =========================

          if (
            component?.type ===
            "table"
          ) {

            return (

              <TableRenderer
                key={index}
                columns={
                  component
                    ?.properties
                    ?.columns || []
                }
                rows={
                  component
                    ?.properties
                    ?.rows || []
                }
              />
            );
          }

          // =========================
          // CHART
          // =========================

          if (
            component?.type ===
            "chart"
          ) {

            return (
              <ChartRenderer
                key={index}
              />
            );
          }

          // =========================
          // UNKNOWN
          // =========================

          return (

            <div
              key={index}
              className="bg-red-500/10 border border-red-500 rounded-2xl p-5 text-red-400"
            >

              Unknown component:
              {" "}
              {
                component?.type
              }

            </div>
          );
        }
      )}

      {/* EMPTY STATE */}

      {components.length === 0 && (

        <div className="bg-slate-900 border border-dashed border-slate-700 rounded-3xl p-12 text-center">

          <h3 className="text-2xl font-bold mb-3">
            No Components Generated
          </h3>

          <p className="text-slate-400">
            Ask AI to generate forms,
            dashboards, analytics,
            or CRM modules.
          </p>

        </div>
      )}

    </div>
  );
}