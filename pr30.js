// program to abbreviate 'Jumps' as 'test' in a given string


var pattern = /(jumps)/g;

var text = "The quick brown fox jumps over the lazy dog.";

console.log(pattern.test(text));
console.log(text.replace(pattern,"test"));
