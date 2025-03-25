import AppLoyout from "@/components/layout/app/index.loyout";

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
