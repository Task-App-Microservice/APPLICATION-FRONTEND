"use client"
import Loader from '@/components/global/custom/loader'
import { Button } from '@/components/global/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/global/ui/dialog'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/global/ui/form'
import { Input } from '@/components/global/ui/input'
import { IMessageProps } from '@/core/message/message'
import { useCreateProject } from '@/hooks/project/create/create-project'
import { useCreateTask } from '@/hooks/task/create/create-task'
import React from 'react'
import { FiPlus } from 'react-icons/fi'
import { MdErrorOutline } from 'react-icons/md'
import { toast } from 'sonner'

interface Props{
    data:{
    userId: number;
    projectId: number;
    userUniversalId: string
}
}
const CreateTask = ({ data }: Props) => {
    const {
        form,
        handleForm,
        isPending,
        message
    } = useCreateTask({...data});
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
        <Dialog>
            <DialogTrigger className='cursor-pointer'>
                <button className='border h-8 w-8 flex items-center justify-center rounded-full shadow-md cursor-pointer bg-[#064C61] text-white'>
                    <FiPlus className='h-5 w-5' />
                </button>
            </DialogTrigger>
            <DialogContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleForm)} className="w-full space-y-6">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nome do workspace</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} />
                                    </FormControl>
                                    <FormDescription>This is your public display name.</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button className='cursor-pointer bg-[#064C61] hover:bg-[#064c61d2]' disabled={isPending} type="submit">
                            {!isPending ? "Criar Tarefa" :
                                <>
                                    <Loader atributes={{
                                        color: "#fff"
                                    }} />
                                    <span className="">Aguarde...</span>
                                </>}
                        </Button>
                    </form>

                </Form>
            </DialogContent>
        </Dialog>
    )
}

export default CreateTask