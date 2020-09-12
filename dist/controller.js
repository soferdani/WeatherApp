// const { template } = require("handlebars")

const tampe = new TampetureManager

// tampe.getDataFromDB ()
tampe.getCityData("London")
tampe.getCityData("Madrid")
tampe.saveCity("Madrid")
console.log(tampe.cityData[0]);