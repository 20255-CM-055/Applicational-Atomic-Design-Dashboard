"use client";

import dynamic from "next/dynamic";

const SalesChart = dynamic(
  () =>
    import("@/components/organisms/SalesChart").then(
      (mod) => mod.SalesChart
    ),
  { ssr: false }
);

export function DashboardClient() {
  return <SalesChart />;
}
