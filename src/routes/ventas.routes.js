import { Router } from "express";
import { getVentas, getVenta, createVentas, updateVentas, deleteVentas } from '../controllers/ventas.controller.js'
import { verifyToken } from "../controllers/auth.controller";
import { ventaSchema } from "../schemas/ventas.schema.js";
import { validator } from "../middlewares/validator.middleware.js"

const router = Router()

router.get('/ventas', verifyToken, getVentas)

router.get('/ventas/:id', verifyToken, getVenta)

router.post('/ventas', verifyToken, validator(ventaSchema), createVentas)

router.put('/ventas/:id', verifyToken, updateVentas)

router.delete('/ventas/:id', verifyToken, deleteVentas)


export default router
