import AuthLoyout from "@/components/features/auth/index.loyout";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthLoyout>
        {children}
    </AuthLoyout>
  );
}
