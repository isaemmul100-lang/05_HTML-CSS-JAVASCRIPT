function greet(name) {
  return `안녕하세요, ${name}님~!`;
}

// default : 기본값, 한 파일에 하나만 설정 가능
// -> 이 파일의 대표라는 의미
export default greet;

export const LANG = "ko";
