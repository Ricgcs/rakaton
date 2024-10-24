const { conexao } = require("../Conexao/conexao");

const setSala = async ({ Escola_Cod, nome, capacidade }) => {
  const con = await conexao();
  console.log(Escola_Cod ,nome, capacidade);
  const sql = "INSERT INTO salas (Escola_Cod, Nome, Capacidade) VALUES (? , ? , ?)";

  try {
    const response = await con.query(sql, [Escola_Cod, nome, capacidade]);
    console.log(response);
    return response;
  } 
  catch (error)
   {
    console.log(error);
  }
};


const codSala = async ({nome, cod}) =>{
  const con = await conexao();
console.log(nome);
const sql = "SELECT Cod from salas where Escola_Cod = ? && Nome = ?";

try {
  const response = await con.query(sql, [cod, nome]);
console.log(response[0][0].Cod)
  return response[0][0].Cod;
} catch (error) {
  console.log(error);
}
  

};

const mostrarSalas = async ({ cod }) => {
  const con = await conexao();

  try {
    const sql = "SELECT Nome FROM salas WHERE Escola_Cod = ?";
    const [rows] = await con.query(sql, [cod]);  // Pegue apenas o conjunto de resultados
    return rows;  // Retorne diretamente as linhas
  } catch (error) {
    console.error("Erro ao buscar salas", error);
    throw error;
  }
};

module.exports = {setSala, mostrarSalas, codSala};
