// const { template } = require("handlebars")

const tampe = new TampetureManager ()

// tampe.getDataFromDB ()
const userDemo = async function () {
    let demoName = "Rome"
    await tampe.getCityData("London")
    await tampe.getCityData("Madrid")
    await tampe.getCityData(demoName)
    await tampe.removeCity(demoName)
}

userDemo()
// tampe.saveCity("Madrid")

