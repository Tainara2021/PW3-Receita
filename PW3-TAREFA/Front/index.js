const express = require('express');

const app = express();
const axios = require('axios').default;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//MAPEAMENTO DA PASTA PUBLIC
app.use(express.static('public'));

//CONFIGURA O EJS COMO VIEW ENGINE (REDENRIZA AS PÁGINAS DE FRONT-END)
app.set('view engine', 'ejs');

app.get('',(req,res)=>{
    const urlListagemreceitas = 'http://localhost:3000/listarreceitas';

    axios.get(urlListagemreceitas)
    .then((response)=> {
        let receitas = response.data;
        res.render('Receita/listagemreceitas',{receitas});
    });
})

app.get('/cadastroreceitas',(req,res)=>{
    res.render('Receita/index');
})

app.get('/listagemreceitas',(req,res)=>{

    const urlListagemreceitas = 'http://localhost:3000/listarreceitas';

    axios.get(urlListagemreceitas)
    .then((response)=> {
        let receitas = response.data;
        res.render('Receita/listagemreceitas',{receitas});
    });
});

app.get('/formEdicaoreceitas/:id', (req, res)=>{
        
    let {id} = req.params;

    const urlListagemreceitas = `http://localhost:3000/listarReceita/${id}`;
    
    axios.get(urlListagemreceitas)
    .then(
        (response)=>{

            let Receita = response.data;
            res.render('Receita/editarReceita', {Receita});

        }
    )
});

app.post('/alterarReceita', (req, res)=>{

    const urlAlterarReceita = 'http://localhost:3000/alterarReceita';
    console.log(req.body);

    axios.put(urlAlterarReceita, req.body)
    .then(
        res.send('ALTERADO!')
    )

});

app.get ('/deletarReceita/:id',(req, res)=>{
    let id = req.params.id;
    const urlDeletarReceita = `http://localhost:3000/excluirReceita/${id}`;
    axios.delete(urlDeletarReceita, req.body)
    .then(
        res.send('DELETADO')
)});

app.listen(3001, ()=>{
        console.log('SERVIDOR RODANDO EM: http://localhost:3001');
});