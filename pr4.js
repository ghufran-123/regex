// program that matches a string that has an a followed by zero or one 'b

var pattern = /^a(b?)$/g
var text = "ab";

console.log(pattern.test(text));
console.log(text.match(pattern))