"use client"
import React from 'react'
import { FaNoteSticky } from "react-icons/fa6";
import Link from 'next/link';
import { FcGoogle } from "react-icons/fc";
import { Button } from '@/components/global/ui/button';
import { Separator } from '@/components/global/ui/separator';
import { Input } from '@/components/global/ui/input';
import LogoApp from '../../layout/app/partials/sidebar/logo';
const SignUpForm = () => {

    return (
        <div className='max-w-[350px] w-full '>
            <form className='space-y-4'>
                <div className="flex items-center justify-center w-full flex-col gap-1">
                    <LogoApp />
                    <p className="text-slate-600 font-medium text-center text-sm">
                        Faca login de forma rapida e segura.
                    </p>
                </div>
                <div className="space-y-1">
                    <Input placeholder='ebraimsambo@gmail.com' />
                </div>
                <div className="space-y-1">
                    <Input type='password' placeholder='sua senha' />

                </div>
                <div className="space-y-1">
                    <Button size={"lg"} type='submit' className='bg-emerald-600 cursor-pointer w-full font-black py-4'>
                        Entrar
                    </Button>

                </div>
            </form>
            <div className="flex gap-1 itmes-center justify-between w-ful my-2">
                <Separator className='w-full' />
            </div>
            <div className="space-y-2">
                <button className='w-full cursor-pointer border font-black flex items-center justify-center gap-1 px-4 py-2 rounded-sm'>
                    <FcGoogle className='h-6 w-6' />  <span className='mt-1 text-sm text-slate-600'>Continuar com Google</span>
                </button>
            </div>
            <div className="text-center mt-2">
                <Link href={'/auth/register'} className='text-center text-xs text-slate-600 mt-2 hover:text-primary' >
                    Tem uma conta?
                </Link>
            </div>
        </div>
    )
}

export default SignUpForm