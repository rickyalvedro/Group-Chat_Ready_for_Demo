const Sequelize = require('sequelize')
const dotenv = require('dotenv')

dotenv.config();
const sequelize = new Sequelize('groupchatapp29032023','root','Money@+%9039' ,{
    dialect: 'mysql',
    host :'localhost'})

module.exports = sequelize;