// program to replace all occurrences of space, comma, or dot with a colon


var pattern = /\s/g;

var text = "The quick brown fox jumps over the lazy dog.";

console.log(pattern.test(text));
console.log(text.replace(pattern,":"));