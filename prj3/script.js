// write a program to calculate factorial using for loops only

console.log("Factorial Calculator");
let num=Number(prompt("Enter Number :"))
console.log(`Entered number is : ${num}`);
let factorial = 1;
for (let index = 1; index <= num; index++) {
    factorial *= index;
}
console.log(`Factorial is : ${factorial}`);
let conf=confirm(`${factorial}`);