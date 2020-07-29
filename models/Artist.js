const mongoose = require('../db/connection')

const Schema = mongoose.Schema

const artistSchema = new Schema({
    name: String
    ,bio: String
    ,nationality: String
    ,birthDate: Date
    ,deathDate: Date
    ,gender: String
    ,wikiUrl: String
    ,UlanUrl: String
})

module.exports = mongoose.model("Artist", artistSchema)