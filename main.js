/*
click on button
three sections, each sections has 5 items
each section does a loopy thing that chooses a number
the three numbers from those section must match to win the bet( we will code bet later)
*/

// option + shft + F = the prettier extension //

// const gamble = document.querySelector(".gamble"); - Shey Delete
const slots = Array.from(document.querySelectorAll(".slot"));

// gamble.addEventListener("click", spinWheel); - Shey Delete 

const box1 = document.querySelector(".box1"); 
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
let score = 0

document.querySelector("form").addEventListener("submit",spinWheel);
// document.querySelector('#reset').addEventListener('click', reset)

function spinWheel(event) {
    // this stops the form from refreshing the page when it gets submitted b/c that is the default behavior of forms
    event.preventDefault()
  for (let slot of slots) {
    slot.innerText = Math.ceil(Math.random() * 5);
  }
  const a = box1.innerText;
  const b = box2.innerText;
  const c = box3.innerText;
  updateMoney(a === b && b === c);
}

function updateMoney(isWon) {
  const totalAmount = document.querySelector(".totalAmount");
  const betAmount = document.querySelector('input[name="bet"]:checked').value;

  // .totalAmount & "bet" cacatenated

  if (isWon) {
    totalAmount.innerText = Number(totalAmount.innerText) + Number(betAmount);
    score = score + 1 ;
    document.querySelector('.score').innerText = 'Ascension Step:' + score ;
  } else {
    totalAmount.innerText = totalAmount.innerText - betAmount;
  }
}

// function wonGame() {
//   if(score = 3) {
//       document.querySelector(".hide").style.opacity = "100%";
//       // document.querySelector('.show').style.opacity = "0%" 

//   }
// }

// function reset() {
//   document.querySelector('.show').style.opacity = "100%";
//   document.querySelector('.hide').style.opacity = "0%"
//   score = 0
//   totalAmount.innerText = Number('0') ;
// }

/*
when gamble is pressed we call on the function spinwheel
then 
*/

// let a = Math.ceil(Math.random() * 5)
// let b = Math.ceil(Math.random() * 5)
// let c = Math.ceil(Math.random() * 5)
// document.querySelector('#slot1').innerText = a
// document.querySelector('#slot2').innerText = b
// document.querySelector('#slot3').innerText = c
// didWeWin()

// function spinWheelTwo(event) {
//     event.preventDefault()
//     slots.forEach(slot => slot.innerText = Math.ceil(Math.random() * 5))
//     updateMoney (slots.every(slot => slot.innerText === slots[0].innerText))
// } - Shey's Beautiful Simple Code 

