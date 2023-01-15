// given an array of nums write a func
// to return the sum

const array = [23, 74, 18, 42, 69, 91, 88]; // 6 elements

function callSum(arr) {
	let sum = arr[0]; 

	for (let i = 1; i < arr.length; i++) {
        // add position 0 of the array and add it too
        // position the for loop is returning too i
		sum += arr[i];
	}
    return sum;
}

console.log(callSum(array));
