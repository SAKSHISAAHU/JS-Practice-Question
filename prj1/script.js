// console.log("Faulty Calulator")

let random = Math.random()
console.log(random);
let num1 = Number(prompt("Enter first number :")); 
let opt = prompt("select operator :")
let num2 = Number(prompt("Enter second number :"));
let result;
if (random < 0.1) {
    if (opt === "+") {
        result = num1 - num2;
    } else if (opt === "-") {
        result = num1 / num2;
    } else if (opt === "*") {
        result = num1 + num2;
    } else if (opt === "/") {
        result = num1 * num2
    }
}
else {
    if (opt === "+") {
        result = num1 + num2;
    } else if (opt === "-") {
        result = num1 - num2;
    } else if (opt === "*") {
        result = num1 * num2;
    } else if (opt === "/") {
        result = num1 / num2
    }
}
alert(`result = ${result}`);
console.log(result);

 // here earlier i was not using Number() after prompt() and that result in JS concatination, As JS understand input value as a string not as a number so it concatinate the numbers. Eg- 2+2 = 22 instread of 4.
 