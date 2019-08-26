/*const a = 221;
let b = a - 5;

console.log(b, a);
*/
//let은 변수가 변할 수 있고 const는 stable, var역시 let처럼 변할 수 있다
/*

변수는 되도록 const 사용할것. let 이나 var 말고

String (" "): 텍스트를 묶어줘

Boolean: true = 1 / false = 0
Number: 말 그대로 숫자
Float: float하는 숫자. 소수점이 있는 경우?
*/
//querySelector->id로 선택해 보겠다 만일 id로 찾고싶으면 #~~class는 .~~
//querySelector은 중요
const title = document.querySelector("#title");
console.log(title);

//.log.error......
//html을 DOM형태로 변형 가능
title.innerHTML = "Hi! From JS";
title.style.color = "red";
console.dir(document);
document.title = "I own you now";
