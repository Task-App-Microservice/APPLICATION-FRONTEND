"use client"
import Loader from '@/components/global/custom/loader'
import { Button } from '@/components/global/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/global/ui/form'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/global/ui/input-otp'
import { IMessageProps } from '@/core/message/message'
import { useVerificationAccount } from '@/hooks/auth/verification-account.hook'
import React from 'react'
import { MdErrorOutline } from 'react-icons/md'
import { toast } from 'sonner'

const VerificationAccount = () => {
    const {
        form,
        handleForm,
        isPending,
        message
    } = useVerificationAccount();

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
        <div className='max-w-[400px] w-full '>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleForm)} className="w-full space-y-6">
                    <FormField
                        control={form.control}
                        name="code"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Pine de confirmação</FormLabel>
                                <FormControl>
                                    <InputOTP  disabled={isPending} className='w-full' maxLength={6} {...field}>
                                        <InputOTPGroup>
                                            <InputOTPSlot index={0} />
                                            <InputOTPSlot index={1} />
                                            <InputOTPSlot index={2} />
                                            <InputOTPSlot index={3} />
                                            <InputOTPSlot index={4} />
                                            <InputOTPSlot index={5} />
                                        </InputOTPGroup>
                                    </InputOTP>
                                </FormControl>
                                <FormDescription>
                                    Por vafavor verifique o seu email se conta
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button className='cursor-pointer bg-emerald-600' disabled={isPending} type="submit">
                        {!isPending ? "Verificar conta" :
                            <>
                                <Loader atributes={{
                                    color: "#fff"
                                }} />
                                <span className="">Aguarde...</span>
                            </>}
                    </Button>
                </form>
            </Form>
        </div>
    )
}

export default VerificationAccount
