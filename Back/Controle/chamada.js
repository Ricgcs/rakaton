const { conexao } = require("../Conexao/conexao");

const setChamada = async ({ Data, Presente,Nome_aluno,Sala,professor,cod_escola }) => {
  const con = await conexao();
  
  console.log({Data, Presente,Nome_aluno,Sala,professor,cod_escola});

  const sql = "INSERT INTO chamada (Data, Presente,Nome_aluno,Sala,chamadacol, cod_escola) VALUES (? , ? , ? , ?,  ?, ?)";

  try {
    const response = await con.query(sql, [Data, Presente,Nome_aluno,Sala,professor,cod_escola]);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const mostrar = async ({cod, sala}) =>{
  const con = await conexao();
  console.log({cod, sala})
const sql = "SELECT Nome_aluno, Presente FROM chamada WHERE cod_escola = ? AND Sala = ?;";

try {
  const response = await con.query(sql, [cod, sala]);
  console.log(response[0]);
  return response[0];
} catch (error) {
  console.log(error);
}
  

};



module.exports = { setChamada,mostrar};
