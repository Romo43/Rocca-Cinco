const { Schema, model } = require("mongoose");

const menuSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    type: String,
    URLimage: String
}, {
    timestamps: true
})

module.exports = model("menu", menuSchema, "menu");