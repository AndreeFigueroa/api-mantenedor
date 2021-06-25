import patientService from '../../../src/patient/services/patientService';
import request from "supertest";
import {app,server} from '../../../src';
import {initDB} from '../../init';

const agent=request(app);

describe('Post Endpoints Patient', () => {
    
    beforeAll(async () => {
        await initDB();
      });
    afterAll( ()=> {
        server.close();
    })

    it('should create a new Patient', async ()=> {
        const patient = {
            firstname: "name test",
            lastname: "lastname test"
        }

        const res = await agent.post('/patient')
            .set("Accept","application/json")
            .set("Content-type","application/json")
            .send(JSON.stringify(patient));

        expect(res.status).toEqual(201);
        
    });

    it('should not create a new Patient', async ()=> {
        const patient = {
            firstname: undefined,
            lastname: "lastname test"
        }

        const res = await agent.post('/patient')
            .set("Accept","application/json")
            .set("Content-type","application/json")
            .send(JSON.stringify(patient));

        expect(res.statusCode).toEqual(400);
        
    });

    it('should get a  Patient 1', async ()=> {
        const patient = {
            firstname: "name test",
            lastname: "lastname test"
        }

        const resPost = await agent.post('/patient')
            .set("Accept","application/json")
            .set("Content-type","application/json")
            .send(JSON.stringify(patient));

        const id = resPost.body.id

        const res = await agent.get(`/patient/${id}`).set("Accept","application/json");
        expect(res.statusCode).toEqual(200);
        
    });
    
    it('should get a  Patient 1', async ()=> {
        const patient = {
            firstname: "name test",
            lastname: "lastname test"
        }

        {
            const res = await agent.get('/patient/getallpatient')
            .query({ val: patient.firstname })
            .set("Accept","application/json");
        
            expect(res.statusCode).toEqual(200);
        }
        {
            const res = await agent.get('/patient/getallpatient')
            .query({ val: patient.lastname })
            .set("Accept","application/json");
        
            expect(res.statusCode).toEqual(200);
            
        }
    });
    
  
})