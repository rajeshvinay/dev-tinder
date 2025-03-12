const {connectDB} = require('./config/database');
const express = require("express");
const {User} = require("./models/user-model");

const app = express();

app.post('/signUp',(req,res)=>{
    const userObj = {
        firstName:"Sachin",
        lastName:"Tendulkar",
        emailId:"sacin@gmail.com",
        password:"sachin@123"
    }
    const user = new User(userObj)
    user.save().then(()=>res.send("Successfully inserted the data")).catch(()=>res.status(400).status("Failed to insert the data"))
})

connectDB().then(()=>{
    app.listen(3000,(err,res)=>{
        if(err) console.log(" error occured ",err)
        else console.log("Database connection is established and the server is listening on port 3000")
    });
}).catch(()=>{
    console.log("Unable to start the server because the database connection is not established.")
})