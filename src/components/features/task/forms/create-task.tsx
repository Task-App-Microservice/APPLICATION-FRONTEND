"use client"
import Loader from '@/components/global/custom/loader'
import { Button } from '@/components/global/ui/button'
import { Calendar } from '@/components/global/ui/calendar'
import { Dialog, DialogContent, DialogTrigger } from '@/components/global/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/global/ui/form'
import { Input } from '@/components/global/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/global/ui/popover'
import { Textarea } from '@/components/global/ui/textarea'
import { IMessageProps } from '@/core/message/message'
import { format } from "date-fns"
import { useCreateTask } from '@/hooks/task/create/create-task'
import { cn } from '@/lib/utils'
import { CalendarIcon } from 'lucide-react'
import React from 'react'
import { FiPlus } from 'react-icons/fi'
import { MdErrorOutline } from 'react-icons/md'
import { toast } from 'sonner'
import { ptBR } from "date-fns/locale";

interface Props {
    data: {
        userId: number;
        projectId: number;
        userUniversalId: string
        projectCuid: string
    }
}
const CreateTask = ({ data }: Props) => {
    const [date, setDate] = React.useState<Date>()
    const {
        form,
        handleForm,
        isPending,
        message
    } = useCreateTask({ ...data });
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
                                    <FormControl>
                                        <input 
                                        className='text-md outline-none border-none'
                                        placeholder="Titulo da tarefa..." {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <textarea 
                                        disabled={isPending || !form.watch("title")}
                                        className='text-xs outline-none border-none resize-none'
                                        placeholder="Descricao" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="dueDate"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button
                                                 disabled={isPending || !form.watch("title")}
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-[140px] justify-start text-left font-normal cursor-pointer border",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                                    {field.value ? format(field.value, "PPP",{ locale: ptBR }) : <span>Vecimento</span>}
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0">
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    locale={ptBR}
                                                    disabled={(date) => date < new Date()} // Desabilita datas anteriores a hoje
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button className='cursor-pointer bg-[#064C61] hover:bg-[#064c61d2]' disabled={isPending || !form.watch("title")} type="submit">
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