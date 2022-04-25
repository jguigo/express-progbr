const express = require("express");
const app = express();

let consoleBody = (req, res, next) => {
   console.log(req.body);
   next();
};

let hello = (req, res) => res.send("Hello World!");

app.use(express.json());
app.use("/",consoleBody);
app.get("/", hello);

app.post("/", hello);

app.listen(4000, () => console.log(`Server Running on Port: 4000`));
