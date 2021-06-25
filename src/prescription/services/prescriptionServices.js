import { Op } from "sequelize";
import { PrescriptionModel } from '../../model/sequelizeconfig'
import { BadRequestException } from '../../utils/HttpException'


function createPrescription(prescription){
    console.log('prescription: ', prescription);
    prescription.created_at=Date.now();
    prescription.updated_at=Date.now();
    return PrescriptionModel.create(prescription);
};

function getAllPrescriptions( ){
    return PrescriptionModel.findAll();
};

async function getPrescriptionById(id){
    const result = await PrescriptionModel.findByPk(id);
    return result.dataValues;
};

async function updatePrescriptionById(prescriptionId, prescription){  
    prescription.updated_at = Date.now();
    if(prescription.created_at || !prescription.created_at ){
        delete (prescription.created_at);
    }
    return PrescriptionModel.update(prescription, {
        where: { id: prescriptionId }
    });
}
async function deletePrescriptionById(id){
    const result = await PrescriptionModel.destroy({
        where: {
            id
        }
    });
    return result;
};

const functionprescription = {
    createPrescription,
    getAllPrescriptions,
    getPrescriptionById,
    updatePrescriptionById,
    deletePrescriptionById
}

export default functionprescription;