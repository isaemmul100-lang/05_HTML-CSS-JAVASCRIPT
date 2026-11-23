/* 
spread 문법 -> 전개문법

- 하나로 뭉쳐있는 값의 집합을 펼쳐서 개별값의 목록으로 만든다.
*/

// 배열이 아니라 숫자 목록을 인수로 받음
console.log(Math.max(10, 30, 20));

const arr = [10, 20, 30];
console.log(Math.max(arr)); // NaN : 숫자연산을 못한다.

console.log(Math.max(...arr)); // 스프레드문법

const arr1 = [10, 30, 20];
const arr2 = [100, 300, 200];

console.log(Math.min(...arr1, ...arr2));
console.log(Math.min(10, 30, 20, 100, 300, 200));

// 배열을 바꾸는 것인가? X : 복사해 온 값에서 괄호([])만 벗겨준다.
console.log(arr1);

// 객체 리터럴에서도 펼치기
// 일반 객체는 Iterable가 아니라 펼칠 수 없음
// 객체 리터럴 안에서 객체를 펼치는 것은 가능
const user = { name: "홍길동", age: 20 };

// console.log(...user); // Spread syntax requires ...iterable
console.log({ ...user }); // console.log(user);와 결과가 같음

// 기본값을 준비하고, 같은 값이 있으면 나중값으로 덮어씌울 때
console.log({ ...user, age: 32 }); // 뒤에 적은 것으로 덮어씌움 (순서 중요)
console.log({ ...user, city: "서울" }); // 새로운 키값도 추가 가능

const defaults = { size: "md", color: "gray" };
const options = { color: "blue" };

console.log({ ...defaults, ...options }); // { size: 'md', color: 'blue' }
