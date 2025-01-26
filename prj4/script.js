let color ={
    1:"green",
    2:"blue",
    3:"pink",
    4:"yellow",
    5:"red"
}
document.querySelectorAll(".box").forEach(e=>{
    let num = Math.floor(Math.random()*5) + 1;
    e.style.backgroundColor = color[num]
})
