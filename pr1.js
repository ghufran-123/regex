// program to check that a string contains only a certain set of characters

var pattern = /^[a-z]{2,}$/g
var text = "checking";

console.log(pattern.test(text));
console.log(text.match(pattern))