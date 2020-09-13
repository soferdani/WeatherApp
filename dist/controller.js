
const tempManeger = new TampetureManager ()
const renderer = new Renderer()

const findNameFromHtml = function (theThis) {
    return $(theThis).closest(".city").find(".cityName").html()
}

const loadPage = async function () {
    await tempManeger.getDataFromDB()
    renderer.renderData(tempManeger.cityData)
}

const handleSearch = async function () {
    let cityInput = $("#userInput").val()
    $("#userInput").val("")
    await tempManeger.getCityData(cityInput)
    renderer.renderData(tempManeger.cityData)
}

const handleSave = async function () {
    let cityNameForSave = $(this).closest(".city").find(".cityName").html()
    await tempManeger.saveCity(cityNameForSave)
}

const handleRemove = async function () {
    let cityNameForSave = findNameFromHtml (this)
    await tempManeger.removeCity (cityNameForSave)
    loadPage()
}

$("#srcBtn").on('click', handleSearch)
$("#conteinder").on('click',".saveCityBtn",handleSave)
$("#conteinder").on('click',".removeCityBtn",handleRemove)
loadPage()