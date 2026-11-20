/* 문제 08. switch 문 작성하기
   유형 : 코드 작성 | 난이도 : ★★☆

   [1] getDayName(day) : 0~6 숫자를 받아 '일요일' ~ '토요일' 을 반환한다.
         범위를 벗어나면 '잘못된 입력' 을 반환한다. 함수 안이므로 break 대신 return 을 쓴다.
   [2] 입력창에서 읽은 값 '3' 으로 getDayName 을 호출했더니 '잘못된 입력' 이 나온다. 이유를 적고 고친다.
   [3] getSeason(month) : break 를 일부러 생략하는 방식(fall-through)으로 여러 case 를 묶는다.
         3,4,5 → '봄' / 6,7,8 → '여름' / 9,10,11 → '가을' / 12,1,2 → '겨울' / 그 외 → '잘못된 월'
*/

// [1]
function getDayName(day) {
  // TODO
  switch (day) {
    case 0:
      return "일요일";
    case 1:
      return "월요일";
    case 2:
      return "화요일";
    case 3:
      return "수요일";
    case 4:
      return "목요일";
    case 5:
      return "금요일";
    case 6:
      return "토요일";
    default:
      return "잘못된 입력";
  }
}
console.log(getDayName(0)); // 기대 : 일요일
console.log(getDayName(6)); // 기대 : 토요일
console.log(getDayName(7)); // 기대 : 잘못된 입력

// [2]
const input = "3"; // 입력창에서 읽은 값
console.log(getDayName(Number(input))); // 기대 : 수요일
// 이유 : input값은 지금 string이다.

// [3]
function getSeason(month) {
  // TODO
  switch (month) {
    case 3:
    case 4:
    case 5:
      return "봄";
    case 6:
    case 7:
    case 8:
      return "여름";
    case 9:
    case 10:
    case 11:
      return "가을";
    case 12:
    case 1:
    case 2:
      return "겨울";
    default:
      return "잘못된 월";
  }
}
console.log(getSeason(4)); // 기대 : 봄
console.log(getSeason(8)); // 기대 : 여름
console.log(getSeason(11)); // 기대 : 가을
console.log(getSeason(1)); // 기대 : 겨울
console.log(getSeason(13)); // 기대 : 잘못된 월
