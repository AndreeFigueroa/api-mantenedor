import { Op } from "sequelize";
import { PatientModel } from '../../model/sequelizeconfig'
import { BadRequestException } from '../../utils/HttpException'

function createPatient(patient){
    DoValidatePatient(patient);
    patient.created_at=Date.now();
    patient.updated_at=Date.now();
    return PatientModel.create(patient);
};

function getAllPatients( ){
    return PatientModel.findAll();
};

async function getPatientById(id){
    const result = await PatientModel.findByPk(id);
    return result.dataValues;
};

async function updatePatientById(patientId, patient){
    patient.updated_at = Date.now();
    if(patient.created_at || !patient.created_at ){
        delete (patient.created_at);
    }
    return PatientModel.update(patient, {
        where: { id: patientId }
    });
}

function DoValidatePatient(patient){
    if(!patient.firstname){
        throw new BadRequestException (401,'patient.firstname value not acceptable');
    }
    if(!patient.lastname){
        throw new BadRequestException (401,'patient.lastname value not acceptable');
    }
    if(!patient.email){
        throw new BadRequestException (401,'patient.email value not acceptable');
    }
    if(!patient.birthdate){
        throw new BadRequestException (401,'patient.birthdate value not acceptable');
    }
    if(!patient.gender){
        throw new BadRequestException (401,'patient.gender value not acceptable');
    }
    return true;
}

async function getpatientByAttr(patient){
    const result = await PatientModel.findAll({
        where: {
            [Op.or]: [
            { firstname: patient.firstname },
            { lastname: patient.lastname }
            ]
        }
    });
return result;
}

async function deletePatientById(id){
    const result = await PatientModel.destroy({
        where: {
            id
        }
    });
    return result;
};



const functionPatient = {
    createPatient,
    getAllPatients,
    getPatientById,
    updatePatientById,
    getpatientByAttr,
    deletePatientById
}

export default functionPatient;
