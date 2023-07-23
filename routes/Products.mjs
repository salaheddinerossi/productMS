import express from "express";
import { getProducts,addProduct,deleteProduct } from "../controllers/Products.mjs";
const router = express.Router();

router.get("/", getProducts);
router.post("/add", addProduct);
router.delete('/products/:id', deleteProduct);

export default router


