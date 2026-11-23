// 구조분해할당
// - 배열이나 객체를 분해해서 변수에 한 번에 담는 문법

const nameArr = ["Gildong", "Hong"];

const [firstName, lastName] = nameArr; // 배열 모양으로 분해하겠다.

console.log(firstName); // Gildong
console.log(lastName); // Hong

const [char1, char2] = "JS";
console.log(char1);
console.log(char2);

// 2. 함수의 반환값을 바로 분해하기
console.log("Saimdang Shin".split(" ")); // 쪼갠 결과를 배열로 담음
const [firstName2, lastName2] = "Saimdang Shin".split(" ");
console.log(firstName2);
console.log(lastName2);

// 필요없는 요소 건너뛰기
const [first, , last] = ["firstname", "middlename", "lastname"];
console.log(first); // firstname
console.log(last); // lastname

// 변수가 더 많을 경우 : 남는 변수는 undefined가 됨
const [a, b, c] = [1, 2];
console.log(a); // 1
console.log(b); // 2
console.log(c); // undefined

// 요소가 더 많을 경우 : 남는 요소는 버려짐
const [d] = [1,2,3]
console.log(d); // 1
