"use client";

import { useState } from "react";

import toast from "react-hot-toast";

import LoadingSpinner from "../../components/landing/LoadingSpinner";

export default function DashboardPage() {

  const [loading, setLoading] =
    useState(false);

  const generateRuntime =
    async () => {

      try {

        setLoading(true);

        await new Promise(
          (resolve) =>
            setTimeout(
              resolve,
              2000
            )
        );

        toast.success(
          "AI runtime generated successfully"
        );

      } catch (error) {

        toast.error(
          "Runtime generation failed"
        );

      } finally {

        setLoading(false);
      }
    };

  return (

    <div className="min-h-screen flex bg-[#020617] text-white">

      {/* SIDEBAR */}

      <aside
        className="
          hidden
          lg:flex

          flex-col

          w-[280px]

          border-r
          border-white/10

          bg-black/20
          backdrop-blur-2xl

          p-6
        "
      >

        {/* LOGO */}

        <div className="flex items-center gap-4 mb-14">

          <div
            className="
              w-14
              h-14

              rounded-2xl

              bg-gradient-to-r
              from-cyan-500
              to-blue-500

              flex
              items-center
              justify-center

              font-black
              text-2xl
            "
          >

            AI

          </div>

          <div>

            <div className="font-black text-2xl">

              RuntimeOS

            </div>

            <div className="text-slate-400 text-sm">

              AI Runtime Platform

            </div>

          </div>

        </div>

        {/* NAVIGATION */}

        <div className="space-y-3">

          {[
            "Dashboard",
            "Analytics",
            "Deployments",
            "Runtime Logs",
            "Schemas",
            "Settings",
          ].map((item, index) => (

            <div
              key={index}
              className="
                px-5
                py-4

                rounded-2xl

                bg-white/5

                hover:bg-cyan-500/10
                hover:border-cyan-400/20

                border
                border-white/10

                transition-all
                duration-300

                cursor-pointer
              "
            >

              {item}

            </div>
          ))}

        </div>

        {/* STATUS */}

        <div
          className="
            mt-auto

            rounded-3xl

            border
            border-green-400/20

            bg-green-500/10

            p-5
          "
        >

          <div className="flex items-center gap-3 mb-3">

            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

            <div className="font-semibold text-green-300">

              Runtime Active

            </div>

          </div>

          <p className="text-sm text-slate-300 leading-relaxed">

            AI infrastructure operational
            across all deployment pipelines.

          </p>

        </div>

      </aside>

      {/* MAIN CONTENT */}

      <div className="flex-1 p-8 overflow-x-hidden">

        {/* TOPBAR */}

        <div
          className="
            flex
            flex-wrap

            items-center
            justify-between

            gap-6

            mb-10
          "
        >

          <div>

            <h1 className="text-5xl font-black mb-3">

              AI Runtime Dashboard

            </h1>

            <p className="text-slate-400 text-lg">

              Monitor deployments,
              runtime orchestration,
              analytics, and AI pipelines.

            </p>

          </div>

          <div className="flex items-center gap-4">

            {/* STATUS */}

            <div
              className="
                flex
                items-center
                gap-3

                px-5
                py-3

                rounded-2xl

                bg-green-500/10
                border
                border-green-400/20
              "
            >

              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

              <span className="text-green-300">

                Systems Operational

              </span>

            </div>

            {/* USER */}

            <div className="flex items-center gap-4">

              <div className="text-right">

                <div className="font-semibold">

                  Tushar Saini

                </div>

                <div className="text-sm text-slate-400">

                  Runtime Engineer

                </div>

              </div>

              <div
                className="
                  w-12
                  h-12

                  rounded-full

                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-500

                  flex
                  items-center
                  justify-center

                  font-black
                "
              >

                T

              </div>

            </div>

          </div>

        </div>

        {/* ACTION BUTTON */}

        <div className="mb-10">

          <button
            onClick={
              generateRuntime
            }
            disabled={loading}
            className="
              px-8
              py-4

              rounded-2xl

              bg-gradient-to-r
              from-cyan-500
              to-blue-500

              font-semibold
              text-lg

              hover:scale-105

              disabled:opacity-50

              transition-all
              duration-300

              flex
              items-center
              gap-3
            "
          >

            {loading ? (

              <>

                <LoadingSpinner />

                <span>

                  Generating Runtime...

                </span>

              </>

            ) : (

              "Generate Runtime"

            )}

          </button>

        </div>

        {/* ANALYTICS */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          {[
            {
              title:
                "Runtime Executions",

              value:
                "12.4K",
            },

            {
              title:
                "Deployments",

              value:
                "842",
            },

            {
              title:
                "Schema Accuracy",

              value:
                "98.2%",
            },

            {
              title:
                "Response Speed",

              value:
                "4.1s",
            },
          ].map(
            (
              item,
              index
            ) => (

              <div
                key={index}
                className="
                  rounded-[32px]

                  border
                  border-white/10

                  bg-white/5
                  backdrop-blur-xl

                  p-8

                  hover:border-cyan-400/20
                  hover:bg-white/10
                  hover:-translate-y-2

                  transition-all
                  duration-500
                "
              >

                <div className="text-slate-400 mb-3">

                  {item.title}

                </div>

                <div className="text-4xl font-black mb-6">

                  {item.value}

                </div>

                {/* MINI CHART */}

                <div className="flex items-end gap-1 mt-6 h-16">

                  {[
                    20,
                    40,
                    30,
                    60,
                    50,
                  ].map(
                    (
                      h,
                      i
                    ) => (

                      <div
                        key={i}
                        style={{
                          height: `${h}px`,
                        }}
                        className="
                          flex-1
                          rounded-t-xl
                          bg-cyan-400/60
                        "
                      />

                    )
                  )}

                </div>

              </div>
            )
          )}

        </div>

        {/* RUNTIME LOGS */}

        <div
          className="
            rounded-[32px]

            border
            border-white/10

            bg-black/30
            backdrop-blur-xl

            p-8
            mt-8
          "
        >

          <div className="flex items-center justify-between mb-8">

            <h2 className="text-2xl font-black">

              Runtime Logs

            </h2>

            <div className="flex items-center gap-2 text-green-300 text-sm">

              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

              Streaming

            </div>

          </div>

          <div className="space-y-4 font-mono text-sm">

            <div className="text-green-400">

              ✓ Intent extraction completed

            </div>

            <div className="text-cyan-400">

              ✓ Runtime schema generated

            </div>

            <div className="text-purple-400">

              ✓ API orchestration validated

            </div>

            <div className="text-yellow-400">

              ✓ Deployment pipeline initialized

            </div>

          </div>

        </div>

        {/* EMPTY STATE */}

        <div
          className="
            rounded-[32px]

            border
            border-white/10

            bg-white/5
            backdrop-blur-xl

            p-16

            text-center

            mt-8
          "
        >

          <div className="text-6xl mb-6">

            ⚡

          </div>

          <h2 className="text-3xl font-black mb-4">

            No Runtime Deployments Yet

          </h2>

          <p className="text-slate-400">

            Generate your first enterprise AI runtime pipeline.

          </p>

        </div>

      </div>

    </div>
  );
}