const mongoose = require("mongoose")
const matSchema = mongoose.Schema({
    gas_type: String,
    quantity: Number,
    cost: Number
})
module.exports = mongoose.model("Mat",
    matSchema)