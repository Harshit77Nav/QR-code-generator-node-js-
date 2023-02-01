const app = require("./src/app")
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000




app.listen(PORT,()=>console.log("App is running on "+PORT))