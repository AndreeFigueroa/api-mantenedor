import express from 'express';
import patientService from '../services/patientService';
let app = express.Router()

app.post('/', async (req, res) => {
    try{
        const patient = req.body;
        const result = await patientService.createPatient(patient);
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
        const patients = await patientService.getAllPatients();
        return res.status(200).json(patients);

    } catch(err){
        const data ={
            message: err.message
        }
        return res.status(400).json(data);;
    }
});


app.put('/:id', async(req, res) => {
    try{
        const patientId = req.params.id;
        const patient =  req.body;
        
        await patientService.updatePatientById(patientId, patient);
        const newpatient = await patientService.getPatientById(patientId);
        return res.status(200).json(newpatient);;
    } catch(err){
        const data ={
            message: err.message
        }
        return res.status(400).json(data);
    }
});

app.get('/getallpatient', async(req, res) => {
    try{
        let patient={};
        if(req.query.firstname){
            patient.firstname= req.query.firstname
            patient.lastname= ''
            
        }else if (req.query.lastname){            
            patient.lastname= req.query.lastname
            patient.firstname= ''
        }else{
            patient.lastname= ''
            patient.firstname= ''
        }

        const patients = await patientService.getpatientByAttr(patient);
        
        return res.status(200).json(patients);
    } catch(err){
        const data = {
            message: err.message
        }
        return res.status(400).json(data);;
    }
});

app.get('/:id', async(req, res) => {
    try{
        const patientId = req.params.id;
        const patients = await patientService.getPatientById(patientId);
        
        return res.status(200).json(patients);
    } catch(err){
        const data ={
            message: err.message
        }
        return res.status(400).json(data);;
    }
});

app.delete('/:id', async (req, res) => {
    try{
        const patientId = req.params.id;
        const patients = await patientService.deletePatientById(patientId);
        
        return res.status(201).json(patients);
    } catch(err){
        const data = {
            message: err.message
        }
        return res.status(401).json(data);;
    }
})

export default app;