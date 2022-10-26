// program that matches a word at the end of string,

var pattern = /(try)\S*$/g
var text = "akjvb try.";

console.log(pattern.test(text));
console.log(text.match(pattern))