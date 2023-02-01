const express = require("express");
const app = express();
const ejs = require("ejs")
const path = require("path")

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"view"))


const route = require("./routes/routes")
app.use("/",route)

module.exports = app