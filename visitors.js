import mongoose from "mongoose";

const visitorSchema = new mongoose.Schema({

    patientId:{
        id: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    patientName:{
        name:String,
        required:true,
        match: /^[A-Z][a-z]{3}/  
    }
    
})