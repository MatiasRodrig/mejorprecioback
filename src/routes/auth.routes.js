import { Router } from "express";
import { login, register, logout, verifyToken } from '../controllers/auth.controller.js'
import { validator } from '../middlewares/validator.middleware.js'
import { registerSchema, loginSchema } from '../schemas/auth.schema.js'


const router = Router()

router.post("/register", validator(registerSchema), register);
router.post("/login", validator(loginSchema), login);
router.get("/verify", verifyToken);
router.post("/logout", logout);

export default router;