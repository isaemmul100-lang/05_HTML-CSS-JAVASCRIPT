/* 
콜백 함수
- 다른 함수에 인자로 전달되어, 그 함수가 대신 호출해주는 함수
*/

const sayHello = () => "안녕하세요";

console.log(typeof sayHello); // function
console.log(typeof sayHello()); // string - 호출 : 함수, 메서드를 사용한다.

// 함수를 매개변수로 받음
function runTwice1(callback) {
  console.log(callback()); // 안녕하세요
  console.log(callback); // [Function: sayHello]
}

runTwice1(sayHello);

function runTwice(str, callback) {
  console.log(callback(str)); // 안녕하세요 + 굿모닝
  console.log(callback); // [Function (anonymous)]
}

runTwice("굿모닝", (str) => `안녕하세요 + ${str}`);

/* 
고차함수 : 함수를 인자로 받거나, 함수를 반환하는 함수
*/

// 반환된 함수 -> 자신이 생성될 때의 변수를 기억한다. (클로저)
function makeMultiplier(factor) {
  return function (n) {
    return n * factor; // n : 5, factor : 2
  };
}

const double = makeMultiplier(2);

console.log(double(5));

//
const makeAdder = (x) => {
  return (y) => {
    return x + y;
  };
};

// makeAdder = makeAdd

const makeAdd = (x) => (y) => x + y;
