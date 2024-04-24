/*  gode ideer og tips:

hvis du vil begrænse antallet af decimaler på dit resultat, så brug methoden toFixed(antal decimaler)  eks.  result.toFixed(2) giver et resultat med 2 decimaler

hvis du vil have navnet på din valuta med fra options i dit select tag, så undersøg denne linje...
 let myCurrency = mySelectElement.options[mySelectElement.selectedIndex].innerText
 prøv evt. at consol logge mySelectElement.options, hvor mySelectElement er det select element du har fundet i din DOM med getElementById()

 */

const kroneBeløb = document.getElementById('valutaKr');
const valutaSelector = document.getElementById('valutaSelector');
const beregnKnap = document.getElementById('beregnKnap');
const valutaOutput = document.getElementById('valutaOutput');

const euroKurs = 7.46;
const dollarKurs = 6.98;
const pundKurs = 8.68

let result

function valutaBeregner() {
    let kurs
    if (!kroneBeløb.value) {
        alert('Indtast et beløb!')
    } else if (!valutaSelector.value) {
        alert('Vælg en valuta!')
    } else {

        if (valutaSelector.value === 'Euro') {
            kurs = euroKurs
        } else if (valutaSelector.value === 'Dollar') {
            kurs = dollarKurs
        } else if (valutaSelector.value === 'Pund') {
            kurs = pundKurs
        }


        result = (kroneBeløb.value / kurs).toFixed(2)

        valutaOutput.value = result + ' ' + valutaSelector.options[valutaSelector.selectedIndex].innerText
    }
}



beregnKnap.addEventListener('click', valutaBeregner)
