class Renderer {
    renderData (allCityData) {
        $("#conteinder").empty()
        const source = $("#wather").html()
        const tamplete = Handlebars.compile(source)
        let newHtml = tamplete({allCityData})
        $("#conteinder").append(newHtml)
    }
}
//done
