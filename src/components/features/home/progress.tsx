import { Card, CardTitle } from '@/components/global/ui/card'
import { Progress } from '@/components/global/ui/progress'
import { Clock } from 'lucide-react'
import React from 'react'

const ProgressTask = () => {
    return (
        <Card className='px-8'>
            <CardTitle>Progresso de atividades</CardTitle>
            <div className='flex items-center gap-1'>
                <h2 className="text-5xl">40%</h2>
                <p className="text-slate-600 text-xs w-[30px]">Total ativdades</p>
            </div>
            <div className="grid grid-cols-3 gap-1">
                <div className="">
                    <Progress className="bg-purple-700" />
                    <p className="text-xs">50%</p>
                </div>
                <div className="">
                    <Progress className="bg-green-600" />
                    <p className="text-xs">50%</p>
                </div>
                <div className="">
                    <Progress className="bg-orange-600" />
                    <p className="text-xs">50%</p>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-2 px-2">
                <div className=" shadow-md flex items-center justify-between flex-col gap-4 p-4 rounded-2xl bg-slate-500/5">
                    <div className=" bg-purple-700 h-8 w-8 rounded-full flex items-center justify-center text-white">
                        <Clock className='h-4 w-4' />
                    </div>
                    <h2 className='text-xl font-semibold'>2</h2>
                    <p className="text-xs text-slate-600">Em progresso</p>
                </div>
                <div className="shadow-md flex items-center justify-between flex-col gap-4 p-4 rounded-2xl bg-slate-500/5">
                    <div className="bg-green-600 h-8 w-8 rounded-full flex items-center justify-center text-white">
                        <Clock className='h-4 w-4' />
                    </div>
                    <h2 className='text-xl font-semibold'>2</h2>
                    <p className="text-xs text-slate-600">Em progresso</p>
                </div>
                <div className="shadow-md flex items-center justify-between flex-col gap-4 p-4 rounded-2xl bg-slate-500/5">
                    <div className="bg-orange-600 h-8 w-8 rounded-full flex items-center justify-center text-white">
                        <Clock className='h-4 w-4' />
                    </div>
                    <h2 className='text-xl font-semibold'>2</h2>
                    <p className="text-xs text-slate-600">Em progresso</p>
                </div>
            </div>
        </Card>
    )
}

export default ProgressTask
