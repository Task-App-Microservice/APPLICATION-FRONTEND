import React from 'react'
import Sidebar from './partials/sidebar/sidebar';
import Header from './partials/header/header';
import { ScrollArea } from '@/components/global/ui/scroll-area';

const AppLoyout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="relative flex flex-col w-full">
        <Header />
          <ScrollArea className='w-full h-[90vh]'>
            <main className="px-8 pt-24">
               {children}
            </main>
          </ScrollArea> 
      </div>
    </div>
  );
}

export default AppLoyout;
