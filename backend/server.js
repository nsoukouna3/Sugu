import express from 'express';
import data from './data.js';

const app = express();
const port= 3000;

app.get('/api/products',(req,res)=>{
    res.send(data.products)
})

app.listen(port, ()=>{
    console.log("Server is running on port: "+ port);
})