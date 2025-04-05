import z from "zod";

export const CreateTaskSchema = z.object({
    title: z.string().nonempty("Campo obrigatorrio"),
    description: z.string().optional(),
    dueDate: z.date().optional().refine((date) => !date || date > new Date(), {
        message: "A data deve ser no futuro",
      }),
})
