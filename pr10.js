// program that matches a "try" at the beginning of a string.

var pattern = /^(try)/g
var text = "try akjvb";

console.log(pattern.test(text));
console.log(text.match(pattern))