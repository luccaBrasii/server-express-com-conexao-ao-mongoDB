import express from "express";
import connectDB from './config/db.js';



connectDB()


const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/livros", (req, res) => {
  res.json(livros)
});

export default app;
