let btn = document.getElementById("btn");
let birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

// Ckecking
// btn.addEventListener("click", calculateAge);
// function calculateAge() {
//   console.log("It is Clicked");
// }

function calculateAge() {
  const birthdayValue = birthdayEl.value;
  //   console.log(birthdayValue);
  if (birthdayValue === "") {
    alert("Please Enter your Birthday");
  } else {
    const age = getAge(birthdayValue);
    resultEl.innerText = `Your Age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);

  //   console.log(currentDate.getFullYear());
  console.log(birthdayDate.getFullYear());
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  //    console.log(age);
  const month = currentDate.getMonth() - birthdayDate.getMonth();
  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }
  return age;
}
btn.addEventListener("click", calculateAge);
