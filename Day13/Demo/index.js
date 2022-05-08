'use strict';

const express = require('express');
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');
require('dotenv').config();
const port = 3000;
const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let url = "postgres://rania:0000@localhost:5432/demo3";
//app.use(express.json());
const { Client } = require('pg');
const client = new Client(url);

//routs
app.post('/postRcipes', postHandler);
app.get('/getData', getHandler);
app.use(handleError);
//functions
//http:localhost:3000/postRcipes
function postHandler(req, res) {
    console.log(req.body);
   
    // let title = req.body.title;
    // let time = req.body.time;
    // let summary = req.body.summary;
    // let image = req.body.image;

    let {title,time,summary,image} = req.body; //destructuring


   let sql = `INSERT INTO recipes(title,time,summary,image ) VALUES($1, $2, $3, $4) RETURNING *;`; 
   let values = [title, time, summary, image];
   
    client.query(sql, values).then((result) => {
        console.log(result);
        return res.status(201).json(result.rows);

    }).catch((err) => {
        handleError(err, req, res);
    })

}
//http:localhost:3000/getData
function getHandler(req, res) {
    let sql = `SELECT * FROM recipes ;`;
    client.query(sql).then((result)=>{
        console.log(result);
        res.json(result.rows);
    }).catch((err) => {
         handleError(err, req, res);
    })
 }

 function handleError(error,req,res){
     res.status(500).send(error)
 }
client.connect().then(() => {
    
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
})