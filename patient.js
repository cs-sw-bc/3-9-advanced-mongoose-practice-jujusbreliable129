import mongoose from "mongoose";
import Doctor from "./doctor.js"


const patientSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
        match: /^[A-Z][a-z]{3}/
    },
    uniqueId: {
        type:String,
        required: true,
        unique: true,
        match: [/^PAT-[A-Z]{2}[0-9]{2}/, 'Have to match with DOC-XXXX']
    },
    phoneNumber: {
        type:String,
        required: true,
        match:[ /^[0-9]{3}-[0-9]{3}-[0-9]{4}/, 'Have to match with XXX-XXX-XXXX' ]
    },
    primaryDoctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    },
    visits: [
        {
            date: {
                type: String,
                required: true,
                match: /^\d{4}-\d{2}-\d{2}$/
            },
            symptoms: {
                type: String,
                required: true
            },
            diagnosis: {
                type: String,
                required: true
            },
            doctorRef: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Doctor',
                required: true
            },
            notes: {
                type: String
            }
        }
    ], 
    email: {
        type:String,
        match: [/^[a-z]{2,}[0-9]{2,}@[a-z]{3,}\.[a-z]{3}/]
    }
});

const Patient = mongoose.model('Patient', patientSchema);

export default Patient;