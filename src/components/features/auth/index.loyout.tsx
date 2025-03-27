import React from 'react'
import Image from 'next/image';
import image from "@/assets/image-s.jpg"
const AuthLoyout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="relative">
        <Image src={image} priority fill alt='BANNER' />
      </div>
      <main className="flex items-center justify-center h-screen">
        {children}
      </main>
    </div>
  );
}

export default AuthLoyout;
