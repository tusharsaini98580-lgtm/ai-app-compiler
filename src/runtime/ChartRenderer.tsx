"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

type Props = {
  data: any[];
};

export default function ChartRenderer({
  data,
}: Props) {

  return (
   <div className="w-full min-h-[480px]">

      <ResponsiveContainer
        width="100%"
       height={480}
      >

        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#2563eb"
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}