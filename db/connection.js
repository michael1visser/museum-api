const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/met-museum-api', {useNewUrlParser: true})

module.exports = mongoose