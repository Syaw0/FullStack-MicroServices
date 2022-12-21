import mariadb from "mariadb";

const host =
  process.env.DB_HOST == undefined ? "172.28.0.2" : process.env.DB_HOST;
const pool = mariadb.createPool({
  host,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "todos",
  port: 3306,
});

export default pool;
