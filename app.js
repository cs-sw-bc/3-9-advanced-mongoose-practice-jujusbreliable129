import mongoose from "mongoose";

const MONGO_URI = "mongodb://localhost:27017/Hospital"

mongoose.connect(MONGO_URI)
.then(()=> console.log("Connected to MongoDB!"))
.catch(err => console.log("Error", err))