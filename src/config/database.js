const mongoose = require('mongoose');

const connectDB = async ()=>{
  await  mongoose.connect("mongodb+srv://namastedev:rtE0wKDcJCiTT108@namastenode.uh1al.mongodb.net/?retryWrites=true&w=majority&appName=NamasteNode")
}

module.exports = {connectDB}

// connectDB().then(()=>console.log("Database connection is successfully established!")).catch(err=>console.log("Failed to establish the database connection"))
