const express = require('express')
const path = require('path')
const app = express()
app.use(express.static(path.join(__dirname, 'Public')))

const weather = [
    {
    city: "Louisville",
    temp: "63",
    condition: "Sunny",
    precipitation: "0%"
    },
    {
    city: "Chicago",
    temp: "43",
    condition: "Cloudy",
    precipitation: "20%"
    },
    {
    city: "New York",
    temp: "32",
    condition: "Snowy",
    precipitation: "100%"
    },{
    city: "Miami",
    temp: "79",
    condition: "Sunny",
    precipitation: "0%"
    }
    ]

    app.get("/", (req, res) =>{
        res.sendFile(path.join(__dirname, 'Public/weather.html'))
    })

    app.get("/weather/:city", (req, res) => {
        const locationCity = req.params.city

        for(let i = 0; i < weather.length; i++){
            if( locationCity == weather[i].city){
                res.send(weather[i])
            }
        }
    })


    app.listen(3000)
    console.log("Weather Weather... working")