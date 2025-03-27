"use client"
import React from 'react'
import Link from 'next/link';
import { FcGoogle } from "react-icons/fc";
import { Button } from '@/components/global/ui/button';
import { Separator } from '@/components/global/ui/separator';
import { Input } from '@/components/global/ui/input';
import LogoApp from '../../layout/app/partials/sidebar/logo';
import { useSignUp } from '@/hooks/auth/sign-up';
import Loader from '@/components/global/custom/loader';
import { toast } from 'sonner';
import { IMessageProps } from '@/core/message/message';
import { MdErrorOutline } from "react-icons/md";
const SignUpForm = () => {
    const {
        form,
        handleForm,
        isPending,
        message
    } = useSignUp();
    const handleMessagePopOut = ({ message, type }: IMessageProps) => {
        if (type === "error") {
            return toast(message, {
                style: {
                    background: "#FFC9C9",
                    color: "#E7000B"
                },
                duration: 80000,
                icon: <MdErrorOutline className='h-5 w-5' />
            });
        }

            return toast(message, {
                style: {
                    background: "#B9F8CF",
                    color: "#00A63E"
                },
                duration: 80000
            });

    };

    React.useEffect(() => {
        if (message) {
            handleMessagePopOut({ message: message?.message, type: message?.type });
        }
    }, [message]);
    return (
        <div className='max-w-[350px] w-full '>
            <form className='space-y-4' onSubmit={form.handleSubmit(handleForm)} >
                <div className="flex items-center justify-center w-full flex-col gap-1">
                    <LogoApp />
                    <p className="text-slate-600 font-medium text-center text-sm">
                        Faca login de forma rapida e segura.
                    </p>
                </div>
                <div className="space-y-1">
                    <Input placeholder='Ebraim Sambo'
                        disabled={isPending}
                        {...form.register("name")}
                    />
                    {form.formState.errors.name && (
                        <p className="text-red-500 pl-2 text-[10px] mt-1">
                            {form.formState.errors.name.message}
                        </p>
                    )}
                </div>
                <div className="space-y-1">
                    <Input placeholder='ebraimsambo@gmail.com'
                        disabled={isPending} {...form.register("email")}
                    />
                    {form.formState.errors.email && (
                        <p className="text-red-500 pl-2 text-[10px] mt-1">
                            {form.formState.errors.email.message}
                        </p>
                    )}
                </div>
                <div className="space-y-1">
                    <Input type='password'
                        disabled={isPending} {...form.register("password")}
                        placeholder='sua senha' />
                    {form.formState.errors.password && (
                        <p className="text-red-500 pl-2 text-[10px] mt-1">
                            {form.formState.errors.password.message}
                        </p>
                    )}
                </div>
                <div className="space-y-1">
                    <Input type='password'
                        disabled={isPending} {...form.register("confirmPassword")}
                        placeholder='repetir a sua senha' />
                    {form.formState.errors.confirmPassword && (
                        <p className="text-red-500 pl-2 text-[10px] mt-1">
                            {form.formState.errors.confirmPassword.message}
                        </p>
                    )}
                </div>
                <div className="space-y-1">
                    <Button size={"lg"}  disabled={isPending}  type='submit' className='bg-emerald-600 cursor-pointer w-full font-black py-4'>
                        {!isPending ? "Criar Conta" :
                            <Loader atributes={{
                                color: "#fff"
                            }} />}
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
                <Link href={'/auth/sign-in'} className='text-center text-xs text-slate-600 mt-2 hover:text-emerald-600' >
                    Tem uma conta? entrar
                </Link>
            </div>
        </div>
    )
}

export default SignUpForm