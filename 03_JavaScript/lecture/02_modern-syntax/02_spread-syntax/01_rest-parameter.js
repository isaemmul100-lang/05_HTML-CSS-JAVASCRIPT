/* 
나머지 매개변수
- 매개변수 앞에 점 세개(...)를 붙이면 전달된 인자들을 한 곳에 모아 배열로 만들어줌
*/

function merge(msg1, msg2) {
  return msg1 + msg2;
}

console.log(merge("안녕하세요")); // 안녕하세요undefined
console.log(merge("안녕하세요", "반갑습니다.")); // 안녕하세요반갑습니다.
console.log(merge("안녕하세요", "반갑습니다.", "오늘은 밥 뭐 먹을까요?")); // 안녕하세요반갑습니다.

function mergeAll(...args) {
  console.log(Array.isArray(args));

  let message = "";

  for (const arg of args) message += arg;

  return message;
}

console.log(mergeAll("안녕하세요"));
console.log(mergeAll("안녕하세요", "반갑습니다."));
console.log(mergeAll("안녕하세요", "반갑습니다.", "오늘은 밥 뭐 먹을까요?"));

// RestParameter 사용시 주의할 점
// RestParameter는 반드시 마지막에 위치할 것
function introduce(name, ...hobbies) {
  return `${name}의 취미는 ${hobbies.join(", ")}입니다~`;
}

console.log(introduce("bear", "자전거", "코노"));