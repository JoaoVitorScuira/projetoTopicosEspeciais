const express = require("express");

const app = express();

//Métodos HTTP -> GET, POST
// GET -> Solicitar recursos/dados do servidor
// POST -> Enviar recursos/dados/entidades ao servidor
// GET -> Recebe
// POST -> Envia

app.get("/", (request, response)=>{
    response.send("Hello World com ts-node-dev mais uma vez");
});

app.listen(3000, function(){
    console.log("\n\nO servidor está rodando...");
});
