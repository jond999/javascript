
// Higher-order functions

// example 1

function numberTimes(n) {
	return function(m) {
		return m * n;
	};
};

let numberTimes2 = numberTimes(2);
for(let i = 1; i <= 10; i++) {
	console.log(numberTimes2(i));
}

let numberTimes3 = numberTimes(3);
for(let i = 1; i <= 10; i++) {
	console.log(numberTimes3(i));
}

// example 2

function ifTrueThenSomething(predicate, something) {
	if(predicate) {
		return something;
	}
	return predicate;
}

let double = n => 2 * n;
let n = 2;
console.log(ifTrueThenSomething(n % 2 == 0, double(n)));
