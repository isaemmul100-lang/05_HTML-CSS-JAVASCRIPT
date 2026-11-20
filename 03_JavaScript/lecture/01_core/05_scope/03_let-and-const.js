/* 
let : 변수 선언 (값을 바꿀 수 있음)
const : 변수 선언 (값을 바꿀 수 없음)

-> 기본적으로 const, 값을 꼭 바꿔야할 때만 let, var는 안 씀
*/

// let 사용

// 1. 중복 선언이 허용되는 문제 해결
let msg = "안녕하세요";
console.log(msg);

// Identifier 'msg' has already been declared -> 중복 선언을 할 수 없음
// let msg = "안녕히가세요";
// console.log(msg);

// 2. 함수레벨 스코프 문제 해결
for (let i = 0; i < 10; i++) {}
// console.log(i); // i is not defined

// 3. 변수 호이스팅 해결
// console.log(test); //Cannot access 'test' before initialization -> 초기화하기 전까지는 사용할 수 없음
let test = "반갑습니다~";


// const 사용
// 재할당 금지
const DISCOUNT_RATE = 0.15;
// DISCOUNT_RATE = 0.5; // Assignment to constant variable. -> const는 값 변경 금지

// 선언과 동시에 초기화를 해야함. (const y; 불가)
const y = "";

// const로 선언해도 객체의 내용은 바뀐다.
// 변수에 객체나 배열을 담으면 참조값을 저장한다.
const student = { name:"헝길동", age:20}

student.name = "유관순"
console.log(student);

// student = {}; // 주소를 바꾸는 것은 안됨