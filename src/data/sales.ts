import { SalesRecord } from "@/lib/types";

export const salesData: Record<number, SalesRecord[]> = {
  2022: [
    { quarter: "Q1", sales: 12000 },
    { quarter: "Q2", sales: 15000 },
    { quarter: "Q3", sales: 17000 },
    { quarter: "Q4", sales: 14000 }
  ],
  2023: [
    { quarter: "Q1", sales: 18000 },
    { quarter: "Q2", sales: 20000 },
    { quarter: "Q3", sales: 22000 },
    { quarter: "Q4", sales: 21000 }
  ],
  2024: [
    { quarter: "Q1", sales: 25000 },
    { quarter: "Q2", sales: 27000 },
    { quarter: "Q3", sales: 30000 },
    { quarter: "Q4", sales: 28000 }
  ]
};
