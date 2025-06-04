import { Router } from "express";
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.controllers";

const router = Router();

router.get("/products", getProducts);
router.get("/product/:id", getProduct);
router.post("/product/create", createProduct);
router.put("/product/update/:id", updateProduct);
router.delete("/product/delete/:id", deleteProduct);

export default router;
