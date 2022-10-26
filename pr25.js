// program to extract year, month and date from an url  

var pattern = /\d{1,4}/g


var text = "https://www.washingtonpost.com/news/football-insider/wp/2016/09/02/odell-beckhams-fame-rests-on-one-stupid-little-ball-josh-norman-tells-author/";

console.log(pattern.test(text));
var arr = text.match(pattern)
console.log(arr);
var temp = [];

temp[0] = arr[2];
temp[1] = arr[1];
temp[2] = arr[0];

console.log(temp);