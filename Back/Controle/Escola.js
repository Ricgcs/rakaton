const { conexao } = require("../Conexao/conexao");

const setDiretor = async ({ nome, email, senha }) => {
  const con = await conexao();
  console.log(nome, email, senha);
  const sql = "INSERT INTO escola (Nome, Email, Senha) VALUES (?,?,?)";

  try {
    const response = await con.query(sql, [nome, email, senha]);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const codEscola = async ({nome}) =>{
    const con = await conexao();
  console.log(nome);
  const sql = "SELECT Cod from escola where Nome = ?";

  try {
    const response = await con.query(sql, [nome]);

    return response;
  } catch (error) {
    console.log(error);
  }
    

};

const login = async ({ nome, senha }) => {
  const con = await conexao();

  try {
    const sql = "SELECT * FROM escola";
    const rows = await con.query(sql);

    for (let a = 0; a < rows[0].length; a++) {
      if (rows[0][a].Nome === nome && rows[0][a].Senha === senha) {
        return 1;
      }
    }
  } catch (error) {
    console.error("Erro no select_user", error);
  }
};

module.exports = { setDiretor, login, codEscola };
