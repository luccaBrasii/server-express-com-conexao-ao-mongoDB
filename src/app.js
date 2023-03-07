import express from "express";
import connectDB from './config/db.js';



connectDB()


const app = express();

const livros = [
  { id: 1, "titulo": "senhor dos anéis" },
  { id: 2, "titulo": "toinha tonhao" }
]

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/livros", (req, res) => {
  res.json(livros)
});

export default app;
