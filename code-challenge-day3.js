//! solving using with out Math.max()
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

	// this runs through the entire array and it will detect each num
	// and it will check it against the conditional if the conditional is true
	// then exit and return that value
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



/** 
//! Given any array of numbers (all will be > 0),
//! write a function that returns the number of odd
//!  numbers in the array.
*/

const myArray = [
    17,
    24, 
    69, 
    86, 
    42, 
    13, 
    11
];

function findOdd(list) {

    let newArray = [];
    
    // this will run through the array.length
	for (let i = 0; i < list.length; i++) { 
        // checks each element in list to see if it returns 1 and if true pushes to new newArray
        if (list[i] % 2 === 1) {
            newArray.push(list[i])
		}
	}
	return newArray.length;
}

const numOdd = findOdd(myArray); // should return 4
console.log(`The amount of odd numbers in the array are: ${numOdd}`);
