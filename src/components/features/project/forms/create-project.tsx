"use client"
import Loader from '@/components/global/custom/loader'
import { Button } from '@/components/global/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/global/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/global/ui/form'
import { Input } from '@/components/global/ui/input'
import { IMessageProps } from '@/core/message/message'
import { useCreateProject } from '@/hooks/project/create/create-project'
import React from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import { MdErrorOutline } from 'react-icons/md'
import { toast } from 'sonner'

const CreateProject = ({userUniversalId}:{userUniversalId: string}) => {
    const {
        form,
        handleForm,
        isPending,
        message
    } = useCreateProject(userUniversalId);
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
                    <FaPlusCircle className='text-[#064C61] hover:text-[#064c61d2] h-5 w-5' />
            </DialogTrigger>
            <DialogContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleForm)} className="w-full space-y-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='font-semibold'>Nome do workspace</FormLabel>
                                    <FormControl>
                                        <Input placeholder="ex: Minha empresa" {...field} />
                                    </FormControl>
                                    <FormMessage className='text-xs' />
                                </FormItem>
                            )}
                        />

                        <Button className='cursor-pointer bg-[#064C61] hover:bg-[#064c61d2]' disabled={isPending} type="submit">
                            {!isPending ? "Criar Workspace" :
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

export default CreateProject