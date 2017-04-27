function add (a, b) {
    return a + b;
}
console.log(add(3, 1));

var toAdd = [9, 5];
console.log(add(toAdd[0], toAdd[1])); // 14
console.log(add(...toAdd)); // 14

var groupA = ['Lola', 'Fredy'];
var groupB = ['Eros'];
var final = [...groupB, 3, ...groupA];
console.log(final);

var personA = ['Henrique', 36];
var personB = ['Helo', 33];
function greet (name, age) {
    console.log('Hi ' + name + ', you are ' + age);
}
greet(...personA);
greet(...personB);

var names = ['Lola', 'Fredy'];
var final = ['Henrique', ...names];
final.forEach(function (name) {
    console.log('Hi ' + name);
});