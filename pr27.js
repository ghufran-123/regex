// program to separate and print the numbers of a given string.

var pattern = /\d{1}/g


var text = "https://www.washingtonpost.com/news/football-insider/wp/2016/09/02/odell-beckhams-fame-rests-on-one-stupid-little-ball-josh-norman-tells-author/";

console.log(pattern.test(text));
var arr = text.match(pattern)
console.log(arr);