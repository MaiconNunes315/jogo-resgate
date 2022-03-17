const express = require('express');
const app = express();
const Jogador = require('./models/jogador')
const controller = require('./controller/controleJogador')


const cors = require('cors');
app.use(cors());

app.use(express.json());


app.get('/',controller.getJogador);

app.post('/add-player',controller.createJogador)
app.put('/update-player',controller.updateJogador)


app.listen(5000, ()=>{
    console.log('http://localhost:5000')
});