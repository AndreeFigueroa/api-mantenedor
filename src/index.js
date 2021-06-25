require('dotenv').config()
import express from "express";
import patientRoutes from './patient/routes/patientRoutes';
import branchRoutes from './branch/routes/branchRoutes';
import doctorRoutes from './doctor/routes/doctorRoutes';
import prescriptionRoutes from './prescription/routes/prescriptionRoutes';
import authRoutes from './auth/routes/authRoutes';
import bodyparser from 'body-parser'
import config from './config';
import auth from './middleware/auth';
import cors from './middleware/cors';

const port = config.env.server_port;

const app = express();
require('./model/sequelizeconfig');


app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

const corsOptions ={
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Authorization, X-API-KEY, Origin, Content-Type, Accept',
    creadentials: true
  };

app.use(cors(corsOptions));//recibe config
//routes
app.use('/auth', authRoutes);
app.use('/patient',auth(), patientRoutes);
app.use('/branch',auth(), branchRoutes);
app.use('/doctor',auth(), doctorRoutes);
app.use('/prescription',auth(), prescriptionRoutes);



const server = app.listen(port);

console.log("Servidor Encendido, en el puerto:", port);

export {
    server,
    app
}
