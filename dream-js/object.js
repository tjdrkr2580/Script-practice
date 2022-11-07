const print = (person) => {
  //   console.log(person.name);
  //   console.log(person.age);
  console.log(person["name"]);
  console.log(person["age"]);
};

const taehyun = { name: "taeHyun", age: 19 };
print(taehyun);

//object는 key와 value의 집합체
//. 이 아닌 [] 로도 접근할 수 있다! 나 이건 처음 알음 대신 string 타입

//뭐가 올지 모를 때 저렇게 괄호 안에 넣어두자

const printValue = (obj, key) => {
  console.log(obj[key]);
};

printValue(taehyun, "age");

//함수를 통해서 객체를 생성

const makePerson = (name, age) => {
  return {
    name,
    age,
  };
};

const person = makePerson("hyun", 21);
console.log(person);

//객체 안에 key가 있는지 없는지 쉽게 판단하기

console.log("name" in taehyun);
console.log("gender" in taehyun);

//for in, for of
console.clear();
for (key in taehyun) {
  console.log(key);
}

//키 값을 통해서 한번씩 돔 오브젝트에서 사용

const array1 = [1, 2, 3, 4, 5, 6];
for (value of array1) {
  console.log(value);
}

//배열의 값을 통해서 순차적으로 for문이 작성됨 배열에서 사용

// 클론

const user2 = { name: "lalala", age: 20 };
const user3 = user2;

console.log(user3);
user3.age = 25;
console.log(`user3 값 변경 후 user 2 : ${user2.age}`);

//값의 주소와 같이 복사하는 것이기 때문에 동시에 바뀜
//그렇다면 진짜로 똑같이 배열을 만드는법을 알아보자

const fruit1 = { color: "red", dd: "dd" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
console.log(mixed.dd);

const fruit3 = { color: "dark", qwe: "qwe" };
const clone = Object.assign({}, fruit3);
console.log(clone.color);
