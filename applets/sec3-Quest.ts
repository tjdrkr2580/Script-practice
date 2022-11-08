//unknown

//타입스크립트의 엄격함 - 간단한 수학연산도 타입 맞아야됌
let qwqw: any;
let qweqwe: unknown;

//any는 실드 해제임, unknown을 사용하도록 하자.

qwqw - 1;
qweqwe - 1;

let araaay: (number | string)[] = [1, "2", 3];
let objectt: { data: string | number } = { data: "123" };

let user: string = "kim";
let age: undefined | number = undefined;
let married: boolean = false;

let cheolsu: (string | boolean | undefined | number)[] = [user, age, married];

type schoolType = {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
};

let school: schoolType = {
  score: [100, 97, 84],
  teacher: "phil",
  friend: "john",
};

school.score[4] = false;
school.friend = ["lee", school.teacher];
