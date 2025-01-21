const btnEl = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpanInput = document.getElementById("total");
// console.log(btnEl);

// Checking
// function calculateTotal(){
//     console.log("Clicked");
// }

function calculateTotal() {
  const billValue = billInput.value;
  const tipValue = tipInput.value;
  // console.log(billValue);
  // console.log(tipValue);

  const totalValue = billValue * (1 + tipValue / 100);
  totalSpanInput.innerHTML = totalValue.toFixed(2);
}

btnEl.addEventListener("click", calculateTotal);
