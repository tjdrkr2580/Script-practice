let qwer = "kim";

//pro tip 타입 지정 원래 자동으로 됨. 타입지정 문법 생략가능
//하지만 해주는 것이 더 정확하고 가독성도 좋아짐

type KimtaehyunInfo = {
  name: string;
  age: number;
  born: string;
};

const kimtaehyun: KimtaehyunInfo = {
  name: "Kim Tae Hyun",
  age: 19,
  born: "인천",
};

type projectType = {
  member: string[];
  days: number;
  started: boolean;
};

const projectTypes: projectType = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};
