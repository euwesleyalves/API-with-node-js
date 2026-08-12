import express from "express";

const app = express();
const PORT = 3000;

// GET - Coletar informações
// POST - Criar informações
// PUT - Modificar informações inteiras
// PATCH - Modificar parte de informações
// DELETE - Apagar informações

/* Comandos para o powershell
npm init -y |node package manager init cria o jason -y (padrão)
npm i express | express = cria o lock.json
node --watch .\api.js | roda o servidor local
*/

// JSON = JavaScript Object Notation

// Middleware para ler JSON no corpo das requisições
app.use(express.json());

// Simulando um banco de dados em memória
let pratos = [
  { id: 1, nome: "Pizza de Calabresa" },
  { id: 2, nome: "Lasanha" },
];

// GET – pegar todos os pratos
app.get("/pratos", (req, res) => {
  res.json(pratos);
});

// POST – adicionar novo prato
app.post("/pratos", (req, res) => {
  const novoPrato = req.body;

  pratos.push(novoPrato);

  res
    .status(201)
    .json({ mensagem: "Prato adicionado com sucesso!", novoPrato });
});

// PUT – modificar um prato
app.put("/pratos/:id", (req, res) => {
  const id = Number(req.params.id);
  const nome = req.body.nome;

  pratos = pratos.filter((prato) => prato.id !== id);
  pratos.push({
    id,
    nome,
  });

  res.json({ mensagem: "Prato atualizado com sucesso!", pratos });
});

// DELETE – remover prato por ID
app.delete("/pratos/:id", (req, res) => {
  const id = Number(req.params.id);

  pratos = pratos.filter((prato) => prato.id !== id);

  res.json({ mensagem: "Prato removido com sucesso!", id });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
