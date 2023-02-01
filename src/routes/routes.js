const router = require("express").Router();
const qrcode = require("qrcode");

router.get("/",async (req,res)=>{
    try {
        res.render("index")
    } catch (error) {
        res.status(422).json({
            status:error.message
        })
    }
})

router.post("/output", async (req,res)=>{
    try {
        const input = req.body.data
        // console.log(input);
        qrcode.toDataURL(input,(err,src)=>{
            res.render("output",{
                qr_code:src
            })
        })

    } catch (error) {
        res.status(422).json({
            status:error.message
        })
    }
})



module.exports =router