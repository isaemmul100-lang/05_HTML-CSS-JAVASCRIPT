/* 문제 01. 객체 리터럴로 객체 만들기
   유형 : 코드 작성 | 난이도 : ★☆☆

   [1] 객체 리터럴로 book 객체를 만든다.
         title   : '어린 왕자'
         author  : '생텍쥐페리'
         price   : 12000
         getInfo : '『어린 왕자』 - 생텍쥐페리 (12000원)' 문자열을 반환하는 메서드 (this 사용)
   [2] 아래 세 줄의 출력 결과를 예상해서 적고, 왜 다른지 설명한다.
   [3] 빈 객체 movie 를 만든 뒤, 나중에 title 과 year 프로퍼티를 추가한다.
*/

// [1]
const book = {
  // TODO
  title: "어린왕자",
  author: "생텍쥐페리",
  price: 12000,
  getInfo: function () {
    return "『어린 왕자』 - 생텍쥐페리 (12000원)";
  },
};

// [2]
console.log(book); // 예상 :book가 그대로 출력
console.log(book.getInfo); // 예상 :[Function: getInfo]
console.log(book.getInfo()); // 예상 : 『어린 왕자』 - 생텍쥐페리 (12000원)  ([1] 을 완성한 뒤 주석을 푼다)
// 두 번째와 세 번째가 다른 이유 : 두번째는 getInfo가 뭔지 알려주고 세번째는 펑션 안에 있는 내용을 가져오기 때문

// [3]
// TODO : 빈 객체 movie 를 만들고 title : '인터스텔라', year : 2014 를 추가한다.
const movie = {
  title: "인터스텔라",
  year: 2014,
};

console.log(movie);   // 기대 : { title: '인터스텔라', year: 2014 }
