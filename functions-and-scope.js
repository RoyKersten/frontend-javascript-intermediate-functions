// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6

/**
 1.  maak een aparte array aan die alle cijfers vastlegd hoger of gelijk aan 8
 2.  maak vervolgens een functie aan met for loop die per index controleerd of het cijfer hoger of gelijk aan 8 is
 3.  Als het getal hoger of gelijk aan 8 is dan dit cijfer vastleggen in de apart aangemaakte array
 4.  log de apart aangemaakte array in de terminal voor het resultaat
 **/


/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3

countCumLaude = [];

function cumLaude(countCumLaudeGrades = []) {
    for (let i = 0; i < countCumLaudeGrades.length; i++) {
        if (countCumLaudeGrades[i] >= 8) {
            countCumLaude.push(countCumLaudeGrades[i]);
        }
    }
    return countCumLaude.length;
}

console.log(cumLaude(grades));                                //test with grades array
// console.log(cumLaude([6,4,5]));                            //test with grades2 array
// console.log(cumLaude([8, 9, 4, 6, 10]));                  //test with grades3 array


/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143

/**
 1. maak een functie met een parameter type array
 2. tel de totaalsom van de getallen in de array die wordt aangeboden op met een for loop
 3. return het genmiddelde door de totaalsom te delen door het aantal (gebruik hiervoor de .length van de array)
 4. log het antwoord in de terminal
 **/


/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx


let countTotal = 0;

function averageGrade(gradesArray = []) {
    for (let i = 0; i < gradesArray.length; i++) {
        countTotal = countTotal + gradesArray[i];
    }
    return countTotal / gradesArray.length;
}

console.log(averageGrade(grades));                                //test with grades array
// console.log(averageGrade([6,4,5]));                            //test with grades2 array
// console.log(averageGrade([8, 9, 4, 6, 10]));                   //test with grades3 array


/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

let countTotal2 = 0;

function averageGrade2(gradesArray = []) {
    for (let i = 0; i < gradesArray.length; i++) {
        countTotal2 = countTotal2 + gradesArray[i];
    }
    amountToRound = (countTotal2 / gradesArray.length)
    return amountToRound.toFixed(2);
}

console.log(averageGrade2(grades));                                //test with grades array rounding 2 decimals
// console.log(averageGrade2([6,4,5]));                            //test with grades2 array rounding 2 decimals
// console.log(averageGrade2([8, 9, 4, 6, 10]));                   //test with grades3 array rounding 2 decimals


/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9

/**
 1. loop elk getal in de array één voor één na en vergelijk deze met het getal dat wordt opgeslagen als hoogste getal, bij de start is het getal op index 0 het hoogste getal
 2. vergelijk vervolgens het getal op index 1 met het hoogste getal
 3. sla wederom het hoogste getal op
 4. vergelijk vervolgens het getal op index 2 met het hoogste getal
 5. sla wederom het hoogste getal op
 6. doorloop deze stappen voor de gehele array zodat alle getallen vergeleken zijn en uiteindelijk het hoogste getal is vastgelegd
 7. log het antwoord in de terminal
 **/

/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10


function highestGrade(gradesArray = []) {
    let highest = gradesArray[0];
    for (let i = 1; i < gradesArray.length; i++) {
        if (gradesArray[i] > highest) {
            highest = gradesArray[i];
        } else {
        }
    }
    return highest;
}

console.log(highestGrade(grades));
// console.log(highestGrade([6,4,5]));
// console.log(highestGrade([8, 9, 4, 6, 10]));


