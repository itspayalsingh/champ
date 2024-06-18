// const {Sequelize}= require("sequelize")
// const sequelize = new Sequelize(process.env.DATABASE_URL);
const { Sequelize } = require("sequelize-cockroachdb");
require("dotenv").config()
const seqlize = new Sequelize(process.env.DATABASE_URL);
// const seqlize=new Sequelize("champion","root",process.env.dbPassword,{
//     host:"localhost",
//     dialect:"mysql"
// }

 
module.exports = {seqlize}
