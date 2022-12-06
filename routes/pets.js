const Router = require("express");

const cloudinary = require("../utils/cloudinary")

const router = Router();
router.post("/", async(req, res) => {
    const{name, type, breed, age, image, vaccine, neut, desc, phone} = req.body;
    try{
        if(image){
            const uploadRes = await cloudinary.uploader.upload(image, {
                upload_preset: "petAdoption"
            })
            if(uploadRes){
                const pet = new Pet({
                    name,
                    type,
                    breed, age,
                    image: uploadRes,
                    vaccine, neut, desc,
                    phone
                })

                const savedPet = await pet.save();
                res.statusCode(200).send(savedPet);
            }
        }
    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }
});

router.get("/", async(req, res) => {
    try{
        const pets = await Pet.find()
        res.status(200).send(pets)
    }catch(err){
        console.log(err)
        res.status(500).send(err);
    }
})

module.exports = router;