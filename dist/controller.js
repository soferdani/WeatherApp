
const tampe = new TampetureManager ()
const ranndeeerere = new Renderer()
// tampe.getDataFromDB ()


const userDemo = async function () {
    await tampe.getDataFromDB()
    let datatoRand = tampe.cityData
    console.log(tampe.cityData); 
    ranndeeerere.renderData(datatoRand)
}

userDemo()
// tampe.saveCity("Madrid")

