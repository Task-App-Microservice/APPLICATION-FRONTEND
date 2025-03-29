"use client"

import CreateTask from '@/components/features/task/forms/create-task'
import { Skeleton } from '@/components/global/ui/skeleton'
import { formateDate } from '@/helpers/date.help'
import { useGetProject } from '@/hooks/project/get-projects.hook'
import { useSession } from 'next-auth/react'
import React from 'react'
import { CiCalendar } from 'react-icons/ci'
import { FiPlus, FiSearch } from 'react-icons/fi'
import { IoFilterOutline } from 'react-icons/io5'

const ProjectHeader = ({ projectUuid }: { projectUuid: string }) => {
    const {data: session} = useSession()
    const { data, isLoading } = useGetProject(projectUuid)
    return (
        <div className='py-4'>
            <div className="flex justify-between items-center">
                {data?.project && (
                    <div className="space-y-2">
                        <h1 className='text-lg font-bold'>Workspace {data?.project.name}</h1>
                        <p className="text-xs text-slate-600">Espaco criado em {formateDate(data?.project?.createdAt as Date)}</p>
                    </div>
                )}
                {isLoading &&(
                    <div className="">
                         <Skeleton className='bg-slate-400/10 w-[320px] h-[40px] ' />
                    </div>
                )}

                <div className="">
                    <div className="flex items-center gap-2">
                        <div className="border max-w-[200px] h-8 w-full rounded-md px-2 bg-slate-400/10  flex items-center gap-2">
                            <button>
                                <FiSearch className='text-slate-600' />
                            </button>
                            <input
                                type="text"
                                className='outline-none border-none w-full h-full bg-transparent text-xs'
                                placeholder='Pesquisar por tarfeas'
                            />
                        </div>

                        <button className='border h-8 w-8 flex items-center justify-center rounded-lg cursor-pointer'>
                            <IoFilterOutline className='h-5 w-5' />
                        </button>
                        <button className='border h-8 w-8 flex items-center justify-center rounded-lg cursor-pointer'>
                            <CiCalendar className='h-5 w-5' />
                        </button>
                        <CreateTask data={{
                            projectId: data?.project.id as number,
                            userId: Number(session?.clientId),
                            userUniversalId: session?.userUniversalId as string
                        }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectHeader
