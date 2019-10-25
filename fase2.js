//Fase2//

var myName = ["C", "R", "I", "S", "T", "I", "A", "N", 3];
var vocal = ["A", "E", "I", "O", "U"];

console.log("Partimos del nombre " + myName.join(''));

for (var i = 0; i < myName.length; i++) { 
    printLetter(myName[i]);
}

function printLetter(letter) {
    if (typeof letter === 'number') {
        console.log("Los nombre de persona no incluyen el número: " + letter);
    }else if (vocal.indexOf(letter.toUpperCase()) != -1) {
        console.log("Se ha encontrado la vocal: " + letter);
    }else {
        console.log("Se ha encontrado la consonante: " + letter);
    }
}