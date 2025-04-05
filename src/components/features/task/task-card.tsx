import { Separator } from '@/components/global/ui/separator'
import { Task } from '@/core/task/task.core'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Clock } from 'lucide-react'
import React from 'react'
import { ImAttachment } from 'react-icons/im'
import { TbMessage, TbPointFilled } from 'react-icons/tb'

const TaskCard = ({ task }: { task: Task }) => {
  const isToday = (date: Date) => new Date(date) < new Date();
  return (
    <div className='shadow-md p-2 border rounded-md'>
      <div className="flex items-center gap-1 text-slate-600">
        <TbPointFilled className='' />
        <span className='text-xs capitalize'>
          {format(task.createdAt, 'MMMM d', { locale: ptBR })}
        </span>
      </div>
      <div className="pl-1 space-y-2">
        <div className="space-y-[1px]">
          <h2 className="text-sm font-semibold">
            {task.title}
          </h2>
          <p className="text-xs text-slate-600">
            {task.description || "Sem descricao"}
          </p>
        </div>

        <Separator />
        <div className="space-y-2">
          {task.dueDate && (
            <div className={`flex items-center gap-2 ${isToday(task.dueDate) ? "text-slate-600" : "text-red-400"}`}>
              <Clock className='h-4 w-4' />
              <span className="text-xs capitalize">
                {format(task.dueDate, 'MMMM d', { locale: ptBR })}
              </span>
            </div>
          )}
          <div className="grid grid-cols-6 gap-2">
            {Array.from({ length: 5 }).map((i, index) => (
              <div className="h-2 bg-[#064C61] hover:bg-[#064c61d2] rounded-md" key={index}></div>
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
