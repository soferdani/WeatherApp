// const { $where } = require("../server/model/City")

class TampetureManager  {
    constructor () {
        this.cityData = []
    }

    findIndexOfCity (cityName) { /// reallt stach here!! 
        console.log("hahs");
    }

    parseRowData (rowData) {
        let newCityNotYetSaved = {
            name: rowData.name,
            temperature: rowData.main.temp,
            condition: rowData.weather[0].description,
            conditionPic: rowData.weather[0].icon 
        }
        this.cityData.push(newCityNotYetSaved)
    }

    getCityData(cityNameFromUser) {
        $.ajax({
            method: "GET",
            url: `/city/${cityNameFromUser}`,
            success: (successMassage) => {
                this.parseRowData(successMassage)
            },
            error: (xhr,text,error) => {console.log(text)}  
        }) 
    }
    //done

    saveCity (cityName) {
        let indexToSend = this.findIndexOfCity(cityName)
        $.ajax ({
            method: "POST",
            url: '/city',
            success: () => { //how do i send it

            },
            error: (xhr,text,error) => {console.log(text)}  
        })
    }

    getDataFromDB () {
        $.ajax({
            method: "GET",
            url: '/cities',
            success: (cityDataFromDB) => {
                this.cityData.push(cityDataFromDB) //i might chinge it 
            },
            error: (xhr,text,error) => {console.log(text)}
        })
    }
    //done
} 

