const express = require("express")
// var router = express.Router()
const cors = require("cors")
const mongoose = require("mongoose")
// const pets = require("./routes/pets")
// const cloudinary = require("./utils/cloudinary")
const app = express()
const ImgModel = require('./models/adopt')
var multer = require('multer');
// var bodyParser = require('body-parser')
// const fs = require('fs')
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
// app.use("/api/pets", pets)

mongoose.connect("mongodb://localhost:27017/LogRegDb", () => {
    console.log("Connected")
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)

app.post("/login", (req,res) => {
    const {email, password} = req.body
    User.findOne({email:email}, (err, user) => {
        if(user){
            if(password === user.password) {
                res.send({message:"Login Successfull", user: user})
            } else {
                res.send({message:"Invalid Password."})
            }
        } else {
            res.send({message: "User not registered."})
        }
    } )
})

app.post("/register", (req,res) => {
    const {name, email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registered"})
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save( er => {
                if(err){
                    res.send(err)
                } else {
                    res.send({message: "Successfully Registered"})
                }
            })
        }
    })
    
})







// app.post('/', upload.single('petImage'), (req, res) => {
//     const saveImage = new adoptModel ({
//         name: req.body.name,
//         img: {
//             data: fs.readFileSync('uploads/' + req.file.filename),
//             contentType: "image/png"
//         },
//     });
//     saveImage.save()
//     .then((res) => {console.log("Image saved")})
//     .catch((err) => {console.log(err, "error has occured")});
//     res.send("Image Saved!!")
// })

// app.get('/', async(req,res)=>{
//     const allData = await adoptModel.find()
//     res.json(allData)
// })

var storage = multer.diskStorage ({
    destination: function (req, file, cb) {
        cb(null, './pets-backend/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

var upload = multer({
    storage:storage,
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)
        const extname = fileTypes.test(path.extname(file.originalname))
        if(mimeType && extname){
            return cb(null, true)
        }
        cb("Use proper format")
    }
})


app.listen(9002, () => {
    console.log("Started @ port 9002")
})

