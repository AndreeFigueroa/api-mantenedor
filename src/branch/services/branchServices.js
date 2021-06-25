import { Op } from "sequelize";
import { BranchModel } from '../../model/sequelizeconfig';
import { BadRequestException } from '../../utils/HttpException';

function createBranch(branch){
    branch.created_at=Date.now();
    branch.updated_at=Date.now();
    BranchModel.create(branch);
}

function getAllBranchs( ){
    return BranchModel.findAll();
};

async function getBranchById(id){
    const result = await BranchModel.findByPk(id);
    return result.dataValues;
};

async function updateBranchById(branchId, branch){  
    branch.updated_at = Date.now();
    if(branch.created_at || !branch.created_at ){
        delete (patient.created_at);
    }
    return BranchModel.update(branch, {
        where: { id: branchId }
    });
}

async function deleteBranchById(id){
    const result = await BranchModel.destroy({
        where: {
            id
        }
    });
    return result;
};

const functionBranch = {
    createBranch,
    getAllBranchs,
    getBranchById,
    updateBranchById,
    deleteBranchById
}

export default functionBranch;