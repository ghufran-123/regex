// program that matches a string that has an a followed by two to three 'b'

var pattern = /^a(b){2,3}$/g
var text = "abbb";

console.log(pattern.test(text));
console.log(text.match(pattern))