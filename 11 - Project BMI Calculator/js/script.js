const btnEl = document.getElementById("btn");
const bmiInputEl = document.getElementById("bmi-result");
const weightCondition = document.getElementById("weight-condition");
function calculateBMI(){
    // console.log("Clicked");
    const heightValue = document.getElementById("height").value / 100;

    const weightValue = document.getElementById("weight").value;

    // console.log(heightValue, weightValue);

    const bmiValue = weightValue / (heightValue * heightValue);
    // console.log(bmiValue);
    
    bmiInputEl.value = bmiValue;
    if (bmiValue < 18.5) {
      weightCondition.innerText = "Under Weght";
    }else if(bmiValue >=18.5 && bmiValue <=24.8 ){
        weightCondition.innerText = "Normal Weght";
    }else if(bmiValue >= 25 && bmiValue <= 29.9){
        weightCondition.innerText = "Over Weght";
    }else if (bmiValue <=30) {
        weightCondition.innerText = "Obesity";
    }

    
}

btnEl.addEventListener("click", calculateBMI)