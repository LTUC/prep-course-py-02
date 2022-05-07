'use strict';

const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const port = 3000;
const app = express();
app.use(cors());
const apiKey = process.env.API_KEY;
//------//

//routes
app.get('/', homeHandler);
app.get('/allRegionsInfo', regionsHandler);
app.get('/top50Count',top50Handler)
app.get('/searchCity', searchHandler);

//functions
// http://localhost:3000
function homeHandler(req, res) {
    res.send('welcome to my website');
}

// http://localhost:3000/allRegionsInfo
function regionsHandler(req, res) {
    let url = `http://dataservice.accuweather.com/locations/v1/regions?apikey=${apiKey}`;
    axios.get(url).then(result => {
        console.log(result.data)

        let region = result.data.map(element => {
            return new Region(element.ID);
        })
        res.json(region);
    }).catch(error => {
        console.log(error)
    })

}
// http://localhost:3000/top50Count
function top50Handler(req, res) {
    let url = `http://dataservice.accuweather.com/locations/v1/topcities/50?apikey=${apiKey}`;
    axios.get(url).then(result => {
        console.log(result.data);
        let city = result.data.map(el => {
            return new City(el.Rank, el.EnglishName, el.TimeZone);
        })
        res.json(city);
    }).catch(error => {
        console.log(error);
    })
}
// http://localhost:3000/searchCity
function searchHandler(req, res) {
    let myQ = req.query.q
    let url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${myQ}`;
    axios.get(url).then(result => {
        console.log(myQ)
        console.log(result.data)
        let city = result.data.map(el => {
            return new SearchedCity(el.Key, el.LocalizedName, el.Country, el.GeoPosition);
        })
        res.json(city);
    }).catch(error => {
        console.log(error)
    })
}


//constructors
function Region(cityId) {
    this.cityId = cityId
}

function City(Rank, EnglishName, TimeZone) {
    this.Rank = Rank;
    this.EnglishName = EnglishName;
    this.TimeZone = TimeZone;
}
function SearchedCity(Key, LocalizedName, Country, GeoPosition) {
    this.Key = Key;
    this.LocalizedName = LocalizedName;
    this.Country= Country;
    this.GeoPosition= GeoPosition;
}


app.listen(port, () => {
    console.log(`listening on ${port}`)
})