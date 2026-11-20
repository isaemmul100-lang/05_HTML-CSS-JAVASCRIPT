/* 
- null : 값이 없다 -> 개발자가 의도적으로 값이 없다고 정의한 것.
- undefined : 값이 없다. -> 값이 담긴 적이 없음. (JavaScript Engine이 알아서 쓸 거라 개발자가 쓰는 것은 권장 안 함)
*/

var undef;
console.log(undef); // undefined

console.log(typeof null);       // object -> JavaScript 만들어질 때 구현 실수
console.log(typeof undefined);  // undefined

var maybe = null;
if(typeof null === 'object') { // === : 타입과 값이 다 같아야함
    console.log("Object 입니다.");
    
}

console.log(maybe === null);
