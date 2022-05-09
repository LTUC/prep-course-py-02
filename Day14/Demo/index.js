'use strict';
const express = require("express");
require("dotenv").config();
const app = express();
const cors = require('cors');
const axios = require('axios');
app.use(cors());
const PORT = process.env.PORT || 3001; //short circuit 
app.use(express.json());
const { Client } = require("pg");
const client = new Client(process.env.DATABASE_URL);

//routs 
app.get('/', handleHome);
app.get('/getAnime', handleGetAnime);
app.get('/getAnime/v2', handleAsyncAwait);
app.get('/params/:id/:name', handleParams);
//CRUD
app.post('/addAnime', handleAddAnime);
app.get('/getFavAnime', handleGetFavAnime);
app.put('/updateAnime/:AnimeId', handleUpdateAnime);
app.delete('/deleteAnime/:AnimeId', handleDeleteAnime);


//functions
function handleHome(req, res) {
    res.send('welcome to the home page');
}

function handleGetAnime(req, res) {
    const url = `https://api.jikan.moe/v4/characters/4`;
    console.log("before .then");
    axios.get(url).then(result => {
        // console.log(result.data.data);
        let animeObj = result.data.data;
        let anime = new Anime(animeObj);
        res.json(anime);
        console.log("inside .then");
        // res.send("ok");
    }).catch(error => {
        console.log(error);
    })
    console.log("after .then");

}
async function handleAsyncAwait(req, res) {

    try {
        
        const url = `https://api.jikan.moe/v4/characters/6`;
        console.log("before await");
        let result = await axios.get(url);
        console.log("after await");

        // console.log(result.data.data);
         let animeObj = result.data.data;
         let anime = new Anime(animeObj);
         res.json(anime);
        // res.send("ok");
    } catch (error) {
        console.log(error);
    }
    }

function handleParams(req, res) { 
    console.log(req.params.id);
    console.log(req.params.name);
    res.send("done");
}

function handleAddAnime(req, res) { 
    let name = req.body.name; 
    let url = req.body.url;
    // let {name,url}= req.body
    let sql = `INSERT INTO favanime (name,url) VALUES($1,$2) RETURNING *`;
    let values = [name, url];
    client.query(sql, values).then(result => {
        console.log(result.rows[0]);
        res.json(result.rows)
    }).catch()

}
function handleGetFavAnime(req, res) { 
    let sql = `SELECT * FROM favanime  `;
    client.query(sql).then(result => {
        console.log(result.rows);
        res.json(result.rows);
    })
}
function handleUpdateAnime(req, res) {
    let id = req.params.AnimeId;
    let name = req.body.name;
    let url = req.body.url;
    let sql = `UPDATE favanime SET name =$1 , url =$2 WHERE id = ${id} RETURNING *`;
    let values = [name, url];
    client.query(sql, values).then(result => {
        console.log(result.rows[0]);
        res.json(result.rows[0]);
    }).catch()
}
function handleDeleteAnime(req, res) {
    let id = req.params.AnimeId;
    let sql = `DELETE FROM favanime WHERE id =${id} RETURNING *`;
    client.query(sql).then(result => {
        console.log(result.rows[0]);
        res.status(204).json([]);
    }).catch(err => {
        console.log(err);
    })
}










//constructor function
function Anime(animeData) {
    this.name = animeData.name;
    this.url=animeData.url;
}



client.connect().then(() => {
    
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
})
