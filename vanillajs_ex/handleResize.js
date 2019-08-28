const title = document.querySelector("#title");

function handleClick(event) {
  title.style.color = "blue";
}
title.addEventListener("resize", handleClick);
//자바스크립트는 자동적으로 함수를 객체에 붙인다.
