//Array reduce method

const numbers = [ 1, 8, 7 ,4, 9, 11];

let sum = numbers.reduce((total, value) => { 
	return total + value
},0);
console.log( sum );
