const mysql = require("mysql2/promise");

const conexao = async () => {
  if (global.conectar && global.conectar.state !== "disconnected") {
    return global.conectar;
  }

  const con = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "chamada",
  });

  console.log("Funcionou");
  global.conectar = con;
  return con;
};

module.exports = { conexao };
