import React from 'react'
import Image from 'next/image';
const AuthLoyout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="relative">
        <Image src={"/images/image-s.jpg"} priority fill alt='BANNER' />
      </div>
      <main className="flex items-center justify-center h-screen">
        {children}
      </main>
    </div>
  );
}

export default AuthLoyout;
