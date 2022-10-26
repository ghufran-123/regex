// program that matches a word containing 'z'

var pattern = /z+/g
var text = "kjvbtzry";

console.log(pattern.test(text));
console.log(text.match(pattern))