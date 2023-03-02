// Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ;

// Quel âge aurait chaque inventeur aujourd'hui ?
// Trie les entrepreneurs par ordre alphabétique du nom de famille.

const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];


// Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ;

const between = entrepreneurs.filter (element => {
  return element.year >= 1970 && element.year <= 1980;
})

let statement = "les entrepreneurs qui sont nés dans les années 70"
console.log(statement);
console.log(between);


// ##################################################

// Sors une array qui contient le prénom et le nom des entrepreneurs ;

//* initaliser un array vide, puis faire une boucle pour qu'il aille chercher les infos sur toutes les lignes du tableau

stars = [];
entrepreneurs.forEach(element => {
  stars.push(element.first + '' + element.last)
});

console.log(stars)

// ##################################################

// Quel âge aurait chaque inventeur aujourd'hui ?

//*il faut faire une boucle pour resortir les infos de l'entrepreneur, et soustraire l'année de naisssance a l'année actuel

agestart = [];
entrepreneurs.forEach(actuel => {
  agestart.push(actuel.first + ' ' + actuel.last + ' a ' + (2023 - actuel.year) + 'ans')
})
console.log(agestart)


// ##################################################

// Trie les entrepreneurs par ordre alphabétique du nom de famille.

entrepreneurs.sort((a, b) =>{
  if (a.last < b.last) {
    return -1;
  } else {
    return 1;
  }
});
entrepreneurs.forEach(alphabetique => {
  console.log(alphabetique.last + ' ' + alphabetique.first);
})