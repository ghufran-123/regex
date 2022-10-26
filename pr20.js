// program to search a literals string in a string and also find the location within the original string where the pattern occurs. 

// Sample text : 'The quick brown fox jumps over the lazy dog.'
// Searched words : 'fox'

var pattern = /(fox)/g;

var text = "The quick brown fox jumps over the lazy dog.";

console.log(pattern.test(text));
console.log(text.search(pattern));
