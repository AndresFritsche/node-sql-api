import { Request, Response } from "express";
import { getConnection } from "../database/connection";

export const getProducts = async (req: Request, res: Response) => {
  const pool = await getConnection()
};
export const getProduct = async (req: Request, res: Response) => {
  res.send("finding product");
};
export const createProduct = async (req: Request, res: Response) => {
  res.send("creating product");
};
export const updateProduct = async (req: Request, res: Response) => {
  res.send("creating product");
};
export const deleteProduct = async(req: Request, res: Response) => {
  res.send("delete product");
};
