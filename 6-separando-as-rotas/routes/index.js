const express = require('express');
const routes = express.Router();

let alunos = [
   {
      id: 0,
      nome: "Jose"
   },
   {
      id: 1,
      nome: "Maria"
   },
   {
      id: 2,
      nome: "Joao"
   },
   {
      id: 3,
      nome: "Marcos"
   }
]

routes.get("/", (req, res) => {
   res.send("Hello World!");
});

routes.get("/alunos", (req, res)=>{

   res.json(JSON.stringify(aluno));
});

routes.get("/aluno", (req,res) => {
   const { id } = req.query;
   res.json(alunos[id]);
});
routes.get("/aluno/:id", (req,res) => {
   const { id } = req.params;
   res.json(alunos[id]);
});

module.exports = routes;