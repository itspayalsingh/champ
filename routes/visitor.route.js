const express = require("express");
const { visitorModel } = require("../models/visitor.model");
const visitorRouter = express.Router()
const geoIp = require("geoip-lite")
const { State } = require("country-state-city")
const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');
const { seqlize } = require("../configs/db");





visitorRouter.get("/", async (req, res) => {

    try {
        let ans = await visitorModel.findAll()
        res.send(ans)
    } catch (error) {
        console.log("error while fetching all visitors", error);
    }


})
 
 visitorRouter.get("/tata/bye", async (req, res) => {
  try {
    // Assuming 'sequelize' is your Sequelize instance

    await sequelize.query('TRUNCATE TABLE events CASCADE');
    await sequelize.query('TRUNCATE TABLE visitors CASCADE');

    console.log("doneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
    res.send("data deleted");
  } catch (error) {
    console.error(error);
    res.send("nnnnnnnnn");
  }
});





// we need to hit this endpoint to delete all visitors
// visitorRouter.get("/tata/bye", async (req, res) => {
//     try {
//         // console.log("caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
//         // Assuming 'sequelize' is your Sequelize instance
//      seqlize.query('SET FOREIGN_KEY_CHECKS = 0')
//     .then(() => {
//         return seqlize.query('TRUNCATE TABLE visitors');
//     })
//     .then(() => {
//         return seqlize.query('TRUNCATE TABLE events');
//     })
//     .then(() => {
//         return seqlize.query('SET FOREIGN_KEY_CHECKS = 1');
//     })
//     .catch((error) => {
//         console.error(error);
//     });


 
//         console.log("doneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
//         res.send("data deleted")
//     } catch (error) {
//         console.log("nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
//         res.send("nnnnnnnnn")
//     }

// })



module.exports = { visitorRouter }
