// 함수의 호이스팅
// 함수의 선언은 코드의 선두로 끌어올려진 것처럼 동작
console.log(hello("bear")); // 출력문이 선언문보다 위에 있어도 동작함

function hello(name) {
  return `${name}님 안녕하세요!`;
}


// 표현식ㅇ르 사용했을 경우 정의보다 위에서 호출하면 오류가 남
// -> 호이스팅에 기대어서 안 쓰는 것을 권장

console.log(bye("bear")); // 변수로 선언한 것은 불가능


var bye = function (name) {
  return `${name}님 안녕히가세요!`;
};