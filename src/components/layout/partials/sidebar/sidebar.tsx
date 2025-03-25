import React from 'react'
import LogoApp from './logo'
import { linkData } from './data/links-side-bar'
import Link from 'next/link'
import { Separator } from '@/components/global/ui/separator'
import { Button } from '@/components/global/ui/button'
import SubMenuProject from './sub-menu-project'

const Sidebar = () => {
  return (
    <aside className='w-full max-w-[240px] border'>
      <div className="flex flex-col justify-between h-screen">
        <div className="p-4 space-y-6">
          <LogoApp />
          <nav className='pl-2 mt-4 space-y-4'>
            <Separator />
            <ul className='flex flex-col gap-4'>
              {linkData.map((link) => (
                <Link href={link.path} key={link.label}
                  className='flex items-center gap-1 text-slate-600 hover:text-emerald-600 '>
                  <link.icon className='h-6 w-6' />
                  <span className="text-sm font-semibold">
                    {link.label}
                  </span>
                </Link>
              ))}
            </ul>
            <Separator />
            <SubMenuProject />
          </nav>
        </div>
        <div className="p-4 space-y-4">
          <div className="text-center space-y-2">
            <div className="h-24 w-full bg-emerald-600 rounded-t-xl"></div>
            <h2 className='font-semibold'>Maximize as tarfeas</h2>
            <p className="text-xs text-slate-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <Button className='w-full cursor-pointer bg-emerald-600'>
            Upgrade
          </Button>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
