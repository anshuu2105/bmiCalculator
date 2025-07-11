function calculateBMI() {
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const result = document.getElementById("result");
  const condition = document.getElementById("condition");

  if (height === "" || weight === "" || height <= 0 || weight <= 0) {
    result.value = "";
    condition.textContent = "Please enter valid values!";
    return;
  }

  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
  result.value = bmi;

  let status = "";
  if (bmi < 18.5) {
    status = "Underweight";
  } else if (bmi < 25) {
    status = "Normal weight";
  } else if (bmi < 30) {
    status = "Overweight";
  } else {
    status = "Obese";
  }

  condition.textContent = `Weight Condition: ${status}`;
}
