/* 
JavaScript 함수는 객체
-> 함수는 값으로 취급이 가능
-> 프로퍼티의 값으로도 쓸 수 있음 -> 메서드
*/

var dog = {
  name: "구찌",
  eat: function (food) {
    console.log(`${this.name}(은)는 ${food}를 먹습니다.`);
  },
};

dog.eat("고구마");

// 함수만 변수에 옮겨 담을 수 있다. -> 'name: "구찌"'는 안 가져옴
var eating = dog.eat;
console.log(typeof eating);

eating("고기");

var cat = {
  name: "나비",
  eat: eating,
};

cat.eat("생선");
