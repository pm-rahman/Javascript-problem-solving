// Task 01

const reverseString = (string)=>{
    let reverseString = "";
    for(let i=string.length-1;i>=0;i--){
        reverseString += string[i];
    }
    return reverseString
}
console.log(reverseString("Hi Bangladesh"))