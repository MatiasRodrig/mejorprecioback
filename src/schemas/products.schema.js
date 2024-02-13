import { z } from "zod"

export const productSchema = z.object({
    nombre: z.string({
        required_error: "El nombre es requerido",
    }).min(3, {
        message: "El nombre debe tener al menos 3 caracteres"
    }),
    description: z.string({
        required_error: "La descripción es requerida",
    }).min(10, {
        message: "La descripción debe tener al menos 10 caracteres"
    }),
    price: z.number({
        required_error: "El precio es requerido",
    }).min(1, {
        message: "El precio debe ser mayor a 0"
    })
}) 