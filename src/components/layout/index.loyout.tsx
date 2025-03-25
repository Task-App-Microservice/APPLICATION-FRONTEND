import React from 'react'
import Sidebar from './partials/sidebar/sidebar';
import Header from './partials/header/header';

const AppLoyout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex w-full h-screen">
      <Sidebar />
      <div className="relative flex flex-col w-full h-full">
        <Header />
        <main className="p-8 pt-24 h-[1000vh]">{children}</main>
      </div>
    </div>
  );
}

export default AppLoyout;
