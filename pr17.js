// program to check for a number at the end of a string.

var pattern = /\d$/g

var text = "6tyf_lkh9g6";

console.log(pattern.test(text));
console.log(text.match(pattern))