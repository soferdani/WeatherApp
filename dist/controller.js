// const { template } = require("handlebars")

const tampe = new TampetureManager ()

// tampe.getDataFromDB ()
const userDemo = async function () {
    let demoName = "Rome"
    await tampe.getCityData("London")
    await tampe.getCityData("Madrid")
    await tampe.getCityData(demoName)

    await tampe.saveCity(demoName)
    
    let toPrint = tampe.cityData[0].name
    let toPrint2 = tampe.cityData.find(c => c.name == demoName )
    console.log(toPrint);
    console.log(toPrint2);
}

userDemo()
// tampe.saveCity("Madrid")

