const express = require("express");
const Routes = require("./routes");
const app = express();

app.use(express.json());

app.use('/isso-aqui-e-um-teste',Routes);


app.listen(4000, () => console.log(`Server Running on Port: 4000`));
