import z from "zod";

export const CreateTaskSchema = z.object({
    title: z.string().nonempty("Campo obrigatorrio")
})
