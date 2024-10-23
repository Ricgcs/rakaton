const { conexao } = require("../Conexao/conexao");

const setAluno = async ({ nome, email, senha }) => {
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

const login = async (cod, nome, senha) => {
  const con = await conexao();

  try {
    const sql = "SELECT * FROM cliente";
    const rows = await con.query(sql);

    for (let a = 0; a < rows[0].length; a++) {
      if (rows[0][a].Empresa_Cod_empresa === cod && rows[0][a].Nome === nome && rows[0][a].Senha === senha) {
        return 1;
      }
    }
  } catch (error) {
    console.error("Erro no select_user", error);
  }
};

module.exports = { setAluno, login };
a