import express from 'express';
import prescriptionServices from '../services/prescriptionServices';
let app = express.Router()


app.post('/', async (req, res) => {
    try{
        const doctor = req.body;
        const result = await prescriptionServices.createPrescription(doctor);
        return res.status(201).json(result);
    } catch(err){
        const data ={
            message: err.message
        }
        //res.json(err);
        return res.status(400).json(data);
    }
});

app.get('/', async(req, res) => {
    try{
        const doctors = await prescriptionServices.getAllPrescriptions();
        return res.status(200).json(doctors);

    } catch(err){
        const data ={
            message: err.message
        }
        return res.status(400).json(data);;
    }
});


app.put('/:id', async(req, res) => {
    try{
        const doctorId = req.params.id;
        const doctor =  req.body;
        
        await prescriptionServices.updatePrescriptionById(doctorId, doctor);
        const newdoctor = await prescriptionServices.getPrescriptionById(doctorId);
        return res.status(200).json(newdoctor);;
    } catch(err){
        const data ={
            message: err.message
        }
        return res.status(400).json(data);
    }
});

export default app;