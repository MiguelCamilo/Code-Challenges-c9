// sales receipt code challenge

// TODO: create a sales receipt summary w/ subTotal and taxRate and total

const clog = (log) => console.log(`${log}`)

// func for Math.Round
const roundNumber = num => Math.round(num * 100) / 100

const calculateSaleTax = (subTotal, taxRate) => {
    const taxTotal = subTotal * taxRate

    return taxTotal
}

const TAX_RATE = 0.07 // palm beach county, FL rate
const customerSubtotal = 17.25

// grabs the result from the calc in the func and stores in a new var
// by calling the func it passes the values in the var to the func param
const customerTaxTotal = calculateSaleTax(customerSubtotal,TAX_RATE)
// 
const customerTotal = roundNumber(customerSubtotal + customerTaxTotal)

 // when func returns a data type you dont have to clog the function
clog((`Subtotal          $${customerSubtotal}  \nTax                  $${roundNumer(customerTaxTotal)}`))

clog('------------------------')

// return total amount 

clog(`TOTAL             $${roundNumber(customerTotal)}`)