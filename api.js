//Application Programing Interface
//REST = Representational State Transfer

// GET 
// POST
// PUT /PATCH
// DELETE

/* Comandos para o powershell
npm init -y |node package manager init cria o jason -y (padrão)
npm i express | express = cria o lock.json
node --watch .\api.js | roda o servidor local
*/

// JSON = JavaScript Object Notation

import express from "express";

const app = express();
const PORT = 3000;
const arrResponse = [
    {name: "Wes", company: "HD" },
    {name: "Alice", company: "ABC" },
    {name: "Bob", company: "XYZ" }
];

app.get("/", (req, res) => { res.send(arrResponse)});

app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`));