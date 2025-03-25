import { Popover, PopoverContent, PopoverTrigger } from '@/components/global/ui/popover'
import { Separator } from '@/components/global/ui/separator'
import Link from 'next/link'
import React from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import { HiMiniLanguage } from 'react-icons/hi2'
import { IoIosLogOut } from 'react-icons/io'
import { TfiHeadphoneAlt } from 'react-icons/tfi'

const MenuUser = () => {
    return (
        <Popover>
            <PopoverTrigger className='cursor-pointer'>
                <div className="h-10 w-10 bg-slate-400/10 flex items-center justify-center border rounded-full">
                    <span className="font-bold">ES</span>
                </div>
            </PopoverTrigger>
            <PopoverContent className='mr-5 '>
                <div className="space-y-2">
                    <div className="flex items-center justify-center flex-col gap-1">
                        <div className="h-14 w-14 bg-slate-400/10 flex items-center justify-center border rounded-full">
                            <span className="font-bold">ES</span>
                        </div>
                        <h2 className="text-xs font-semibold">Ebraim Sambo</h2>
                        <h3 className='text-xs text-slate-600'>ebraimsambo@gmail.com</h3>
                    </div>
                    <Separator />
                    <div className="px-2 space-y-2">
                        <Link href={"/"}
                            className='flex items-center gap-2 text-slate-600'>
                            <FaRegUserCircle />
                            <span className="text-sm">
                                Perfil e configuração
                            </span>
                        </Link>
                        <Separator />
                        <Link href={"/"}
                            className='flex items-center gap-2 text-slate-600'>
                            <TfiHeadphoneAlt />
                            <span className="text-sm">
                                Centro de ajuda
                            </span>
                        </Link>
                        <Separator />
                        <Link href={"/"}
                            className='flex items-center gap-2 text-slate-600'>
                            <HiMiniLanguage />
                            <span className="text-sm">
                                Configuração de lingua
                            </span>
                        </Link>
                        <Separator />
                        <Link href={"/"}
                            className='flex items-center gap-2 text-slate-600'>
                            <IoIosLogOut />
                            <span className="text-sm">
                                Terminar sessão
                            </span>
                        </Link>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default MenuUser
