// import { DashboardTemplate } from "@/components/templates/DashboardTemplate";
// import { SalesChart } from "@/components/organisms/SalesChart";

// export default function DashboardPage() {
//   return (
//     <DashboardTemplate>
//       <SalesChart />
//     </DashboardTemplate>
//   );
// }


import dynamic from "next/dynamic";
import { DashboardTemplate } from "@/components/templates/DashboardTemplate";

const SalesChart = dynamic(
  () => import("@/components/organisms/SalesChart").then(mod => mod.SalesChart),
  { ssr: false }
);

export default function DashboardPage() {
  return (
    <DashboardTemplate>
      <SalesChart />
    </DashboardTemplate>
  );
}
