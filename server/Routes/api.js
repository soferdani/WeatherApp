const express = require('express')
const City = require ("../model/City")
const axios = require('axios')
const apiKey = '8af922783277f743ae992b03ca5178cc'
const router = express.Router()

const parseRowData = function (rowData) {
    let newCityNotYetSaved = {
        name: rowData.name,
        temperature: rowData.main.temp,
        condition: rowData.weather[0].description,
        conditionPic: rowData.weather[0].icon 
    }
    return newCityNotYetSaved
}

router.get("/city/:cityName",async (req, res) => {
    let cityName = req.params.cityName
    try{
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`);
        let dataToTheUser = parseRowData(response.data)
        res.send(dataToTheUser)
    } catch (err) {
        res.send(err)
    }
})

router.post("/city", async (req,res) => {
    let cityToSaveInDB = req.body
    console.log(cityToSaveInDB);
    try{
        res.send ("new city has beed added")
    } catch (err) {
        res.send(err)
    }
})

router.get('/cities', async (req,res)=> {
    try{
        let toSend = await City.find({})
        res.send(toSend)
    } catch(err) {
        res.send(err)
    }
})

router.delete("/city/:cityName",async (req, res) => {
    try{
        let cityName = req.params.cityName
        await City.findOneAndDelete({name : cityName})
        res.send("doneee")
    } catch(err) {
        res.send(err)
    }
})


module.exports = router

//good until here! lets see if nned to parse the data









//**dont sure i need this....  */

// class dataHendler {
//     constructor () {
//         this.cityDataFromAPI = {}
//     }
    
//     hendelRowData (rowData) {
//         this.cityDataFromAPI = {
//             name: rowData.name,
//             temperature: rowData.main.temp,
//             condition: rowData.weather[0].description,
//             conditionPic: rowData.weather[0].icon 
//         }
//     }
// }
