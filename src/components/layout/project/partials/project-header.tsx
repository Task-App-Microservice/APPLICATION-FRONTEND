import React from 'react'
import { CiCalendar } from 'react-icons/ci'
import { FiSearch } from 'react-icons/fi'
import { IoFilterOutline } from 'react-icons/io5'
import { MdOutlineCalendarToday } from 'react-icons/md'

const ProjectHeader = () => {
    return (
        <div className='py-4'>
            <div className="flex justify-between items-center">
                <div className="space-y-2">
                    <h1 className='text-lg font-bold'>Tarefas Sysconp</h1>
                    <p className="text-xs text-slate-600">Bem vindo ao projecto Ssconp</p>
                </div>

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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectHeader
