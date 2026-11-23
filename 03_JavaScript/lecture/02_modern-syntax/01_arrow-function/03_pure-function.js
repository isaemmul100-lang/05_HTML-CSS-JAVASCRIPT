/* 
순수함수(pure function)
1. 같은 인자를 넣었을 때 언제나 같은 값을 반환한다. (외부 상태에 외존하지 않는다.)
2. 함수 바깥의 어떤 것도 바꾸지 않는다. (부수 효과가 없다.)

- 부수효과 (side effect)
: 함수가 반환값을 만드는 것 이외에 다른 영향을 주는 흔적
(외부 변수 변경, 인수로 받은 객체, 배열의 변경, console.log, 화면 변경, 서버요청)
*/

const add = (a, b) => a + b; // 순수함수

// 비순수함수 : 외부 변수에 의존. rate가 변경하면 반환값도 변경됨
let rate = 0.1;
const multipleRate = (price) => price + price * rate;
// 순수함수로 바꾼것
// const multipleRate = (price, rate) => price + price * rate;

// 비순수함수 : 외부 변수를 변경
let visitCount = 0;
const visit = () => {
  visitCount++;
  return visitCount;
};

// 비순수함수 : 인자로 받은 배열을 변경
const addItem = (list, item) => {
  list.push(item);
  return list;
};

// 순수함수
const addItemPure = (list, item) => {
  // concat : 새로운 리스트를 만들어 내용들을 합쳐줌
  list.concat(item);
};
