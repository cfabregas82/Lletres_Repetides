//Fase3//

var myName = ["C", "R", "I", "S", "T", "I", "A", "N"];
var  myMap = new Map();

for (i = 0; i < myName.length; i++) {
    nameFunction(myName[i]);
}

console.log(myMap);

function nameFunction(cognome) {
    if (myMap.has(cognome) === false) {
        myMap.set(cognome, 1);
    } else {
        myMap.set(cognome, myMap.get(cognome) + 1);
    }
}

