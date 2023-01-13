//solving using with out Math.max()
const array = [
	100,
	200,
	85, 
	25, 
	15, 
	10, 
	85
];

function grabNumber(arr) {
	let largeNumber = 0;

	//! this runs through the entire array and it will detect each num
	//! and it will check it against the conditional if the conditional is true
	//! then exit and return that value
	for (let i = 0; i < arr.length; i++) { 

		if (arr[i] > largeNumber) {
			largeNumber = arr[i];
		}
	}

	return largeNumber;
}
console.log(grabNumber(array));



// solving using Math.max()
function grabNumber(arr) {
	// using a spread operator to pass array values
	const largest = Math.max(...arr);
	return largest;
}
console.log(grabNumber(array));
