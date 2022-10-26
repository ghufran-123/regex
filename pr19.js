// program to search some literals strings in a string.
// Sample text : 'The quick brown fox jumps over the lazy dog.'
// Searched words : 'fox', 'dog', 'horse'

var pattern = /(dog)/g

var text = 'The quick brown fox jumps over the lazy dog.';

console.log(pattern.test(text));
console.log(text.match(pattern));