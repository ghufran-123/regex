// program to find the sequences of start wuth upper case letter end by lower case letters


var pattern = /^[A-Z]+[a-z]+$/g
var text = "Anjac";

console.log(pattern.test(text));
console.log(text.match(pattern))