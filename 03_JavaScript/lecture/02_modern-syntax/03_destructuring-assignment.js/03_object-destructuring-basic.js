// 객체 구조 분해 할당 기본 문법
// 객체는 프로퍼티 이름으로 분해함

const pants = {
  productName: "배기팬츠",
  color: "검정색",
  price: 30000,
};

const { productName, color, price } = pants;
// const { productName: productName, color: color, price: price } = pants;

console.log(productName);
console.log(color);
console.log(price);

// 배열과 다르게 순서는 상관 없다. (이름으로 찾기 때문임)
const { price: p1, productName: n1 } = pants;
console.log(n1, p1);

/* 
다름이름으로 받기
{프로퍼티 이름:새 변수 이름}
- 프로퍼티 이름만 같으면, 새 변수 이름을 사용해도 값을 받을 수 있다.
*/

// 3. 축약표현과 짝을 이룬다.
const id = "p-0001";
const made = { id, price };

// 구조분해할당
const { id: gotid } = made;

console.log(gotid);
