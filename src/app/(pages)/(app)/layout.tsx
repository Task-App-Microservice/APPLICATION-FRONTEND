import AppLoyout from "@/components/layout/index.loyout";

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
