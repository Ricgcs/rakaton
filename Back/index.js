import express, { response } from "express";
import bodyParser from "body-parser";
import { setDiretor } from "./Controle/Escola";
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

        await setDiretor(userData);
        console.log(userData)
        res.status(200).send('Usuário criado com sucesso!');
    } catch (error) {
    console.log('teste funciona 4')

        console.error('Erro ao criar usuário:', error);
        res.status(500).send('Erro ao criar usuário.');
    }
});


app.get('/diretor/logar', async (req, res) => {

    const nome = req.body.nome;
    const senha = req.body.senha;

    if ( !nome || !senha) {
        return res.status(400).json({ message: 'Parâmetros inválidos' });
    }

    let envio = { nome, senha };

    try {
        const teste = await login(envio);
        
        if (teste == 1) {
            return res.status(200).json({ result: 1 });
        }
        else{
            return res.status(200).json({ result: 0 })
        }
    } 
    catch (err) {
        console.error(err);
        return res.status(500).send('Erro no servidor');
    }
});

//--------------------------------------------------Professor--------------------------------------------------\\
app.post('/Professor', async (req, res) => {
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

//---------------------------------------------------Aluno-------------------------------------------------\\
app.post('/Aluno', async (req, res) => {
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

//------------------------------------------------Sala---------------------------------------------------\\
app.post('/Sala', async (req, res) => {
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



//----------------------------------------------------------------------------------------------------------\\
//--------------------------------------------------Servidor-----------------------------------------------\\
app.listen(porta, host,  () => {
    console.log("servidor rodando");
});