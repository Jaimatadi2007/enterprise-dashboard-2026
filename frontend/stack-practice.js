function alpha() {
  console.log("Alpha start");
  beta();
  console.log("Alpha end");
}

function beta() {
  console.log("Beta");
}

alpha();
