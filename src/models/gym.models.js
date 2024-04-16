const mongoose = require("mongoose")

const gym_UserSchema = new mongoose.Schema({
    typeUser: String,
    name: String,
    typeDoc: String,
    numberDoc: Number,
    address: String,
    dateBirth: Number,
    physicalFitness: String,
    active: Boolean
})

module.exports = mongoose.model('gymUser', gym_UserSchema)