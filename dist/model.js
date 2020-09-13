// const { $where } = require("../server/model/City")

class TampetureManager  {
    constructor () {
        this.cityData = []
    }
    //done

    getCityData = async (cityNameFromUser) => {
        try{
            let cityDataFromServer = await $.get(`/city/${cityNameFromUser}`)
            this.cityData.push(cityDataFromServer)
        } catch (error) {
            console.log(error);
        }
    }
    //done

    saveCity = async (cityNameFromUser) => {
        let cityFromLocalArrey = this.cityData.find(c => c.name = cityNameFromUser)
        await $.post('/city', cityFromLocalArrey)
    }
    //done not yet chechd

    getDataFromDB = async () => {
        try {
            let cityDataFromDB = await $.get('/cities')
            this.cityData.push(cityDataFromDB)
        } catch (error) {
            console.log(error);
        }
    }
    //done
} 

