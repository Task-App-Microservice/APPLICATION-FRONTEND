import Link from 'next/link'
import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { IoIosHelpCircleOutline } from 'react-icons/io'
import MenuUser from './menu-user'
import { IoSettingsOutline } from "react-icons/io5";
const Header = () => {
    return (
        <header className='p-4 border-b absolute left-0 top-0 right-0 w-full bg-white z-[4]'>
            <div className="flex items-center justify-between">
                <div className="border max-w-[300px] h-9 w-full rounded-md px-2 bg-slate-400/10  flex items-center gap-2">
                    <button>
                        <FiSearch className='text-slate-600' />
                    </button>
                    <input
                        type="text"
                        className='outline-none border-none w-full h-full bg-transparent text-xs'
                        placeholder='Pesquisar por tarfeas ou projectos'
                    />
                </div>

                <div className="flex items-center gap-4">
                    <Link href={"/"}>
                        <IoSettingsOutline className='h-6 w-6 text-slate-600' />
                    </Link>
                    <Link href={"/"}>
                        <IoIosHelpCircleOutline className='h-7 w-7 text-slate-600' />
                    </Link>
                    <MenuUser />
                </div>
            </div>
        </header>
    )
}

export default Header