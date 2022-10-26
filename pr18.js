// program to search the numbers (0-9) of length between 1 to 3 in a given string.

var pattern = /\d{1,3}/g

var text = "6tyf_lkh9g6 khshdf908 ksdfg 98765";

console.log(pattern.test(text));
console.log(text.match(pattern));