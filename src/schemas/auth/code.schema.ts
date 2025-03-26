import z from "zod";

export const CodeVerificationSchema = z.object({
    code: z.string().min(6, {
        message: "Tens de inserir o codigo de 6 numeros para confirmar a sua conta.",
    }),
})
