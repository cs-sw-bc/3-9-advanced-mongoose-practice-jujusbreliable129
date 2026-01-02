import "../app.js"
import Patient from "../patient.js"

async function createPatient() {
    try {
        const resp = await Patient.create({
            name: "Rodrigo Almanza",
            uniqueId: "PAT-AR04",
            phoneNumber: "012-554-9874",
            primaryDoctor: "695556da04bd0885893f02f3",
            visits: [
                {
                    date: "2024-05-06",
                    symptoms: "Falta de aire",
                    diagnosis: "Arritmias Cardiacas",
                    doctorRef: "695556da04bd0885893f02f3",
                    note: "Recomende directamente cambiar la dieta a habitos saludables"
                }
            ],
            email: "almanzanocha69@veryhotmail.com"
        });
        console.log(resp);
    } catch (error) {
        console.log(error);
    }
}



//async function patientTest(){

//}

async function findDeletePatient(){
    const patient = await Patient.findOneAndDelete({name: "Julio Diaz"});
    console.log(patient);
    console.log("Paciente dado de alta, eliminado de la base de datos")
}

async function updateManyPatients(){
const patient = await Patient.updateMany(
    {name: "Elida Pavida"},
    {$set: { name: "Elida Navida"}}

)

await Patient.updateMany(
    {name: "John Wick"},
    {$set: {name: "Wick John"}}
)
console.log(patient)
console.log("Hemos realizado el update de los pacientes")
}

updateManyPatients()