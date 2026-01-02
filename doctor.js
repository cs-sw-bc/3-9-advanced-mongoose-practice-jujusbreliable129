import mongoose from "mongoose";


const doctorSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
        match: /^[A-Z][a-z]+\s[A-Z][a-z]+$/
    },
    uniqueId: {
        type:String,
        required: true,
        unique: true,
        match: [/^DOC-[A-Z]{2}[0-9]{2}/, 'Have to match with DOC-XXXX']
    },
    phoneNumber: {
        type:String,
        required: true,
        match:[ /^[0-9]{3}-[0-9]{3}-[0-9]{4}/, 'Have to match with XXX-XXX-XXXX' ]
    },
    specialization: {
        type:String,
        required: true,
        enum: ['General', 'Dentist', 'Neurologist', 'Cardiologist', 'Traumatologist']
    }, 
    email: {
        type:String,
        match: [/^[a-z]{2,}[0-9]{2,}@[a-z]{3,}\.[a-z]{3}/]
    }
});

const Doctor = mongoose.model('Doctor', doctorSchema);

export default Doctor;

// Doctors cannot be embedded in the Patient schema because in a hospital setting,
// one doctor treats many patients. If we embedded doctor data in each patient,
// we would duplicate the same doctor information multiple times.
// Using references allows us to maintain one doctor record that many patients can reference.