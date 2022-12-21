import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import pool from "./db";
import cors from "cors";

dotenv.config();
const app = express();

app.use(
  cors({
    credentials: true,
    allowedHeaders: "*",
    methods: ["GET", "POST", "OPTIONS"],
    origin: "*",
    preflightContinue: false,
  })
);
app.use(bodyParser.json());
app.get("/", async (req, res) => {
  res.send(
    "hello dear if you see this message ,that`s mean api is working correctly"
  );
});

app.get("/todos", async (req, res) => {
  const con = await pool.getConnection();
  const query = "SELECT * from todo";
  const result = await con.query(query);
  res.send(result);
});

app.post("/addTodo", async (req, res) => {
  const { data } = req.body;
  const con = await pool.getConnection();
  const postQuery = `INSERT INTO todo(name) VALUES (?)`;
  const getQuery = `SELECT * from todo`;
  await con.query(postQuery, [data]);
  const result = await con.query(getQuery, [data]);
  res.send(result);
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server listen in ${port}`);
});
