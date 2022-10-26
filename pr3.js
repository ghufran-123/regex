// program that matches a string that has an a followed by one or more b's.


var pattern = /^a(b+)$/g
var text = "abb";

console.log(pattern.test(text));
console.log(text.match(pattern))