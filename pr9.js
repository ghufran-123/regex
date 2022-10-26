// program that matches a string that has an 'a' followed by anything, ending in 'b'

var pattern = /^a+(\w+)b$/g
var text = "akjvb";

console.log(pattern.test(text));
console.log(text.match(pattern))