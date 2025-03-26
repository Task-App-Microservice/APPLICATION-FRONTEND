import z from "zod";

export const signUpSchema = z.object({
    email: z.string().nonempty("Campo obrigatorrio")
    .email("Formato de email invalido"),
    name: z.string().nonempty("Campo obrigatorrio"),
    password: z.string().nonempty("Campo obrigatorrio"),
    confirmPassword:  z.string().nonempty("Campo obrigatorrio"),
}).refine(({ password, confirmPassword}) => password === confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"]
})
