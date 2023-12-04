/**
 * Creating Reusable Function Lab
 */




/**
 * Part 1: Thinking Functionality
 */


const  basketNumbers = [15, 76, 5, 45, 67];

// Take an array of numbers and return the sum.
const addArray = (numArray) => {
    let sum = 0;
    for(let i = 0; i <= numArray.length - 1; i++){
        sum = sum + numArray[i];
    }
    return sum;
}
console.log(addArray(basketNumbers));

// Take an array of numbers and return the average
const avgArray = (avArray) => {
    let sum =0;
    for(let i = 0; i <= avArray.length - 1; i++){
        sum = sum + avArray[i];
    }
    return sum / avArray.length;
}

console.log(avgArray(basketNumbers));

// Take an array of strings and return the longest string
const lambChop = ["This", "is", "the", "song", "that", "never", "ends"];


const longString = (groupString) => {
    let longestString = '';
    for(let i = 0; i <= groupString.length - 1; i++){
        if(groupString[i].length > longestString.length){
            longestString = groupString[i];
        }
        
    }
    return longestString;
}
console.log(longString(lambChop));


// Take an array of strings, and a number and return an array of the strings that are longer than the given number

const givenNumString = (groupString, num) => {
    let arrayStrings = [];
    for(let i = 0; i <= groupString.length - 1; i++){
        if(groupString[i].length > num){
         arrayStrings.push(groupString[i]);
        }
        
    }
    return arrayStrings;
}

console.log(givenNumString(lambChop, 2));
// Optional- Take a number n, and pring every number between 1 and n without using loops. Use recursion.