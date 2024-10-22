import mysql from "mysql2/promise";

export const conexao = async()=>{
if(global.conectar && global.conectar.state != "disconected"){
    return global.conectar;
}

const con = await mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"ricardo",
    database:"chamada"
});

console.log("Funcionou");
global.conectar = con;
return con;
}