"use client";

import {
  Download,
  FileText,
  Plus,
  Trash2,
  Upload,
} from "lucide-react";

import FormRenderer from "./FormRenderer";

export default function AppRenderer({
  schema,
}: any) {
  const pages =
    schema?.uiSchema?.pages || [];

  const apis =
    schema?.apiSchema?.endpoints || [];

  const tables =
    schema?.databaseSchema?.tables || [];

  return (
    <div className="space-y-8">
      {/* ACTION BAR */}

      <div className="flex flex-wrap gap-4">
        <button className="bg-cyan-500 hover:bg-cyan-600 transition-all px-5 py-3 rounded-xl flex items-center gap-2 font-semibold">
          <Plus size={18} />
          Add Record
        </button>

        <button className="bg-slate-800 hover:bg-slate-700 transition-all px-5 py-3 rounded-xl flex items-center gap-2">
          <Upload size={18} />
          Upload File
        </button>

        <button className="bg-slate-800 hover:bg-slate-700 transition-all px-5 py-3 rounded-xl flex items-center gap-2">
          <Download size={18} />
          Export CSV
        </button>

        <button className="bg-red-500 hover:bg-red-600 transition-all px-5 py-3 rounded-xl flex items-center gap-2">
          <Trash2 size={18} />
          Delete Selected
        </button>
      </div>

      {/* ANALYTICS */}

      <div className="grid grid-cols-4 gap-6">
        <AnalyticsCard
          title="Active Projects"
          value="2,184"
        />

        <AnalyticsCard
          title="Runtime builds"
          value="842"
        />

        <AnalyticsCard
          title="API Requests"
          value="$48K"
        />

        <AnalyticsCard
          title="Team Members"
          value="64"
        />
      </div>

      {/* PAGES */}

      <div className="space-y-6">
        {pages.map(
          (
            page: any,
            index: number
          ) => (
            <div
              key={index}
              className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="border-b border-slate-800 px-6 py-5 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">
                    {page.name}
                  </h2>

                  <p className="text-slate-400 mt-1">
                    Runtime generated workspace
                  </p>
                </div>

                <div className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-semibold">
                  Active Runtime
                </div>
              </div>

              <div className="p-6">
                <FormRenderer
                  components={
                    page.components || []
                  }
                />
              </div>
            </div>
          )
        )}
      </div>

      {/* API SECTION */}

      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-6">
          Runtime API Endpoints
        </h2>

        <div className="space-y-4">
          {apis.length === 0 ? (
            <EmptyState
              text="No API endpoints generated yet."
            />
          ) : (
            apis.map(
              (
                api: any,
                index: number
              ) => (
                <div
                  key={index}
                  className="bg-slate-900 border border-slate-800 rounded-xl px-5 py-4 flex items-center justify-between"
                >
                  <div>
                    <p className="font-semibold">
                      {api.route ||
                        "/api/data"}
                    </p>

                    <p className="text-sm text-slate-400">
                      Runtime endpoint
                    </p>
                  </div>

                  <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                    GET
                  </div>
                </div>
              )
            )
          )}
        </div>
      </div>

      {/* DATABASE */}

      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-6">
          Database Schema
        </h2>

        <div className="space-y-4">
          {tables.length === 0 ? (
            <EmptyState
              text="No database tables generated yet."
            />
          ) : (
            tables.map(
              (
                table: any,
                index: number
              ) => (
                <div
                  key={index}
                  className="bg-slate-900 border border-slate-800 rounded-xl p-5"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <FileText
                      className="text-cyan-400"
                      size={20}
                    />

                    <h3 className="text-xl font-semibold">
                      {table.name}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {table.fields?.map(
                      (
                        field: any,
                        fieldIndex: number
                      ) => (
                        <div
                          key={fieldIndex}
                          className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-lg text-sm"
                        >
                          {field}
                        </div>
                      )
                    )}
                  </div>
                </div>
              )
            )
          )}
        </div>
      </div>

      {/* ACTIVITY LOG */}

      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-6">
          Runtime Activity
        </h2>

        <div className="space-y-4">
          <ActivityItem
            text="AI generated hospital management runtime"
            time="10:42 AM"
          />

          <ActivityItem
            text="Database schema validated"
            time="10:45 AM"
          />

          <ActivityItem
            text="Analytics dashboard generated"
            time="10:48 AM"
          />

          <ActivityItem
            text="Runtime repair engine executed"
            time="10:51 AM"
          />
        </div>
      </div>
    </div>
  );
}

function AnalyticsCard({
  title,
  value,
}: any) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <p className="text-slate-400 mb-2">
        {title}
      </p>

      <h3 className="text-3xl font-bold">
        {value}
      </h3>
    </div>
  );
}

function ActivityItem({
  text,
  time,
}: any) {
  return (
    <div className="flex items-center justify-between bg-slate-900 border border-slate-800 rounded-xl px-5 py-4">
      <p>{text}</p>

      <span className="text-sm text-slate-400">
        {time}
      </span>
    </div>
  );
}

function EmptyState({
  text,
}: any) {
  return (
    <div className="bg-slate-900 border border-dashed border-slate-700 rounded-xl p-8 text-center text-slate-400">
      {text}
    </div>
  );
}