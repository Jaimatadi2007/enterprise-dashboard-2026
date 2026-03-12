function one() {
  console.log("Step 1");
  two();
}

function two() {
  console.log("Step 2");
  three();
}

function three() {
  console.log("Step 3");
}

one();
