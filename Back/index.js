const express = require("express");
const bodyParser = require("body-parser");
const { setDiretor, login, codEscola } = require("./Controle/Escola"); 
const { setProfessor } = require("./Controle/Professor"); 

// const { setProfessor } = require("./Controle/Professor"); 
// const { setAluno } = require("./Controle/Aluno"); 
// const { setSala } = require("./Controle/Sala"); 
const cors = require('cors');


const app = express();
const host = "127.0.0.1";
const porta = 3000;

//const storage = multer.memoryStorage();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
//-------------------------------------------Diretor-------------------------------------------\\
app.post('/diretor', async (req, res) => {
    console.log('teste funciona');
    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;
    console.log('teste funciona 2');
    
    let userData = { nome, email, senha };
     console.log(userData)
    try {
        console.log('teste funciona 3');
        await setDiretor(userData);
        console.log(userData);
        res.status(200).send('Usuário criado com sucesso!');
    } catch (error) {
        console.log('teste funciona 4');
        console.error('Erro ao criar usuário:', error);
        res.status(500).send('Erro ao criar usuário.');
    }
});

app.post('/diretor/cod', async (req, res) => {
    const nome = req.body.nome;
    console.log("nome",nome)
    let envio = {nome};

    try {
        const teste = await codEscola(envio);
             console.log(teste[0][0].Cod)
            return res.status(200).json({ result: teste[0][0].Cod });
    
    } catch (err) {
        console.error(err);
        console.log("erro no codigo");
        return res.status(500).send('Erro no servidor');
    }
});

app.post('/diretor/logar', async (req, res) => {
    const nome = req.body.nome;
    const senha = req.body.senha;

    let envio = { nome, senha };

    try {
        const teste = await login(envio);
        
        if (teste == 1) {
            return res.status(200).json({ result: 1 });
        } else {
            return res.status(200).json({ result: 0 });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).send('Erro no servidor');
    }
});


//--------------------------------------------------Professor--------------------------------------------------\\
app.post('/Professor', async (req, res) => {
    console.log('teste funciona');
    const Escola_Cod = req.body.cod;
    const nome = req.body.nome;
    const materia = req.body.materia;
    const email = req.body.email;
    const senha = req.body.senha;
    console.log('teste funciona 2');
    
    let userData = { Escola_Cod, nome, materia, email, senha };
     
    try {
        console.log('teste funciona 3');
        await setProfessor(userData);
        console.log(userData);
        res.status(200).send('Usuário criado com sucesso!');
    } catch (error) {
        console.log('teste funciona 4');
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
    
    let userData = { nome, email, senha };
     
    try {
        console.log('teste funciona 3');
        await setUser(userData);
        console.log(userData);
        res.status(200).send('Usuário criado com sucesso!');
    } catch (error) {
        console.log('teste funciona 4');
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
    
    let userData = { nome, email, senha };
     
    try {
        console.log('teste funciona 3');
        await setUser(userData);
        console.log(userData);
        res.status(200).send('Usuário criado com sucesso!');
    } catch (error) {
        console.log('teste funciona 4');
        console.error('Erro ao criar usuário:', error);
        res.status(500).send('Erro ao criar usuário.');
    }
});

//--------------------------------------------------Servidor-----------------------------------------------\\
app.listen(porta, host, () => {
    console.log("Servidor rodando");
});
