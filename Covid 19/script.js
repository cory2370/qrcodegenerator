function reportCases() {
    const country = document.getElementById("country").value
    const url = `https://api.api-ninjas.com/v1/covid19?country=${country}`

    fetch(url, {
        headers: { "X-Api-Key": "va48W02pKnyiJFFnwskTBw==G2JvKdOItTwG0f2W" }
    })
        .then(res => res.json())
        .then(json => {
            const tbody = document.getElementById("tbody")
            tbody.innerHTML = ''
            json.forEach(element => {
                const h2country = element.country
                for ([k, v] of Object.entries(element.cases)) {
                    const tr = document.createElement("tr")

                    const ktd = document.createElement("td")
                    const vtotaltd = document.createElement("td")
                    const vnewtd = document.createElement("td")
                    const h2 = document.getElementById("h2")

                    h2.innerHTML = h2country
                    ktd.innerHTML = k
                    vtotaltd.innerHTML = v.total
                    vnewtd.innerHTML = v.new

                    tr.append(ktd, vtotaltd, vnewtd)
                    tbody.append(tr)
                }
            });
        })
}