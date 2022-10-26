// program where a string will start with a specific number "6";


var pattern = /^6/g

var text = "6tyf_lkh9g";

console.log(pattern.test(text));
console.log(text.match(pattern))