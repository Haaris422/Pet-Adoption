const mongoose = require("mongoose");

//const adoptSchema = new mongoose.Schema({
    // name: {type: String},
    // type: {type: String},
    // breed: {type: String},
    // age: {type: Number},
    // image: {
    //     data: Buffer,
    //     contentType: String
    // },
    // vaccine: {type: String},
    // neut: {type: String},
    // desc: {type: String},
    // phone: {type: Number}
//})

const imgSchema = new mongoose.Schema({
    image: {
        data: Buffer,
        contentType: String
    }
})
    

module.exports = ImgModel = mongoose.model("Img", imgSchema)
