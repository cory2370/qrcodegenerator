const url = 'https://api.api-ninjas.com/v1/sp500'
fetch(url, {
    headers: { "X-Api-Key": "va48W02pKnyiJFFnwskTBw==G2JvKdOItTwG0f2W" }
})
    .then(res => res.json())
    .then(json => {
        console.log(json)

        const tbody = document.getElementById('tbody')
        
        json.forEach(element => {
            const tr = document.createElement('tr')

            const tickerTD = document.createElement('td')
            const nameTD = document.createElement('td')
            const dateTD = document.createElement('td')
            const hqTD = document.createElement('td')
            const indTD = document.createElement('td')

            tickerTD.innerHTML = element.ticker
            nameTD.innerHTML = element.company_name
            dateTD.innerHTML = element.date_added
            hqTD.innerHTML = element.headquarters
            indTD.innerHTML = element.sub_industry

            tr.append(tickerTD, nameTD, dateTD, hqTD, indTD)
            tbody.append(tr)
        });
    })