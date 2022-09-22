const Sequelize = require('sequelize')
const sequelize = new Sequelize('banco', 'root', 'sheila', {
    host: "localhost",
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}