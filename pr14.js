// program to match a string that contains only upper and lowercase letters, numbers, and underscores


var pattern = /^[\w_]+$/g

var text = "tyf_lkh9g";

console.log(pattern.test(text));
console.log(text.match(pattern))