var mongoose = require("mongoose")

var compositorSchema = new mongoose.Schema({
    id : String,
    bio: String,
    dataNasc : String,
    dataObito : String,
    nome : String,
    periodo : String
}, { versionKey: false })

module.exports = mongoose.model('compositores', compositorSchema)