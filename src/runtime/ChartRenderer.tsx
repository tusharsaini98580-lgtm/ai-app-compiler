"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const lineData = [
  { day: "Mon", patients: 40 },
  { day: "Tue", patients: 55 },
  { day: "Wed", patients: 48 },
  { day: "Thu", patients: 70 },
  { day: "Fri", patients: 90 },
  { day: "Sat", patients: 60 },
];

const revenueData = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 6500 },
  { month: "Mar", revenue: 7200 },
  { month: "Apr", revenue: 8900 },
];

const pieData = [
  { name: "Active", value: 80 },
  { name: "Inactive", value: 20 },
];

const COLORS = [
  "#06b6d4",
  "#8b5cf6",
];

export default function ChartRenderer() {
  return (
    <div className="space-y-8">
      {/* LINE CHART */}

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-6 text-white">
          Patients Per Day
        </h2>

        <div className="h-[300px]">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <LineChart data={lineData}>
              <CartesianGrid stroke="#1e293b" />

              <XAxis dataKey="day" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="patients"
                stroke="#06b6d4"
                strokeWidth={4}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* BAR CHART */}

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-6 text-white">
          Monthly Revenue
        </h2>

        <div className="h-[300px]">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <BarChart data={revenueData}>
              <CartesianGrid stroke="#1e293b" />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="revenue"
                fill="#8b5cf6"
                radius={[10, 10, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* PIE CHART */}

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-6 text-white">
          Runtime Usage
        </h2>

        <div className="h-[300px]">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                outerRadius={100}
                label
              >
                {pieData.map(
                  (
                    entry,
                    index
                  ) => (
                    <Cell
                      key={index}
                      fill={
                        COLORS[index]
                      }
                    />
                  )
                )}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}