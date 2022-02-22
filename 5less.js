//1 

let playerOne = 0
let playerTwo = 0

for (let i=0; i < 3; i++ ) {
  playerOne += Math.floor (Math.random() * (6 - 1 + 1) + 1)
  playerTwo += Math.floor (Math.random() * (6 - 1 + 1) + 1)
  console.log( `First player: ${playerOne}`)
  console.log ( `Second player: ${playerTwo}` )
}

//2

let day = 0
let startDate = new Date(2000, 0, day)
let finishDate = new Date()
let count = 0

while(startDate < finishDate){
  if(startDate.getDate() === 13 && startDate.getDay() === 5){
    count++
  }
  day++
  startDate = new Date(2000, 0, day)
}

console.log(count)

// //3

let number = 15
let a = number
let parts = 3
let partsArray = []
let randSum = 0
for (let i =1; i < parts; i++) {
  let rand = Number((Math.random() * a).toFixed(0)) //.toFixed (2)
  partsArray.push(rand)
  randSum += rand
  a = a-rand
}
partsArray.push(Number((number - randSum).toFixed(0))) //.toFixed (2)
console.log (partsArray)