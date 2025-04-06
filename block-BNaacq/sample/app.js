// require
let express = require("express")
let logger = require("morgan")
let mongoose = require("mongoose")
let blog = require("./models/blog")



let app = express()
// mongoose connecting

async function mongooseConnecting(){
    try{
        await mongoose.connect("mongodb://localhost/blogApplication")
        console.log("mongoose connect to succsessfully")
    }catch(err){
        console.error(err+"error connecting to mongoose")
    }
}

mongooseConnecting()





// middleware
app.use(logger('dev'))


// routes
app.get("/",(req,res)=>{
    res.send("welcome")
})

// listener
app.listen(4000, ()=>{
    console.log("server is listen on port 4000")
})