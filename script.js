// let a = 1;
// let b = 1;
// a++
// console.log(a);
// console.log(b += 2);

// let a = "Bonjour", b = "Monde";
// console.log(a + " " + b);

// let a = 3;
// console.log("Bonjour à tous les "+ a);
// console.log(a + "3");

// let numStudent = 5;
// let statement = `Dans mon groupe on est ${numStudent} moussaillons`;
// console.log(statement);

// const contentOfTHP = "Git-Ruby-Rails-HTML-CSS-JS";
// const lesson = contentOfTHP.split("-");
// console.log(lesson[0]); // "Git"
// console.log(lesson[5]); // "JS"

let THPSessionNum2 = {
  numOfMouss: 80,
  cities: ["Paris", "Lyon", "Montpellier"],
  successRate: 0.80,
  sessionMoto: "keep pushing to the top"
  };
  
  console.log(THPSessionNum2.numOfMouss);
  console.log(THPSessionNum2.sessionMoto);

  THPSessionNum2.numOfMouss = 79; // je modifie un attribut existant
  console.log(THPSessionNum2.numOfMouss);
  THPSessionNum2.favoriteLesson = "Présentation de Sinatra" //je rajoute un attribut
  console.log(THPSessionNum2.favoriteLesson); //j'imprime tout l'objet pour voir


  let attributName = "successRate";
  console.log(THPSessionNum2[attributName]);

  console.log("36" == 36); // va retourner TRUE car le contenu est identique
  console.log("36" === 36); // va retourner FALSE car d'un côté on a un string et de l'autre un number

//   let number = 5; //fais ensuite le test avec d'autres valeurs
// if(number > 0) {
// console.log("number est positif");
// } 

let number = 7; //fais ensuite le test avec d'autres valeurs (positives et négatives)
if(number > 0) {
console.log("number est positif");
} else if(number === 0) {
console.log("number est nul");
} else {
console.log("number est négatif");
} 

if (true && true) {
  console.log("ce message s'affiche car avec un ET, si les deux conditions sont à TRUE, le résultat est TRUE");
  }
  if (true || false) {
  console.log("ce message s'affiche car avec un OU, si l'une des conditions est à TRUE, le résultat est TRUE");
  } 
  if (!false) {
  console.log("ce message s'affiche car un NON sur FALSE donne TRUE");
  }

// Boucle
  // for(let count = 0; count <=5; count++){
  //   console.log(`on va compter jusqu'à 5 : ${count}`);
  // }
  
  // console.log(count); // Va créer une erreur car count est en let et donc son scope est limité au bloc for.
  // //passe count en var pour tester ce que ça donne

//   let answer = "";
//   while(answer !== "oui") {
//   console.log("alors ?")
//   answer = prompt("Tu kiffes THP ?");
// } 

// console.log("haaa, tu nous fais plaisir !") // Qui se lassera le premier entre toi et ton ordi ? :D


// let word = "";
// let letter;

// while (true) {
//     letter = prompt('Tape UNE lettre stp :');

//     if (letter) {
//         word += letter; //on rajoute la lettre saisie à la suite du mot
//         console.log(word);
//     } else { // on rentre dans ce else si letter est vide (l'utilisateur ne saisit rien)
//         break; // On quitte la boucle
//     }
// }
// console.log(`voilà ce que tu as tapé : ${word}`);


// //On déclare d'abord un array
// let weeksOfTHPArray = ["Semaine 1 - Introduction au Code", "Semaine 2 - Découverte de Ruby", "Semaine 3 - Programmation Orientée Objet", "Semaine 4 - Initiation à Rails"];

// //On déclare ensuite un objet
// let weeksOfTHPObject = {Semaine5: "Rails intermédiaire", Semaine6: "Rails avancé", Semaine7: "HTML / CSS et intro au JS", Semaine8: "JavaScript de front"};

// console.log("**********Parcourons le array :")
// for(let index in weeksOfTHPArray) {
//   console.log(index); // index va aller de 0 à 3
//   console.log(weeksOfTHPArray[index]);
// }

// console.log("**********Parcourons l'objet :")
// for(let weekAttribut in weeksOfTHPObject) {
//   console.log(weekAttribut); //weekAttribut va avoir les valeurs "Semaine5" à "Semaine8"
//   console.log(weeksOfTHPObject[weekAttribut]);
// }

//Les Fonctions
function sayHello() {
  console.log("Bonjour toi !");
}

sayHello();


// function multiply(inputNumber1, inputNumber2) {
//   let outputNumber = inputNumber1 * inputNumber2;
//   return outputNumber;
// }

// console.log(multiply(2, 3));
// console.log(multiply(2, multiply(2,3)));
// console.log(outputNumber); // Va créer une erreur car la variable en let n'existe pas en dehors de la fonction


const multiply = function(inputNumber1, inputNumber2) {
  let outputNumber = inputNumber1 * inputNumber2;
  return outputNumber;
}

console.log(multiply(2, 3));

const otherMultiply = multiply; //On peut ainsi affecter la fonction à une autre variable
console.log(otherMultiply(2, 3));

//équivalente a la fonction au dessus dans un autre format plus concis
// const multiply = (inputNumber1, inputNumber2) => {
//   let outputNumber = inputNumber1 * inputNumber2;
//   return outputNumber;
// }