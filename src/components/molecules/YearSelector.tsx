import { Button } from "@/components/atoms/Button";

type Props = {
  onChange: (year: number) => void;
};

export function YearSelector({ onChange }: Props) {
  return (
    <div className="flex gap-4">
      {[2022, 2023, 2024].map((year) => (
        <Button key={year} onClick={() => onChange(year)}>
          {year}
        </Button>
      ))}
    </div>
  );
}
