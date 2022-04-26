const express = require("express");
const app = express();

app.use(express.json());

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

app.get("/", (req, res) => {
   res.send("Hello World!");
});

app.get("/alunos", (req, res)=>{

   res.json(JSON.stringify(aluno));
});

app.get("/aluno", (req,res) => {
   const { id } = req.query;
   res.json(alunos[id]);
});
app.get("/aluno/:id", (req,res) => {
   const { id } = req.params;
   res.json(alunos[id]);
});


app.listen(4000, () => console.log(`Server Running on Port: 4000`));
