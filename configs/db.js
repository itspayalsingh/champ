const {Sequelize}= require("sequelize")
require("dotenv").config()
 
const seqlize=new Sequelize( process.env.MYSQL_DATABASE,process.env.MYSQL_USER,process.env.MYSQL_ROOT_PASSWORD,{
    host:process.env.MYSQL_HOST,
    dialect:"mysql"
})
// console.log("seqllll",seqlize)
 
module.exports = {seqlize}
