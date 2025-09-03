const have = document.getElementById("have").value
const want = document.getElementById("want").value
const amount = document.getElementById("amount").value
const url = `https://api.api-ninjas.com/v1/convertcurrency?have=${have}&want=${want}&amount=${amount}`

function currencyConverter(arr) {
    const h2 = document.getElementById("h2")
    h2.innerHTML = arr.old_amount + ' ' + arr.old_currency + " is " + arr.new_amount + arr.new_currency
}

fetch(url, {
    headers: { "X-Api-Key": "va48W02pKnyiJFFnwskTBw==G2JvKdOItTwG0f2W" }
})
    .then(res => res.json())
    .then(json => {
        currencyConverter(json)
    })