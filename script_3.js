//Pyramide de Mario

number = prompt ("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")

function generatePyramid() {
  var totalRows = number;
  var output = '';
  for (var i = 1; i <= totalRows; i++) {
      for (var j = 1; j <= i; j++) {
          output +=' #';
      }
      console.log(output);
      output = '';
  }
}
generatePyramid();