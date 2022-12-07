const express = require('express');

const router = express.Router();

const modelReceitas = require('../model/receitasModel');

router.get('/listarReceita', (req, res)=>{

    modelreceitas.findAll()
        .then(
            (receitas)=>{
                return res.status(200).json(receitas);
            }
        ).catch(
            (erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    erroMessagem: 'Houve um erro ao selecionar os dados do Receita',
                    erroBancoDados: erro
                });
            }
        );

});

router.get('/listarReceita/:id',(req, res)=>{

    let {id} = req.params;

    modelreceitas.findByPk(id)
        .then(
            (Receita)=>{
                res.status(200).json(Receita);
            }
        ).catch(
            (erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    erroMessagem: 'Houve um erro ao selecionar os dados do Receita',
                    erroBancoDados: erro
                });
            }
        );

});

router.post('/inserirReceita', (req, res)=>{
    let {nome_Receita}  = req.body ;
    modelreceitas.create(
        {nome_Receita}
    ).then(
        ()=>{
                return res.status(201).json({
                    erroStatus: false,
                    menssagemStatus: 'Receita inserido com sucesso!'
            });
        }
    ).catch(
        (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Houve um erro ao cadastrar o Receita',
                        erroBancoDados: erro
                    });
        }
    );

});

router.put('/alterarReceita', (req, res)=>{

    let {id, nome_Receita} = req.body;

    modelreceitas.update(
        {nome_Receita},
        {where:{id}}
    ).then( ()=>{

        return res.status(200).json({
            erroStatus: false,
            menssagemStatus: 'Receita alterado com sucesso!'
        });

    }).catch(
        (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Houve um erro ao alterar o Receita',
                        erroBancoDados: erro
                    });
        }
    );

});

router.delete('/excluirReceita/:id', (req, res)=>{

    let {id} = req.params;

    modelreceitas.destroy(
        {where: {id}}
    ).then( ()=>{

        return res.status(200).json({
            erroStatus: false,
            menssagemStatus: 'Receita excluido com sucesso!'
        });

    }).catch(
        (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Houve um erro ao excluir o Receita',
                        erroBancoDados: erro
                    });
        }
    );

});

module.exports = router;