import AppLoyout from "@/components/features/layout/app/index.loyout";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppLoyout>
        {children}
    </AppLoyout>
  );
}
