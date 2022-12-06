import mongoose from "mongoose"

const mongoose = require("mongoose")

const petSchema = new mongoose.Schema({
    name: {type: String},
    type: {type: String},
    breed: {type: String},
    age: {type: Number},
    image: {type: Object},
    vaccine: {type: String},
    neut: {type: String},
    desc: {type: String},
    phone: {type: Number}
}, {
    timestamps: true
})

const Pet = mongoose.model("Pet", petSchema);
export default Pet;
