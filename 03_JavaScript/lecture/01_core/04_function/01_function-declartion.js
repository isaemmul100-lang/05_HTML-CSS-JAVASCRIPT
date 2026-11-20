// 함수
// -> 코드 뭉치

// 함수선언문으로 함수를 만들었다.
// 이름 생략 불가
function hello(name) {
  return `${name}님 안녕하세요!`;
}

// 메서드 오버로딩 -> javaScript 에는 없음
function hello(name, age) {
  return `${name}님 ${age}안녕하세요!`;
}

console.log(hello("홍길동")); // 덮어씌어짐 -> 홍길동님 undefined안녕하세요!

// 값처럼 쓸 수 있는 객체 일급 객체(first-class object)
// - 변수에 할당할 수 있다.
// - 함수의 인자로 전달할 수 있다.
// - 함수의 반환값으로 사용할 수 있다.

// 표현식 -> 리터럴로 함수를 만들어 변수에 할당하는 방식
var hello = function (name) {
  return `${name}님 안녕하세요!`;
};

console.log(hello("홍길동"));
