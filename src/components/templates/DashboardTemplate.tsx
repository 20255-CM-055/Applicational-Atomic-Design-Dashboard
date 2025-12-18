type Props = {
  children: React.ReactNode;
};

export function DashboardTemplate({ children }: Props) {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">Sales Dashboard</h1>
      {children}
    </div>
  );
}
