const mongoose = require("mongoose")

//Configurando o mongoose
    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://flavio:flavio@127.0.0.1:27017/flaviodb", {
        useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
        console.log("MongoDB conectado.")
    }).catch((dano) => {
        console.log("Houve um erro ao se conectar ao mongoDB: "+dano)
    })

//Model - Usuários

const UsuarioSchema = mongoose.Schema({

    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String
    },
    email: {
        type: String
    },
    idade: {
        type: Number
    },
    pais: {
        type: String
    }    
})

//Collection
const UsuarioModel = mongoose.model('usuarios', UsuarioSchema)

 new UsuarioModel({
        nome: "Sheila",
        sobrenome: "Driele",
        email: "sheila@driele.com",
        idade: 30,
        pais: "Brasil"
    }).save().then(() => {
        console.log("Usuário cadastrado com sucesso!")
    }).catch((err) =>{
        console.log("Houve um erro ao registrar o usuário: " + err)
    })
