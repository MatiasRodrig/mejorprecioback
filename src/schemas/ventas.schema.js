import { z } from "zod"

export const ventaSchema = z.object({
    product: z.string({
        required_error: "El producto es requerido",
    }),
    fecha: z.string({
        required_error: "La fecha es requerida",
    }).min(6, {
        message: "La fecha debe tener al menos 6 caracteres"
    }),
    precio: z.number({
        required_error: "El total es requerido",
    }).min(1, {
        message: "El total debe ser mayor a 0"
    }),
    description: z.string({
        required_error: "La descripción es requerida",
    }).min(10, {
        message: "La descripción debe tener al menos 10 caracteres"
    })
})