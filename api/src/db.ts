import mariadb from "mariadb";
console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);
const pool = mariadb.createPool({
  host: "172.28.0.2",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "todos",
  port: 3306,
});

export default pool;
