// Un prompt s'affiche avec la question suivante
// "De quel nombre veux-tu calculer la factorielle ?"
// Utilisateur rentre un nombre (par ex 4)
// Dans la console le résultat suivant est affiché
// "Le résultat est : 24"

// calcul de factoriel

factorielle = prompt("De quel nombre veux-tu calculer la factorielle ?")
var i = 0;
var p = 1;
while(i< factorielle){
  i++;
  var p = p*i;

}
console.log ("factoriel de " +factorielle+ " est " +p);
