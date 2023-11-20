// Conditions 1 užduotis


var kaina = prompt("Įveskite prekės kainą")

var bePvm = (kaina * 0.79)

var pvm = (kaina - bePvm)

console.log("Prekės kaina su PVM: " + kaina)
console.log("PVM: " + pvm.toFixed(2))
console.log("Prekės kaina be PVM: " + bePvm)


// Conditions 2 užduotis (nepavyko)


var kaina = prompt("Įveskite prekės kainą")
var pristatymas = confirm("Ar reikalingas pristatymas?")
kaina = parseFloat(kaina)

var miestas = 0;
pristatymas == true ? miestas = prompt("Į kurį miestą reiks pristatyti?") : null;


var pristatymoKaina = 0;
kaina >= 50 ? pristatymoKaina = 0 : pristatymoKaina = 20;


kaina >= 50 ? console.log("Prekę nemokamai pristatysime į " + miestas + " per 1-3 dienas") : pristatymas == false || miestas == "Vilnius" ? console.log("Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a") : console.log("Pristatymas: " + pristatymoKaina + "€") && console.log("Iš viso: "+ (pristatymoKaina + kaina) + "€");

