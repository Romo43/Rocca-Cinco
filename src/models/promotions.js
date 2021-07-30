const { Schema, model } = require("mongoose");

const promotionSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    days: {
        type: [String]
    },
    URLimage: {
        type: String
    },
}, {
    timestamps: true
})

module.exports = model("promotion", promotionSchema);