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
    //done

    getDataFromDB = async () => {
        try {
            let cityDataFromDB = await $.get('/cities')
            if (cityDataFromDB) {
                this.cityData = [...cityDataFromDB]
            }
        } catch (error) {
            console.log(error);
        }
    }
    //done - not yet tesded completly

    removeCity = async (cityNameFromUser) => {
        await $.ajax({
            method:'DELETE',
            url: `/city/${cityNameFromUser}`,
            success:  (massege) => {},
            error: (xhr,text,error) => {console.log(text);}
        })
    }
    //done
}