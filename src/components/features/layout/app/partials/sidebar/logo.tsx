import Link from 'next/link';
import React from 'react'
import { GrTasks } from 'react-icons/gr';
const LogoApp = () => {
    return (
        <Link href={"/"}>
            <div className="flex items-center gap-2">
                <GrTasks className='h-6 w-6 text-[#064C61]' />
                <span className='font-bold text-lg'>TaskFast</span>
            </div>
        </Link>
    )
}

export default LogoApp
