import Doctor from "../doctor.js"
import "../app.js"

async function createDoctor() {
    try {
        const resp = await Doctor.create(
            {
                name:"Susana Albear",
                uniqueId:"DOC-SA84",
                phoneNumber: "768-696-1000",
                specialization: "Cardiologist",
                email: "sussy90@abc.com"
            }
        );
        console.log(resp)
    } catch (error) {
        console.log(error)
    }
}

createDoctor()