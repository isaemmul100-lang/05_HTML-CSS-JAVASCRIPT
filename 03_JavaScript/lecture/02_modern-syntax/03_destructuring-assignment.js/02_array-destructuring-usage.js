// 1. 왼쪽에는 변수가 아니어도 올 수 있다.

const user = {};

[user.firstName, user.lastName] = "Gwansoon Yu".split(" ");
console.log(user);

// 2. 변수 값 교환하기
let student = "유관순";
let teacher = "홍길동";

[student, teacher] = [teacher, student];

console.log(`학생 : ${student}, 교사 : ${teacher}`);

// 3. rest 요소로 나머지 가져오기
const [sgin1, sgin2, ...rest] = [
  "양자리",
  "황소자리",
  "쌍둥이자리",
  "게자리",
  "사자자리",
];
console.log(sgin1);
console.log(sgin2);
console.log(rest);

// 4. 기본값 설정하기
const [name1 = "아무개", name2 = "김"] = ["길동"]; // defult값 설정
console.log(name1); // 길동
console.log(name2); // 김
