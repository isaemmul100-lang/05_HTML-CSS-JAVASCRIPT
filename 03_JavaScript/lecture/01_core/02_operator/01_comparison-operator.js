// 비교 연산자

/* 
==  : 타입을 변환한 후 값 비교
=== : 타입 변환 없이 타입까지 비교
*/

console.log(0 == ""); // 둘 다 숫자 0으로 변경
console.log(0 == false); // 둘 다 숫자 0으로 변경

console.log(0 === ""); // 타입 변경 없이 값과 타입까지 비교
console.log(0 === false); // 타입 변경 없이 값과 타입까지 비교

// 객체와 배열 비교
//
var a = {
  name: "bear", // JSON임
};
var b = {
  name: "bear", // JSON임
};

console.log(`a == b : ${a == b}`); // false
console.log(`a === b : ${a === b}`); // false -> 이유 : 주소값을 비교하기 때문

// a의 주소값을 c에 넣기
var c = a;

console.log(`a === c : ${a === c}`); // true -> 이유 : 주소값이 같음
