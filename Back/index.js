import express, { response } from "express";
import bodyParser from "body-parser";

const app = express();
const host = "127.0.0.1";
const porta = 3000;

const storage = multer.memoryStorage();
app.use(express.json());
app.use(bodyParser.json());

//---------------------------------------------------------Diretor-------------------------------------------\\
app.post('/diretor', async (req, res) => {
    console.log('teste funciona');
    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;
    console.log('teste funciona 2');
    
    let userData = {nome, email, senha,};
     
    try {
    console.log('teste funciona 3');

        await setUser(userData);
        console.log(userData)
        res.status(200).send('Usuário criado com sucesso!');
    } catch (error) {
    console.log('teste funciona 4')

        console.error('Erro ao criar usuário:', error);
        res.status(500).send('Erro ao criar usuário.');
    }
});
//---------------------------------------------------------Servidor-------------------------------------------\\
app.listen(porta, host,  () => {
    console.log("servidor rodando");
});