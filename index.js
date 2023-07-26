// Task 01 Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method

const reverseString = (string) => {
    if (typeof string !== "string") {
        return "This function take only string as input"
    }
    let reverseString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reverseString += string[i];
    }
    return reverseString
}
// console.log(reverseString("Hi Bangladesh"));


// Task 02 Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.
const numArray = [10, -20, 7, 2, -3];
const sumOfPositiveNum = (numArray) => {
    if (!Array.isArray(numArray)) {
        return "This Function take only Array as input"
    }
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
    if (!Array.isArray(numArray)) {
        return "This Function take only Array as input"
    }
    let frequentNumCount = {};
    for (const num of numArray) {
        frequentNumCount[num] = (frequentNumCount[num] || 0) + 1;
    }
    let frequentNum;
    let hightCount = 0;
    for (const element in frequentNumCount) {
        if (frequentNumCount[element] >= hightCount) {
            hightCount = frequentNumCount[element];
            frequentNum = element;
        }
    }
    return frequentNum;
}
// console.log(frequentNumChecker(repeatedArray));

// Task 04 Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

const findTwoNumWithSum = (arr, target) => {
    if (!Array.isArray(arr)) {
        return "This Function take only Array as input"
    }
    if (typeof target !== "number") {
        return "This Function take only number as target"
    }
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
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "This take number as input"
    }
    switch (operator) {
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
// console.log(simpleCalculator(2, 4, "+"));
// manipulate with DOM
function calculator(e) {
    const operator = e.innerText;
    const firstNum = parseInt(document.getElementById("firstNum").value);
    const secondNum = parseInt(document.getElementById("secondNum").value);
    const result = simpleCalculator(firstNum,secondNum,operator).toFixed(2);
    document.getElementById('result').innerHTML = isNaN(result)?"Please Fill those input":`Result: ${result}`
}


// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
const createRandomPassword = (length) => {
    if (typeof length !== "number") {
        return "This Function take only number as input"
    }
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const specialChars = "!@#$%^&*()-_=+[]{}|;:',.<>?";

    const uppercaseChar = uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
    const lowercaseChar = lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
    const specialChar = specialChars[Math.floor(Math.random() * specialChars.length)];

    let password = uppercaseChar + lowercaseChar + specialChar;
    for (let i = 0; i < length - 3; i++) {
        password += Math.floor(Math.random() * 10);
    }
    return password;
}
// console.log(createRandomPassword(7));

// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

const romanToInteger = (str) => {
    let integer = 0;
    let num = 0;
    for (const char of str) {
        if (char === "I") num = 1;
        if (char === "V") num = 5;
        if (char === "X") num = 10;
        if (char === "L") num = 50;
        if (char === "C") num = 100;
        if (char === "D") num = 500;
        if (char === "M") num = 1000;
        integer += num;
    }
    return integer;
}
// console.log(romanToInteger("VI"));

// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
const findSecondSmallNum = (arr) => {
    if (!Array.isArray(arr)) {
        return "This function take array as input"
    }
    let sortedArray = 0;
    sortedArray = arr.sort((a, b) => a - b)
    return sortedArray[1];
}
// console.log(findSecondSmallNum([2, 42, 53, 5, 64, 3]));