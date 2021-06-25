import { PatientModel } from '../src/model/sequelizeconfig';

async function initDB (){
    await PatientModel.sync( {force: true });
}
export {
    initDB
}
