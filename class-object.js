class Person {
  //constructor
  constructor(name, age) {
    //fields //생성자
    this.name = name;
    this.age = age;

    //입력 받은 값을 넣어주기
  }
  speak() {
    console.log(`${this.name} : Hello!`);
  }
}

const taehyun = new Person("taehyun", 19);
taehyun.speak();
console.log(taehyun.age);

//getter, setter

class User {
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }

  //여기서 나이를 집어넣을 때 이상한 값이 들어가면 0으로 초기화
  //나이가 -1살이 될수는 없으니까..

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("Steve", "Job", -1);
console.log(user1.age);

//public, private
