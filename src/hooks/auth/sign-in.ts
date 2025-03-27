import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createAxiosInstance } from "@/config/axios/axios.instance";
import React from "react";
import { IMessageProps } from "@/core/message/message";
import { AxiosError } from "axios";
import { signInSchema } from "@/schemas/auth/sign-in.schema";
import { signIn } from "next-auth/react";
import { ApiResponse } from "@/core/api/response";
import { DataSession } from "@/core/auth/session.core";

const axios = createAxiosInstance();

export function useSignIn() {
    const [message, setMessage] = React.useState<IMessageProps | null>(null);
    const [isPending, setIsPending] = React.useState(false);
    const form = useForm<z.infer<typeof signInSchema>>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    async function handleForm(body: z.infer<typeof signInSchema>) {
        console.log(body);
        setIsPending(true);
        setMessage(null);

        try {
            const res = await axios.post<ApiResponse<{dataSession: DataSession}>>("/auth/login", body).then((res)=>res.data);
            console.log(res);
            console.log(res.data.dataSession.clientId);
            
            if(res.data.dataSession){
                setIsPending(true);

                setMessage({ message: "Login efetuado com sucesso", type: "success" });

                await signIn("credentials", {
                    ...res.data.dataSession,
                    callbackUrl: "/",
                    redirect: true
                })
            }
        } catch (error) {
            console.log(error);
            handleErrors(error);
        } finally {
            setIsPending(false);
        }
    }

    function handleErrors(error: unknown) {
        if (error instanceof AxiosError) {
            if (error.code === "ERR_NETWORK") {
                setMessage({ message: "Erro de conexão. Verifique sua internet e tente novamente.", type: "error" });
            } else if (error.response?.status === 400) {
                setMessage({ message: error.response.data?.detail || "Ouve um problema ao enviar os dados!", type: "error" });
            } else if (error.response?.status === 401) {
                setMessage({ message: error.response.data?.detail || "Email ou senha estão incorrectos!", type: "error" });
            } else if (error.response?.status === 404) {
                setMessage({ message: "Usuário não encontrado. Verifique as informações.", type: "error" });
            } else if (error.response?.status === 500) {
                setMessage({ message: "Erro no servidor. Tente novamente mais tarde.", type: "error" });
            } else {
                setMessage({ message: "Erro inesperado. Tente novamente.", type: "error" });
            }
        } else {
            setMessage({ message: "Erro inesperado. Tente novamente.", type: "error" });
        }
    }

    return {
        form,
        handleForm,
        isPending,
        message
    };
}