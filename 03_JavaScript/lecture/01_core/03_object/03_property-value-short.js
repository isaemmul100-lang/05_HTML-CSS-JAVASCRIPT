// 프로퍼티 값 단축 구문
// -> AI 코드생성 대부분 단축시킴

var id = "p-0001";
var price = "30000";

var product = {
  id: id,
  price: price,
};

console.log(product);

// 축약
// 프로퍼티 키랑 변수명이 같을 경우 생략 가능
var product2 = {
  id,
  price,
};

console.log(product2);

var product = { id, price, description: "비싸요" };

// return {id, price} -> 묶어서 객체형태로 return -> React에서 많이 보임