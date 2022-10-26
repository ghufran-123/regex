// program to find sequences of lowercase letters joined with a underscore.

var pattern = /^(\w)+_(\w)+$/g
var text = "aahsfb_jhsbdfd";

console.log(pattern.test(text));
console.log(text.match(pattern))