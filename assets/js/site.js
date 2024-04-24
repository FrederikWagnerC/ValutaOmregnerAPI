/*  gode ideer og tips:

hvis du vil begrænse antallet af decimaler på dit resultat, så brug methoden toFixed(antal decimaler)  eks.  result.toFixed(2) giver et resultat med 2 decimaler

hvis du vil have navnet på din valuta med fra options i dit select tag, så undersøg denne linje...
 let myCurrency = mySelectElement.options[mySelectElement.selectedIndex].innerText
 prøv evt. at consol logge mySelectElement.options, hvor mySelectElement er det select element du har fundet i din DOM med getElementById()

 */

const apiKey = '0a645492c599b3b71df1cf5a'

const kroneBeløb = document.getElementById('valutaKr');
const valutaSelector = document.getElementById('valutaSelector');
const beregnKnap = document.getElementById('beregnKnap');
const valutaOutput = document.getElementById('valutaOutput');
const outputElement = document.getElementById('outputElement')

let result
const apiLink = 'https://v6.exchangerate-api.com/v6/' + apiKey + '/latest/DKK'

function fetchKurs(currency) {
    fetch(apiLink, currency)
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data, currency) {
            function valutaBeregner() {

                let kurs
                if (!kroneBeløb.value) {
                    alert('Indtast et beløb!')
                } else if (!valutaSelector.value) {
                    alert('Vælg en valuta!')
                }

                if (valutaSelector.value === 'Euro') {
                    kurs = data.conversion_rates.EUR
                } else if (valutaSelector.value === 'Dollar') {
                    kurs = data.conversion_rates.USD
                } else if (valutaSelector.value === 'Pund') {
                    kurs = data.conversion_rates.GBP
                }


                result = (kroneBeløb.value * kurs).toFixed(2)

                valutaOutput.value = result + ' ' + valutaSelector.options[valutaSelector.selectedIndex].innerText
                return kurser = 10
            }
            beregnKnap.addEventListener('click', valutaBeregner)
        })
        .catch(function (error) {
            console.log(error)
        })
}

fetchKurs()
