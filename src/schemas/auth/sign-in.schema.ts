import z from "zod";

export const signInSchema = z.object({
    email: z.string().nonempty("Campo obrigatorrio")
    .email("Formato de email invalido"),
    password: z.string().nonempty("Campo obrigatorrio")
})
