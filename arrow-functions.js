
// Arrow functions

// example 1 - a function with one argument and one return instruction

let value = 1;

let returnValue_v1 = function(x) {
	return x;
};

let returnValue_v2 = (x) => {
	return x;
};

let returnValue_v3 = x => x;

console.log(returnValue_v1(value) === returnValue_v2(value));
console.log(returnValue_v1(value) === returnValue_v3(value));
console.log(returnValue_v2(value) === returnValue_v3(value));

// example 2 - a function with two arguments and one return instruction

let number = 1;
let otherNumber = 1;

let sumValues_v1 = function(x, y) {
	return x + y;
};

let sumValues_v2 = (x, y) => {
	return x + y;
};

let sumValues_v3 = (x, y) => x + y;

console.log(sumValues_v1(number, otherNumber) === sumValues_v2(number, otherNumber));
console.log(sumValues_v1(number, otherNumber) === sumValues_v3(number, otherNumber));
console.log(sumValues_v2(number, otherNumber) === sumValues_v3(number, otherNumber));

// example 3 - a function without arguments and one return instruction

let globalScopeString = "Hello, World!";

let returnGlobalScopeString_v1 = function() {
	return globalScopeString;
};

let returnGlobalScopeString_v2 = () => {
	return globalScopeString;
};

let returnGlobalScopeString_v3 = () => globalScopeString;

console.log(returnGlobalScopeString_v1() === returnGlobalScopeString_v2());
console.log(returnGlobalScopeString_v1() === returnGlobalScopeString_v3());
console.log(returnGlobalScopeString_v2() === returnGlobalScopeString_v3());
