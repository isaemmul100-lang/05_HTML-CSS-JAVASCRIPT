// 화살표 함수
// -> this를 만들지 않는다

const theater = {
  store: "CGV 가산점",
  title: ["치이카와", "최종면접"],

  // 화살표 함수로 콜백을 넘김
  showByArrow() {
    // console.log에 있는 this : forEach의 this가 아닌 showByArrow에 있는 this를 가르키기 때문에 theater에 있는 것을 가르킴
    this.title.forEach((title) => console.log(this.store + ":" + title));
  },

  // 일반 함수로 콜백을 넘김
  showByNomal() {
    this.title.forEach(function (title) {
      // foreach의 내부에서 사용될 뿐 -> this : 자기 자신인 function 내부에서 가르킴
      store = "내부 스토어";
      // foreach는 콜백을 객체없이 그냥 호출하게 됨. -> 즉, this를 지정하지 못 함 (this = undefined)
      console.log(this.store + ":" + title);
    });
  },
};

theater.showByArrow();
console.log("----------");
theater.showByNomal();

//
const dog = {
  name: "구찌",
  eatArrow: (food) => console.log(`${this.name}은 ${food}를 먹습니다.`),
  eatMethod(food) {
    console.log(`${this.name}은 ${food}를 먹습니다.`);
  },
};

dog.eatArrow("고구마")
dog.eatMethod("고구마")

// 정리
/* 
객체의 메서드를 정의할 때   : 메서드 축약표현
콜백 함수를 넘길 때        : 화살표 함수 사용
*/