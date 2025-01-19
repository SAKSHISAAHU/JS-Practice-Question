// Random bussinessname generator

function adjective() {
    let a = "Creazy"
    let b = "Amazing"
    let c = "Fire"
    let d = Math.floor(Math.random() * 3)
    if (d == 0) { return a }
    else if (d == 1) { return b }
    else if (d == 2) { return c }
}
function shopName() {
    let a = "Engine"
    let b = "Foods"
    let c = "Garments"
    let d = Math.floor(Math.random() * 3)
    if (d == 0) { return a }
    else if (d == 1) { return b }
    else if (d == 2) { return c }
}
function anotherWord() {
    let a = "Bros"
    let b = "Limited"
    let c = "Hub"
    let d = Math.floor(Math.random() * 3)
    if (d == 0) { return a }
    else if (d == 1) { return b }
    else if (d == 2) { return c }
}

console.log("Business Name : ", adjective(), shopName(), anotherWord())

//  Math.random() generates a floating-point number between 0 (inclusive) and 1 (exclusive).so, here *3 means the range will become 0 to 2.
    
//  Math.floor() rounds the number down to the nearest integer.
