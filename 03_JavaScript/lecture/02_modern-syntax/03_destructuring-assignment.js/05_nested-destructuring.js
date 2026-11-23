/* 
중첩 구조 분해
- 객체 안에 객체가, 배열 안에 배열이
*/

const product = {
  size: {
    width: 10,
    height: 30,
  },
  items: ["doll", "robot"],
};

const {
  // size 안에 들어가서 분해해라
  size: { width: w, height: h },
  items: [item1, item2],
} = product;

console.log(w);
console.log(h);
console.log(item1);
console.log(item2);

// console.log(size); // size is not defined

const { size } = product;

console.log(size);

// 옵셔널 체이닝
// cosnt name = response?.user?.name