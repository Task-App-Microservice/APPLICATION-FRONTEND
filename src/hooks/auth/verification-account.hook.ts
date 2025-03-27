import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createAxiosInstance } from "@/config/axios/axios.instance";
import React from "react";
import { IMessageProps } from "@/core/message/message";
import { AxiosError } from "axios";
import { CodeVerificationSchema } from "@/schemas/auth/code.schema";

const axios = createAxiosInstance();

export function useVerificationAccount() {
    const [message, setMessage] = React.useState<IMessageProps | null>(null);
    const [isPending, setIsPending] = React.useState(false);
    const form = useForm<z.infer<typeof CodeVerificationSchema>>({
        resolver: zodResolver(CodeVerificationSchema),
        defaultValues: {
            code: ""
        }
    });

    async function handleForm(body: z.infer<typeof CodeVerificationSchema>) {
        console.log(body);
        setIsPending(true);
        setMessage(null);

        try {
            const res = await axios.post("/auth/verification/account", body);
            console.log(res);
            setMessage({ message: "A sua conta foi verificada, aguarde", type: "success" });
            window.location.assign("/sign-in");
            return res;
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
                setMessage({ message: error.response.data?.detail || "Os dados enviados estão sendo replicados!", type: "error" });
            } else if (error.response?.status === 409) {
                form.setError("code", {
                    type: "custom",
                    message: "Já existe um usuário registrado com este e-mail",
                });
                setMessage({ message: error.response.data?.detail || "Os dados enviados estão sendo replicados!", type: "error" });
            } else if (error.response?.status === 404) {
                setMessage({ message:  error.response.data?.message || "Codigo errado, tente novamente.", type: "error" });
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