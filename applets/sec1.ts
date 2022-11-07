let userName: string = "kim";
// userName = 1 number로 인해서 에러

let userNameArr: string[] = ["안녕", "하세요"];

type personName = {
  name: string;
};

let peopleName: personName = {
  name: "김태현",
};

//Union

let number: number | string = "555";
number = 555;

//함수 타입 지정

function add(x: number, y: number): number {
  return x + y;
}

add("안녕", 1243);

//array에 쓸 수 있는 tuple 타입

type Member = [number, boolean];

let john: Member = [21341231, true];

//만약 object에 타입지정해야할 속성이 너무 많으면

type JohnInfo = {
  [key: string]: string; //모든 문자는 타입이 string이 된다.
};

let jane: JohnInfo = {
  a: "a",
  b: "b",
  c: "c",
};

//class 타입 지정

class User {
  name: string;
  constructor(name) {
    this.name === name;
  }
}
