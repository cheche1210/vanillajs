/*if (10 > 5) {
  //if 조건문은 항상 참이어야함
  console.log("hi");
} else if ("10" === "10") {
  console.log("lakaka");
} else {
  console.log("ho");
}

//&&(and),||(or)
*/

//prompt => alert같은것 오래된 자바스크립트

const age = prompt("hello");
if (age >= 18 && age <= 21) {
  console.log("you can drink");
} else if (age > 21) {
  console.log("go ahead");
} else {
  console.log("no");
}
