const express = require('express');
const path = require('path');

const app = express();

app.use("/meusite", express.static(path.join(__dirname, 'client')));

app.get("/", (req, res) => {

   // res.set('Content-Type', 'Text/html');
   res.type('html');


   res.send("Hello World From GET");
})

app.post("/", (req, res) => {

   res.send("Hello World From POST");
})

app.put("/", (req, res) => {

   res.send("Hello World From PUT");
})

app.delete("/", (req, res) => {

   res.send("Hello World From DELETE");
})


app.listen(4000, () => console.log(`Server Running on Port: 4000`));