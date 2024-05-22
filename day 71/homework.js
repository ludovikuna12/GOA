let lebel = document.getElementById("lebel")
let mines = document.getElementById("mines")
let plus  = document.getElementById("plus")
let restart = document.getElementById("restart")

let count = 1
let lebel1 = 0

plus.addEventListener("click" ,function() {
lebel.textContent = lebel += count
})

mines.addEventListener("click" ,function() {
lebel.textContent = lebel -= count
})

restart.addEventListener("click" ,function() {
count = 1
lebel1 = 0
})