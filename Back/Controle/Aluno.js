const { conexao } = require("../Conexao/conexao");

const setAluno = async ({ Escola_Cod, nome, ano, sala, senha }) => {
  const con = await conexao();
  console.log(nome,  senha);
  const sql = "INSERT INTO aluno (Escola_Cod, Nome, Ano, sala, senha) VALUES (? , ? , ? , ?, ?)";

  try {
    const response = await con.query(sql, [Escola_Cod, nome, ano, sala, senha]);
    console.log(response);
    return response;
  } 
  catch (error)
   {
    console.log(error);
  }
};



const alunosSala = async ({cod, sala}) => {
  const con = await conexao();
console.log({cod, sala})
  try {
    const sql = "SELECT Nome FROM aluno where Escola_Cod = ? && sala = ?";
    const rows = await con.query(sql,[cod, sala]);
   
    return rows[0];
    
  } catch (error) {
    console.error("Erro no select_user", error);
  }
};

const loginAluno = async (cod, nome, senha) => {
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


const codAluno = async ({nome, cod}) =>{
  const con = await conexao();
console.log(nome);
const sql = "SELECT Cod from aluno where Escola_Cod = ? && Nome = ?";

try {
  const response = await con.query(sql, [cod, nome]);

  return response;
} catch (error) {
  console.log(error);
}
  

};
module.exports = { setAluno, alunosSala, codAluno};
