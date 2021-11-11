const mongoose = require("mongoose")
const matSchema = mongoose.Schema({
    color: String,
    length: Number,
    cost: Number
})
module.exports = mongoose.model("Mat",
    matSchema)