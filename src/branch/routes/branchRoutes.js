import express from 'express';
import branchServices from '../services/branchServices';
let app = express.Router();


app.get('/', () =>{
    try{
        const branches = branchServices.getAllBranchs();
        return res.status(200).json(branches);
    } catch(err){
        const data ={
            message: err.message
        }
        return res.status(400).json(data);;
    }
});


app.put('/:id', async(req, res) => {
    try{
        const branchId = req.params.id;
        const branch =  req.body;
        
        await branchServices.updateBranchById(branchId, branch);
        const newpatient = await branchServices.getPatientById(branchId);
        return res.status(200).json(newpatient);;
    } catch(err){
        const data ={
            message: err.message
        }
        return res.status(400).json(data);
    }
});


app.get('/:id', async(req, res) => {
    try{
        const branchId = req.params.id;
        const branch = await branchServices.getBranchById(branchId);
        
        return res.status(200).json(branch);
    } catch(err){
        const data ={
            message: err.message
        }
        return res.status(400).json(data);;
    }
});


app.post('/', async (req, res) => {
    try{
        const branch = req.body;
        const result = await branchServices.createBranch(branch);
        return res.status(201).json(result);
    } catch(err){
        const data ={
            message: err.message
        }
        //res.json(err);
        return res.status(400).json(data);
    }
});


app.delete('/:id', async (req, res) => {
    try{
        const branchId = req.params.id;
        const branch = await branchServices.deleteBranchByI(branchId);
        
        return res.status(201).json(branch);
    } catch(err){
        const data = {
            message: err.message
        }
        return res.status(401).json(data);;
    }
});

export default app;