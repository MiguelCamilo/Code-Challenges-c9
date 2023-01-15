//! 1. Write a temp converter, Given a temp in celcius. Output the equivalent temp in Farenheit

const tempConvert = celsius => { // func uses celcius to fahren formula 
    const fahren = (celsius * 1.8) + 32
    return fahren
}

const input = 29
const convertTemp = tempConvert(input) // takes input = 29 and passes it to the func then the func returns the value and stores it in the convertTemp var

console.log(`${input} degrees Celsius is ${convertTemp} degrees Fahrenheit.`)


/// / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / 


//! 2. Convert one currency to USD
const roundNumber = num => Math.round(num * 100) / 100 // function created to round

const currencyConverter = yen => { // func uses yen to usd formula
    const usd = (yen * .0078)
    return usd
}
const yen = 1
const convertedCurrency = currencyConverter(yen)

console.log(`${yen} yen is $${roundNumber(convertedCurrency)}`)



/// / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / 



//! 3. Given a num of rows and colums, ouput a grid of *'s
function cloudPyramid(row, column) {

	for (let i = 0; i < row; i++) {

		let row = "";

		for (let j = 0; j < column; j++) {
            
			row += "*";
		}
        console.log(row);
	}
}
cloudPyramid(3, 3);


//! 4. Create a multiplication grid 1x1 to 10x10 using loops
