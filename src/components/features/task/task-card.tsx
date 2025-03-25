import { Separator } from '@/components/global/ui/separator'
import React from 'react'
import { ImAttachment } from 'react-icons/im'
import { IoIosCheckboxOutline } from 'react-icons/io'
import { TbMessage, TbPointFilled } from 'react-icons/tb'

const TaskCard = () => {
  return (
    <div className='shadow-md p-2 border rounded-md'>
      <div className="flex items-center gap-1 text-slate-600">
        <TbPointFilled className='' />
        <span className='text-xs'>Março, 20, 2014</span>
      </div>
      <div className="pl-1 space-y-2">
        <div className="space-y-[1px]">
          <h2 className="text-sm font-semibold">
            Ebraim sambo
          </h2>
          <p className="text-xs text-slate-600">
            Lorem ipsum dolor sit.
          </p>
        </div>

        <Separator />
        <div className="space-y-2">
          <div className="flex items-center gap-2  text-slate-600">
            <IoIosCheckboxOutline />
            <span className="text-xs">Listas</span>
          </div>
          <div className="grid grid-cols-6 gap-2">
            {Array.from({ length: 5 }).map((i, index) => (
              <div className="h-2 bg-emerald-600 rounded-md"></div>
            ))}
            <div className="h-2 bg-slate-600/10 rounded-md"></div>
          </div>
        </div>
        <Separator />
        <div className="flex items-center gap-2">
          <button className='flex items-center gap-1 border rounded-lg p-1 px-2 text-slate-600'>
            <ImAttachment className='h-3 w-3' />
            <span className="text-xs">12</span>
          </button>
          <button className='flex items-center gap-1 border rounded-lg p-1 px-2 text-slate-600'>
            <TbMessage className='h-3 w-3' />
            <span className="text-xs">12</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TaskCard
