import express from 'express';
import doctorServices from '../services/doctorServices';
let app = express.Router()


app.post('/', async (req, res) => {
    try{
        const doctor = req.body;
        const result = await doctorServices.createDoctor(doctor);
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
        const doctors = await doctorServices.getAllDoctors();
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
        
        await doctorServices.updateDoctorById(doctorId, doctor);
        const newdoctor = await doctorServices.getdoctorById(doctorId);
        return res.status(200).json(newdoctor);;
    } catch(err){
        const data ={
            message: err.message
        }
        return res.status(400).json(data);
    }
});

export default app;