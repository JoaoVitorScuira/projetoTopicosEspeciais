import express from "express";

import {Request, Response} from "express";

const app = express();
app.use(express.json());
//Métodos HTTP -> GET, POST
// GET -> Solicitar recursos/dados do servidor
// POST -> Enviar recursos/dados/entidades ao servidor
// GET -> Recebe
// POST -> Envia

app.get("/", (request: Request, response: Response)=>{
    response.send("Hello World! Com ts-node dessa vez rsrs");
});
 
app.get("/ciclo/listar/:rg/:telefone", (request: Request, response: Response) =>{
    const { rg , telefone } = request.params; //separando o objeto para pegar apenas dois atributos

    // criação de objeto
    const objeto = {
        nome : "Joao",
        cpf : "111.111.111-11",
        idade : 31,
        rg: rg, //pegou via parametro
        telefone: telefone //pegou via parametro
    };
    response.json(objeto);
});

app.post("/ciclo/cadastrar", (request: Request, response: Response) =>{
    const pessoa = request.body;
    console.log(pessoa);
    const objeto = { msg: "Cliente cadastrado com sucesso!",
    pessoa
};
  
    response.json(objeto);
});

app.listen(3000, () =>{
    console.log("\n\nO servidor está rodando...");
});

