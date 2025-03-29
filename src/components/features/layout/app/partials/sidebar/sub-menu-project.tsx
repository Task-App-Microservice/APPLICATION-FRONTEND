"use client"
import CreateProject from '@/components/features/project/forms/create-project'
import { ScrollArea } from '@/components/global/ui/scroll-area'
import { Skeleton } from '@/components/global/ui/skeleton'
import { useGetProjects } from '@/hooks/project/get-projects.hook'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import { TbPointFilled } from 'react-icons/tb'

const SubMenuProject = () => {
    const { data: session, status } = useSession();
    const { data, isLoading } = useGetProjects(session?.userUniversalId as string);
    return (
        <nav className='relative space-y-2'>
            {!isLoading && <div className="absolute top-0 left-0 right-0 w-full bg-white z-[3] flex items-center justify-between px-4 pb-2">
                <span className="text-sm text-slate-600">Projectos</span>
                <CreateProject userUniversalId={session?.userUniversalId as string} />
            </div>}
            <div className="">
                
                {status == "loading" && isLoading && [...Array(6)].map((_,index) => (
                    <div className="flex items-center gap-2" key={index}>
                        <Skeleton className='bg-slate-500 w-2 h-2 rounded-full' />
                        <Skeleton className='bg-slate-500 w-full h-2 ' />
                    </div>

                ))}

                <ScrollArea className='w-full h-[130px]'>
                    <ul className='flex flex-col gap-2 ml-1 pt-8 px-4'>
                        {data?.results && data?.results.map((project, index) => (
                            <Link href={`/project/${project.uuid}`} key={index}
                                className='flex items-center gap-1'>
                                <TbPointFilled className='text-emerald-600' />
                                <span className="text-xs font-semibold text-slate-600">
                                    {project.name}
                                </span>
                            </Link>
                        ))}
                    </ul>
                </ScrollArea>
            </div>
        </nav>
    )
}

export default SubMenuProject
