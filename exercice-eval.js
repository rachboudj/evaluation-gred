// 1) Afficher la somme de deux nombres
// let a = 2 + 2;
// console.log(a);


// 2) Convertir une température de degrés Celsius à Fahrenheit
// let celsius = 37;
// let fahrenheit = (celsius * 9 / 5) + 32
// console.log(fahrenheit);


// 3) Calculer l'air d'un rectangle
// let petitCote = 20
// let grandCote = 30
// let airRectangle = petitCote * grandCote

// console.log(airRectangle);


// 4) Vérifier si un nombre est pair ou impair
// let nb = 12;
// if (nb % 2 == 0) {
//     console.log("Le nombre est pair");
// } else {
//     console.log("Le nombre est impair");
// }


// 5) Calculer la factorielle d'un nombre
// let nbFactorielle = 6;
// let resultatFactorielle = 1;
// for (let f = 1; f <= nbFactorielle; f++) {
//     resultatFactorielle = resultatFactorielle * f
//     console.log(resultatFactorielle);
// }


// 6) Nombre de 1 à 10 avec for
// for (let r = 0; r < 10; r++) {
//     console.log(r + 1);
// }


// 7) Nombre de 1 à 10 avec while
// let i = 0;
// while (i < 10) {
//     i++
//     console.log(i);
// }


// 8) Nombre de 10 à 1 avec while
// let z = 10
// while (z > 0) {
//     console.log(z);
//     z--
// }


// 9) Note avec switch
// let note = 18
// switch (note) {
//     case 12:
//         console.log("Passable");
//         break;

//     case 14:
//         console.log("Assez bien");
//         break;

//     case 16:
//         console.log("Bien");
//         break;

//     case 18:
//         console.log("Très bien");
//         break;

//     case 20:
//         console.log("Excellent");
//         break;

//     default:
//         console.log("Défaut");
//         break;
// }


// 10) Tableau + calcul de la somme du tableau
// let tab = [1, 2, 3, 4, 5];
// let somme = 0;

// for (let s = 0; s < tab.length; s++) {
//     somme += tab[s]
// }
// console.log(somme);


// 11) Deux boucles for qui permettent d'afficher un rectangle 5x5 d'étoile (*) sur la console
// for (var i = 0; i < 5; i++) {
//     var rectangle = ""
//     for (var k = 0; k < 5; k++) {
//         rectangle += "*"
//     }
//     console.log(rectangle);
// }


// 12) Écrivez une boucle for qui passe à travers chaque caractère d'une chaîne de caractère et compte le nombre de fois qu'un caractère
// spécifique apparaît
const caractereSpec = "Test caractère@@@@@@";
const regex = /[^a-zA-Z0-9]/g;
const parcourirChaine = caractereSpec.match(regex);
const nbCaractereSpeciaux = parcourirChaine.length;

// console.log(nbCaractereSpeciaux);


// 13) Créez une boucle while qui continue à s'excécuter jusqu'à ce qu'une certaine condition soit remplie (par exemple, 
// un nb aléatoire est égal à un nombre spécifique)
// let i = 0;
// while (i = 10) {
//     i++
//     console.log(Math.random(i)); 
// }