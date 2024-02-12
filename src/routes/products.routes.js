import { Router } from "express";
import { verifyToken } from "../controllers/auth.controller";
import { getProducts, createProducts, getProduct, updateProduct, deleteProduct } from '../controllers/products.controller.js'

const router = Router();

router.get("/products", verifyToken, getProducts);

router.get("/products/:id", verifyToken, getProduct);

router.post("/products", verifyToken, createProducts)

router.delete("/products/:id", verifyToken, deleteProduct)

router.put("/products/:id", verifyToken, updateProduct)




export default router;


