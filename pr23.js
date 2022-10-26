// program to replace whitespaces with an underscore and vice versa

var pattern = /\s/g;

var text = "The quick brown fox jumps over the lazy dog.";

console.log(pattern.test(text));
console.log(text.replace(pattern,"_"));