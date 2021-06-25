const { Sequelize } = require('sequelize');
import config from '../config';

let schema = 'public';
const dbName = 'dbprueba';
console.log ('config: ', config)
const dbUser = config.default.db.user;
const dbPassword = config.default.db.password;
const dialect = config.default.db.dialect;


let sequelize;

if(dialect== 'postgres'){
  sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: 'localhost',
    dialect: dialect
  });
} else if( dialect == 'sqlite'){
  const storage = config.default.db.storage;
  schema='';
  sequelize = new Sequelize(dbName, dbUser, dbPassword,{
    dialect: 'sqlite',
    storage: storage
  });
}
  const PatientModelref = require('./patientModel');
  const PatientModel = PatientModelref(schema, sequelize, Sequelize);

  const BranchModelref = require('./branchModel');
  const BranchModel = BranchModelref(schema, sequelize, Sequelize);

  const DoctorModelref = require('./doctorModel');
  const DoctorModel = DoctorModelref(schema, sequelize, Sequelize);

  const PrescriptionModelref = require('./prescriptionModel');
  const PrescriptionModel = PrescriptionModelref(schema, sequelize, Sequelize);


export {
    PatientModel,
    BranchModel,
    DoctorModel,
    PrescriptionModel
}