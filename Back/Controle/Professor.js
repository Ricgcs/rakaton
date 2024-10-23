import { conexao } from "../Conexao/conexao";

const con = await conexao();

export const setProfessor = async ({nome, email, senha}) =>
{
console.log(nome, email, senha, regiao);
const sql = "INSERT INTO escola (Nome, Email, Senha) VALUES (?,?,?)"

try{
const response = await con.query(sql,[nome,email,senha]);
console.log|(response)
return response;
}

catch(error){
console.log(error)
}
}


export const login = async (cod, nome, senha) => {
 
    try {
        const sql = "SELECT * FROM cliente";
        const rows = await con.query(sql); 
        
        let a;
let b = 0;


       for(a = 0; a < rows[0].length ;a++){

      if(rows[0][a].Empresa_Cod_empresa == cod && rows[0][a].Nome == nome && rows[0][a].Senha == senha){
       
    return 1;
      }
       }

    } catch (error) {
        console.error("Erro no select_user", error);
      
    }
}