// 매개변수 : 함수를 정의할 때 쓰는 이름
// 인자 : 함수를 호출할 때 실제로 넘기는 값

// 매개변수 위치에 기본값을 설정할 수 있다.
function hello(name="아무개") {
  return `${name}님 안녕하세요!`;
}

console.log(hello("bear")); // 정상
console.log(hello("bear", "cat")); // 초과된 인수는 무시됨
console.log(hello()); // 기본값인 아무개로 나온다.
