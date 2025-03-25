import React from 'react'
import Sidebar from './partials/sidebar/sidebar';

const AppLoyout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex gap-2 w-full h-screen">
      <Sidebar />
      <div className="flex flex-col w-full h-full">
        <main className="flex-grow">{children}</main>
      </div>
    </div>
  );
}

export default AppLoyout;
