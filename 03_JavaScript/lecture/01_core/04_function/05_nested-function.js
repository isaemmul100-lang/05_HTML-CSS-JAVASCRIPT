// 중첩 함수
// 함수 안의 함수

function outer() {
  var outerVal = "외부함수";

  function inner() {
    var innerVal = "내부함수";

    console.log(outerVal, innerVal);
  }

  inner();
}

outer();

// Scope가 다름 -> 외부에서는 내부함수도, 내부함수의 변수도 볼 수가 없다.
// inner();

// 함수 자체를 return할 때 사용

// 숫자를 세는 함수
function createCounter(start) {
  var count = start;
  return function () {
    count = count + 1;
    return count;
  };
}

var counter1 = createCounter(10);
console.log(counter1());
console.log(counter1());
console.log(counter1());

/* 클로저(Closure)
-> 내부함수가 자신이 선언된 외부 스코프의 변수를 기억하고
   외부함수의 실행이 끝난 뒤에도 변수에 접근할 수 있는 것
특징
1. 내부함수의 호출을 숨긴다.
2. 내부함수가 외부함수의 변수를 기억한다.
3. 외부함수를 여러 번 호출해도 서로 간섭하지 않는다. */

var counter2 = createCounter(20);
console.log(counter2());
console.log(counter2());
console.log(counter2());