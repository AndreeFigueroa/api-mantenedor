import express from 'express';
import authServices from '../services/authServices';

const app = express.Router();

app.get('/', (req, res) => {
  try{
    let token = req.query.access_token;
    const result = authServices.verify(token);
    
    return res.status(200).send(
    result
    );

  } catch(err){

    return undefined;
  }
});

app.post('/',(req, res) => {
  const token = authServices.generateAccessToken();  
  res.status(201).send(token);
})

export default app;