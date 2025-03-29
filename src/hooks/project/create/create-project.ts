import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createAxiosInstance } from "@/config/axios/axios.instance";
import React from "react";
import { IMessageProps } from "@/core/message/message";
import { AxiosError } from "axios";
import { CreateProjectSchema } from "@/schemas/project/project.schema";
import { useQueryClient } from "@tanstack/react-query";

const axios = createAxiosInstance();

interface ErrorMessages {
    [key: number]: string;
    default: string;
}

const errorMessages: ErrorMessages = {
    400: "Os dados enviados estão inválidos",
    409: "Já existe um projeto com este nome",
    404: "Usuario não encontrado",
    500: "Erro no servidor. Tente novamente mais tarde",
    default: "Erro inesperado. Tente novamente",
};

export function useCreateProject(userUniversalId: string) {
    const queryClient = useQueryClient();
    const [message, setMessage] = React.useState<IMessageProps | null>(null);
    const [isPending, setIsPending] = React.useState(false);
    const form = useForm<z.infer<typeof CreateProjectSchema>>({
        resolver: zodResolver(CreateProjectSchema),
        defaultValues: {
            name: ""
        }
    });

    async function handleForm(body: z.infer<typeof CreateProjectSchema>) {
        setIsPending(true);
        setMessage(null);

        try {
            const response = await axios.post("/task/project", {
                ...body,
                referenceExternalId: userUniversalId,
            });

            form.reset();
            queryClient.invalidateQueries({
                queryKey: ["projects", userUniversalId],
            });
            setMessage({ message: "Projeto criado com sucesso", type: "success" });

            return response;
        } catch (error) {
            handleErrors(error);
        } finally {
            setIsPending(false);
        }

    }

    function handleErrors(error: unknown) {
        if (!(error instanceof AxiosError)) {
            setMessage({ message: errorMessages.default, type: "error" });
            return;
        }

        if (error.code === "ERR_NETWORK") {
            setMessage({ message: "Erro de conexão. Verifique sua internet", type: "error" });
            return;
        }

        const status = error.response?.status;
        const serverMessage = error.response?.data?.detail || errorMessages[status || "default"];

        if (status === 409) {
            form.setError("name", {
                type: "custom",
                message: "Já existe um projeto com este nome",
            });
        }

        setMessage({ message: serverMessage, type: "error" });
    }

    return {
        form,
        handleForm,
        isPending,
        message
    };
}