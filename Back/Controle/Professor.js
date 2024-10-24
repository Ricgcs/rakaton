const { conexao } = require("../Conexao/conexao");

const setProfessor = async ({ Escola_Cod, nome, materia, email, senha,  }) => {
  const con = await conexao();
  console.log({ Escola_Cod, nome, materia, email, senha,  });
  const sql = "INSERT INTO professor (Escola_Cod, Nome, Materia, email, senha) VALUES (? , ? , ? , ?,  ?)";

  try {
    const response = await con.query(sql, [Escola_Cod, nome, materia, email, senha]);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const codProf = async ({nome, cod}) =>{
  const con = await conexao();
console.log(nome);
const sql = "SELECT Cod from professor where Escola_Cod = ? && Nome = ?";

try {
  const response = await con.query(sql, [cod, nome]);
  console.log(response[0][0].Cod);
  return response[0][0].Cod;
} catch (error) {
  console.log(error);
}
  

};

const loginProfessor = async ({cod, nome, senha}) => {
  const con = await conexao();

  try {
    const sql = "SELECT * FROM professor where Escola_Cod = ? && Nome = ? && senha = ?";
    const rows = await con.query(sql,[cod, nome, senha]);
    console.log(rows);
    console.log(cod, nome, senha)
    for (let a = 0; a < rows[0].length; a++) {
      if (rows[0][a].Escola_Cod === cod && rows[0][a].Nome === nome && rows[0][a].senha === senha) {
        return 1;
      }
    }
  } catch (error) {
    console.error("Erro no select_user", error);
  }
};

module.exports = { setProfessor, loginProfessor, codProf };
