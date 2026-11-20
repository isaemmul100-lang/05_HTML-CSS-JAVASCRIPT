// 화살표 함수 기본문법

// function 대신 화살표를 이용해서 함수를 더 짧게 쓰자
// 자바 람다 : (a, b) -> a + b (함수형 인터페이스)

var message;

// 표현식 원본
message = function () {
  return "hello workd";
};

// 2. function을 지우고 화살표를 붙일 수 있음
message = () => {
  return "hello workd";
};

// 3. 구현부가 한 줄이면 중괄호와 return 생략 가능
message = () => "hello workd";

// 4. 매개변수가 있는 경우
message = (val1, val2) => `hello workd ${val1}, ${val2}`;

// 5. 매개변수가 한 개 있는 경우 소괄호 생략 가능
message = val1 => `hello workd ${val1}`;

var createUser = (id, name) => ({id, name}) // 객체 리터럴로 return
console.log(createUser(1, "bear")); // -> 객체
