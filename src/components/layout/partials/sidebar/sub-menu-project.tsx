import Link from 'next/link'
import React from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import { TbPointFilled } from 'react-icons/tb'

const SubMenuProject = () => {
    return (
        <nav className='space-y-2'>
            <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Projectos</span>
                <button className='cursor-pointer'>
                    <FaPlusCircle className='text-emerald-600' />
                </button>
            </div>
            <ul className='flex flex-col gap-2 ml-1'>
                {Array.from({ length: 2 }).map((t, index) => (
                    <Link href={"/"} key={index}
                        className='flex items-center gap-1'>
                        <TbPointFilled className='text-emerald-600' />
                        <span className="text-xs font-semibold text-slate-600">
                            Novos jogos
                        </span>
                    </Link>
                ))}
            </ul>
        </nav>
    )
}

export default SubMenuProject
