import { conexao } from "../Conexao/conexao";

const con = await conexao();

export const cadastroEscola = async (nome, email, senha, regiao) =>
{
console.log(nome, email, senha, regiao);
const sql = "INSERT INTO escola (Nome, email, senha, Regiao) VALUES (?,?,?,?,?)"

try{
const response = await con.query(sql,[nome,email,senha,regiao]);
console.log|(response)
return response;
}

catch(error){
console.log(error)
}
}


export const login = async (email, senha)=>{
    const sql = "select * from escola";

    try{
        const response = await con.query(sql,[email,senha]);
        if(response){
            return true;
        }
        else{
            return false;
        }
    }

    catch(error){
        console.log(error);
    }
}