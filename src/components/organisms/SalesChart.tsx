"use client";

import { useState } from "react";
import { YearSelector } from "@/components/molecules/YearSelector";
import { salesData } from "@/data/sales";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

export function SalesChart() {
  const [year, setYear] = useState(2024);

  return (
    <div className="space-y-6">
      <YearSelector onChange={setYear} />

      <BarChart width={500} height={300} data={salesData[year]}>
        <XAxis dataKey="quarter" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="sales" fill="#2563eb" />
      </BarChart>
    </div>
  );
}
