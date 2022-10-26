// program to extract year, month and date from an url  

// var pattern = /[0-9]{4}.[0-9]{1,2}.[0-9]{1,2}/g;
var pattern = /\d{1,4}/g


var text = "https://www.washingtonpost.com/news/football-insider/wp/2016/09/02/odell-beckhams-fame-rests-on-one-stupid-little-ball-josh-norman-tells-author/";

console.log(pattern.test(text));
console.log(text.match(pattern)); 