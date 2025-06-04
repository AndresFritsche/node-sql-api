import { Request, Response } from "express";
import { getConnection } from "../database/connection";
import mssql from "mssql";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const pool = await getConnection();
    const result = await pool?.request().query("SELECT * FROM products");

    if (!result) {
      res.send(400).json({ message: "no product found" });
    }
    res.json(result);
  } catch (error) {
    console.error(error);
  }
};

export const getProduct = async (req: Request, res: Response) => {
  res.send("finding product");
};
export const createProduct = async (req: Request, res: Response) => {
  try {
    const pool = await getConnection();
    const result = await pool
      ?.request()
      .input("name", mssql.VarChar, req.body.name)
      .input("price", mssql.Decimal(), req.body.price)
      .input("stock", mssql.Int(), req.body.stock)
      .input("description", mssql.Text(), req.body.description)
      .query(
        "INSERT INTO products (name, price, stock, description) VALUES (@name, @price, @stock, @description); SELECT SCOPE_IDENTITY() AS id;"
      );
      if(!req.body.name || !req.body.price || !req.body.stock || !req.body.description){
        res.status(400).json({message: 'error creating product'})
      }
      if(typeof req.body.price != 'number' || req.body.price <= 0){
        res.status(400).json({message: 'enter a number greater than 0'})
      }

    res.status(201).json({
      id: result?.recordset[0].id,
      name: req.body.name,
      price: req.body.price,
      stock: req.body.stock,
      description: req.body.description,
    });

    if (!result) {
      res.status(400).json("failed creating product");
    }
    res.json(result);
  } catch (error) {
    console.error(error);
  }
};
export const updateProduct = async (req: Request, res: Response) => {
  res.send("creating product");
};
export const deleteProduct = async (req: Request, res: Response) => {
  res.send("delete product");
};
