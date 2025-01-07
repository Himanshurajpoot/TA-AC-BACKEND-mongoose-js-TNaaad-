// require
let express = require("express")
let logger = require("morgan")
let mongoose = require("mongoose")


let app = express()

// mongoose connecting

async function mongooseConnecting() {
    try{
        await mongoose.connect("mongodb://localhost/student")
        console.log("connect to the mongoose succsessfully")
    }catch{
        console.log("error connecting the mongoose")
    }
}

mongooseConnecting()

// middleware

app.use(logger("dev"))

// routs
app.get("/", (req,res)=>{
   res.send("welcome")
})


app.listen(3000,()=>{
    console.log("server is listen on port 3000")
})