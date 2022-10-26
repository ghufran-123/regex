// Find the first occurrence of "GH", NOT at the beginning and end of a word:

var pattern = /\BGH\B/g
var text = "GHkjvbtzryGH";

console.log(pattern.test(text));
console.log(text.match(pattern))