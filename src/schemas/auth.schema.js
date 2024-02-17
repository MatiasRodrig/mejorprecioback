import { z } from "zod"

export const registerSchema = z.object({
    nombre: z.string({
        required_error: "El nombre es requerido",

    }).min(3, {
        message: "El nombre debe tener al menos 3 caracteres"
    }),
    apellido: z.string({
        required_error: "El apellido es requerido",
    }).min(3, {
        message: "El apellido debe tener al menos 3 caracteres"
    }),
    email: z.string({
        required_error: "El correo es requerido",
    }).email({
        message: "El correo no es valido"
    }),
    password: z.string({
        required_error: "La contraseña es requerida",
    }).min(6, {
        message: "La contraseña debe tener al menos 6 caracteres"
    }),
    telefono: z.number({
        required_error: "El telefono es requerido",
    }).length(10, {
        message: "El telefono debe tener 10 digitos"
    })
})


export const loginSchema = z.object({
    email: z.string({
        required_error: "El correo es requerido",
    }).email({
        message: "El correo no es valido"
    }),
    password: z.string({
        required_error: "La contraseña es requerida",
    }).min(6, {
        message: "La contraseña debe tener al menos 6 caracteres"
    })
})