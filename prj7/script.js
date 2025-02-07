function copyque1() {
    let copy=document.getElementById("que1").innerHTML
    navigator.clipboard.writeText(copy)
    .then(()=>{
        alert(`copied successfully!!!---Now paste the code in console to get the output`);
    })
    .catch(()=>{
        alert("error");
    })
}

function copyque2() {
    let copy=document.getElementById("que2").textContent
    navigator.clipboard.writeText(copy)
    .then(()=>{
        alert(`copied successfully!!!---Now paste the code in console to get the output`)
    })
    .catch(()=>{
        alert("error")
    })
}

function copyque3() {
    let copy=document.getElementById("que3").textContent
    navigator.clipboard.writeText(copy)
    .then(()=>{
        alert(`copied successfully!!!---Now paste the code in console to get the output`)
    })
    .catch(()=>{
        alert("error")
    })
}

function copyque4() {
    let copy=document.getElementById("que4").textContent
    navigator.clipboard.writeText(copy)
    .then(()=>{
        alert(`copied successfully!!!---Now paste the code in console to get the output`)
    })
    .catch(()=>{
        alert("error")
    })
}

// Write a function that takes an array of numbers and returns the sum of all elements.
// function checksum(num) {
//     let sum=0
//     for (let i = 0; i < num.length; i++) {
//         sum+=num[i]
//     }
//     return sum;
// }
// console.log(checksum([1,2,3,4]))





