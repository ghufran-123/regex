// program to find the occurrence and position of the substrings within a string


var pattern = /(exercises)/g;

var text = "Python exercises, PHP exercises, C# exercises";

console.log(pattern.test(text));
console.log(text.search(pattern));