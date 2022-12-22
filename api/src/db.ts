import mariadb from "mariadb";

const host =
  process.env.DB_HOST == undefined ? "172.28.0.2" : process.env.DB_HOST;
const password = process.env.DB_PASSWORD;
const user = process.env.DB_USER;

const pool = mariadb.createPool({
  host,
  user,
  password,
  database: "todos",
  port: 3306,
});

export default pool;
