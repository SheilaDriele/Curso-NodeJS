// const Sequelize = require('sequelize')
// const sequelize = new Sequelize('banco', 'root', 'sheila', {
//     host: "localhost",
//     dialect: 'mysql'
// })

// sequelize.authenticate().then(function(){
//     console.log("Conectado com sucesso!")
// }).catch(function(erro){
//     console.log("Falha ao se conectar: "+erro)
// })

// const Postagem = sequelize.define('postagens', {
//     titulo: {
//         type: Sequelize.STRING
//     },
//     conteudo: {
//         type: Sequelize.TEXT
//     }
// })

// // Postagem.sync({force: true})

// Postagem.create({
//     titulo: "Meu Nome é Titulo",
//     conteudo: "kkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkkkkkk"
// })

// const Usuario = sequelize.define('usuarios', {
//     nome: {
//         type: Sequelize.STRING
//     },
//     sobrenome: {
//         type: Sequelize.STRING
//     },
//     idade: {
//         type: Sequelize.INTEGER
//     },
//     email: {
//         type: Sequelize.STRING
//     }
// })



// // Usuario.sync({force: true})

// // Usuario.create({
// //     nome: "Flavio",
// //     sobrenome: "Silva",
// //     idade: "32",
// //     email: "novo@email.com"
// // })