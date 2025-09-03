function generateQRC() {
    const QRdata = document.getElementById("QRdata").value
    const url = `https://api.api-ninjas.com/v1/qrcode?format=png&data=${encodeURIComponent(QRdata)}`

    fetch(url, {
        headers: { "X-Api-Key": "va48W02pKnyiJFFnwskTBw==G2JvKdOItTwG0f2W" }
    })
        .then(res => res.text())
        .then(base64 => {
            const QRoutput = document.getElementById("QRoutput")
            QRoutput.innerHTML = ''
            const QRImage = document.createElement("img")
            QRImage.src = `data:image/png;base64,${base64}`
            QRImage.setAttribute("height", '20%')
            QRImage.setAttribute("width", '20%')
            QRoutput.append(QRImage)
        })
}