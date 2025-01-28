// require
let express = require('express');
let mongoose = require('mongoose');
let logger = require('morgan');
let User = require("./models/user")

let app = express();

// mongoose
async function connectingMongoose() {
  try {
    await mongoose.connect('mongodb://localhost/sunnyl');
    console.log('connecting to the successefully');
  } catch {
    console.log('error  connecting to the mongoose');
  }
}

connectingMongoose()

// middeleware
app.use(logger('dev'));

app.use(express.json())
// routes

app.get('/', (req, res) => {
  res.send('welcome');
});

app.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body); 
    res.status(201).send(user);
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(400).send({ message: err.message });
  }
});

app.get("/users", async(req,res)=>{
   try{
   let users = await User.find({})
    res.json({users:users})
   }catch(err){
    console.error(err)
   }
})



app.get("/users/:id", async(req,res)=>{
  let id = req.params.id
  try{

    let user = await User.findById(id)
    res.json(user)
  }catch(err){
     console.error(err)
  }
})




app.put("/users/:id", async(req,res)=>{
  let id = req.params.id
    try{
      let updatedUser = await User.findByIdAndUpdate(id,req.body,{new:true})
      res.json(updatedUser)
    }catch(err){
      console.error(err)
    }
})


app.delete("/users/:id", async(req,res)=>{
  let id = req.params.id
  try{
    let deletedUser = await User.findByIdAndDelete(id ,{new:true})
    res.send(deletedUser.name)
  }catch(err){
    console.error(err)
  }
})

app.listen(3000, () => {
  console.log('server is listening on port 3000');
});
