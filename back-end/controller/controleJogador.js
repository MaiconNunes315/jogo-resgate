const Jogador = require('../models/jogador')

module.exports = {

//     async getJogador(req,res){
//     Jogador.findAll().then(function(data){
//         return res.json({
//             data
//         });
//     },(function(error){
//         res.status(400).json({
//             error:true,
//             mensagem:'error: nenhum valor encontrado para service'
//         })
//     }))
// },

async getJogador(req,res){
    try{
        const jogadores = await Jogador.findAll()
        res.json({
            jogadores
        })
    }catch(error){
        res.json({error})
    }
},



    async createJogador(req,res){
        try{
            const { nome, pontuacao }= req.body
            const jogador = await Jogador.findOne({ where : { nome}})
            if(jogador){
                res.status(200).json({
                    message: 'usuário ja cadastrado'
                })
            }else{
                await Jogador.create({nome, pontuacao})
            res.status(200).json({
                message: 'usuário cadastrado com sucesso'
            })}
        }catch(error){
            res.status(400).json({error})
        }
    },
    async updateJogador(req,res){
        try{
            const {nome, pontuacao} = req.body
            const jogador = await Jogador.findOne({ where : { nome }})
if(!jogador){
    res.json({
        messagem: "nenhum jogador encontrado"
    })
}else{
    await Jogador.update({pontuacao}, {where: {nome}})
                res.json({
                    messagem: 'Pontuação atualizada atualizado'
                })
}   
}catch(error){
            res.json({error})
        }
    }
}