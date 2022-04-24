const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'client')))


app.listen(4000, () => console.log(`Server Running on Port: 4000`));