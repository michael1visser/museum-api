const mongoose = require('../db/connection')

const Schema = mongoose.Schema

const objectSchema = new Schema({
    featured: String
    ,yearAcquired: String
    ,isPublicDomain: Boolean
    ,primaryImage: String
    ,primaryImageSmall: String
    ,additionalImages: []
    ,department: String
    ,objectType: String
    ,title: String
    ,culture: String
    ,period: String
    ,artist: String
    ,dateCreated: String
    ,medium: String
    ,dimensions: String
    ,country: String
    ,category: String
    ,rights: String
    ,infoLink: String
})

module.exports = mongoose.model("Object", objectSchema)