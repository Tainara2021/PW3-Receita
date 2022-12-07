const express = require('express');

const receitasController = require('./controller/receitasController');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/', receitasController);


app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO EM: http://localhost:3000');
});