// Task 01 Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method

const reverseString = (string) => {
    let reverseString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reverseString += string[i];
    }
    return reverseString
}
// console.log(reverseString("Hi Bangladesh"))


// Task 02 Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.
const numArray = [10, -20, 7, 2, -3];
const sumOfPositiveNum = (numArray) => {
    const positiveNumArray = [];
    let sum = 0;
    for (const num of numArray) {
        if (num >= 0) {
            positiveNumArray.push(num);
            sum = positiveNumArray.reduce((pre, current) => pre + current, 0)
        }
    }
    return sum;
}
// console.log(sumOfPositiveNum(numArray));

// Task 03 Write a JavaScript program to find the most frequent element in an array and return it.

const repeatedArray = [2, 3, 4, 5, 6, 4, 6, 4, 9];

const frequentNumChecker = (numArray) => {
    let frequentNumCount = {};
    for (const num of numArray) {
        frequentNumCount[num] = (frequentNumCount[num] || 0) + 1;
    }
    let frequentNum;
    let hightCount = 0;
    for (const element in frequentNumCount) {
        if (frequentNumCount[element] > hightCount) {
            hightCount = frequentNumCount[element];
            frequentNum = element;
        }
    }
    return frequentNum;
}
// console.log(frequentNumChecker(repeatedArray));

// Task 04 Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

const findTwoNumWithSum = (arr, target) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            if (arr[i] + arr[j] === target) {
                return [arr[i], arr[j]];
            }
        }
    }
}
// console.log(findTwoNumWithSum([1,3,4,6,7,9,11],10));

// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const simpleCalculator = (num1, num2, operator) => {
    switch(operator){
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return "sorry, Give +,-,*,/ those operator"
    }
}
// console.log(simpleCalculator(2, 4, "%"));

// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
const findSecondSmallNum = (arr) => {
    let sortedArray = 0;
    sortedArray = arr.sort((a, b) => a - b)
    return sortedArray[1];
}
// console.log(findSecondSmallNum([2, 42, 53, 5, 64, 3]));