// Write a for-loop that outputs 'I will never give up' 10x

const clog = (log) => console.log(`${log}`)

const string = 'I will never give up'

const stringOfTheDay = (pass) => {
    
    for (let i = 0; i < 10; i++) {
        // using i+1 adds a counter next to the passed
        // string
        clog(`${[i+1]} ${pass}`)
    }
}
stringOfTheDay(string)


// Create a function that returns the number of vowels in a give string
// I A E O U & Y


const vowelsInString = (vowels) => {

let counter = 0

    // will run through string provideds length 
    for (let i  = 0; i < vowels.length; i++ ) {

        if ('aeiou'.includes(vowels[i].toLowerCase())) {
            counter++
        }
    }
    return counter
}

clog(vowelsInString('I am a man'))
