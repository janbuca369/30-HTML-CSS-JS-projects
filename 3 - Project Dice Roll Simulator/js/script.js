const buttonE1 = document.getElementById("roll-button");

// buttonE1.addEventListener("click", ()=>{
//     console.log('Clicked');

// }) // Checking button

const diceE1 = document.getElementById("dice");

function rollDice() {
  const rollResult = Math.floor(Math.random() * 6) + 1;
  // console.log(rollResult); // chaeking
  const diceFace = getDiceFace(rollResult);
//   console.log(diceFace); // Chaking

    // diceE1.textContent = diceFace; // Display number
    diceE1.innerHTML = diceFace;
  
}

function getDiceFace(rollResult) {
  switch (rollResult) {
    case 1:
      return "&#9856;";

    case 2:
      return "&#9857;";
    case 3:
      return "&#9858;";
    case 4:
      return "&#9859;";
    case 5:
      return "&#9860;";
    case 6:
      return "&#9861;";
    default:
      return " ";
      break;
  }
}

buttonE1.addEventListener("click", () => {
  diceE1.classList.add("roll-animation");
  setTimeout(() => {
    diceE1.classList.remove("roll-animation");
    rollDice();
  }, 1000);
});
