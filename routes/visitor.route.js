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
 

// we need to hit this endpoint to delete all visitors
visitorRouter.get("/tata/bye", async (req, res) => {
    try {
        console.log("caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        // Assuming 'sequelize' is your Sequelize instance
        seqlize.query('SET FOREIGN_KEY_CHECKS = 0').then(() => {
            seqlize.query('TRUNCATE TABLE visitors').then(() => {
                seqlize.query('TRUNCATE TABLE events');
            });
        });

        seqlize.query('SET FOREIGN_KEY_CHECKS = 1')
        console.log("doneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
        res.send("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
    } catch (error) {
        console.log("nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
        res.send("nnnnnnnnn")
    }

})



module.exports = { visitorRouter }