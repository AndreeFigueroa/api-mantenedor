import { Op } from "sequelize";
import { DoctorModel } from '../../model/sequelizeconfig'
import { BadRequestException } from '../../utils/HttpException'


function createDoctor(doctor){
    
    doctor.created_at=Date.now();
    doctor.updated_at=Date.now();
    return DoctorModel.create(doctor);
};

function getAllDoctors( ){
    return DoctorModel.findAll();
};

async function getDoctorById(id){
    const result = await DoctorModel.findByPk(id);
    return result.dataValues;
};

async function updateDoctorById(doctorId, doctor){  
    doctor.updated_at = Date.now();
    if(doctor.created_at || !doctor.created_at ){
        delete (doctor.created_at);
    }
    return DoctorModel.update(doctor, {
        where: { id: doctorId }
    });
}
async function deleteDoctorById(id){
    const result = await DoctorModel.destroy({
        where: {
            id
        }
    });
    return result;
};

const functionDoctor = {
    createDoctor,
    getAllDoctors,
    getDoctorById,
    updateDoctorById,
    deleteDoctorById
}

export default functionDoctor;