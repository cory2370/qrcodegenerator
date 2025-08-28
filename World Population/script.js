function countryFinderType() {
    const country = document.getElementById("country").value
    const url = `https://api.api-ninjas.com/v1/population?country=${country}`;
    document.getElementById("countryH1").innerHTML = country

    fetch(url, {
        headers: { "X-Api-Key": "va48W02pKnyiJFFnwskTBw==G2JvKdOItTwG0f2W" }
    })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            const tbody = document.getElementById("tbody")
            const tbody1 = document.getElementById("tbody1")
            const hispop = json.historical_population
            const popforc = json.population_forecast

            drawData(tbody, hispop)
            drawData(tbody1, popforc)
        })
        .catch(err => console.error(err))
}

function countryFinderSel() {
    const country = document.getElementById("country").value
    const url = `https://api.api-ninjas.com/v1/population?country=${country}`;
    document.getElementById("countryH1").innerHTML = country

    fetch(url, {
        headers: { "X-Api-Key": "va48W02pKnyiJFFnwskTBw==G2JvKdOItTwG0f2W" }
    })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            const tbody = document.getElementById("tbody")
            const tbody1 = document.getElementById("tbody1")
            const hispop = json.historical_population
            const popforc = json.population_forecast

            drawData(tbody, hispop)
            drawData(tbody1, popforc)
        })
        .catch(err => console.error(err))
}

const countrieslist = `https://restcountries.com/v3.1/all?fields=name`
fetch(countrieslist)
    .then(res => res.json())
    .then(json => {
        console.log(json)
        const select = document.getElementById('countriesOption')
        json.forEach(element => {
            const option = document.createElement("option")
            option.innerHTML = element.name.common
            option.value = element.name.common
            select.append(option)
        })
    })

function drawData(tbody, list) {
    const tbodyEl = tbody
    tbody.innerHTML = ''

    list.forEach(element => {
        const tr = document.createElement("tr")

        const yeartd = document.createElement('td')
        const poptd = document.createElement('td')
        const ycptd = document.createElement('td')

        yeartd.innerHTML = element.year
        poptd.innerHTML = element.population
        ycptd.innerHTML = element.yearly_change_percentage

        tr.append(yeartd, poptd, ycptd)
        tbodyEl.append(tr)
    })
}

