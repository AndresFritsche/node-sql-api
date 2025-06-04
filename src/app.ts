import express from "express";
import cors from "cors";
import productRoutes from "./routes/products.routes";

const app = express();

app.use(productRoutes);
app.use(cors());
app.use(express.json());

export default app;
