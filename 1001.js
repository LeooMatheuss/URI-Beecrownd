var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = parseInt(lines.shift().trim());
var b = parseInt(lines.shift().trim());

console.log(`X = ${a + b}`);