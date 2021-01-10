class Employee {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }

  setName (name) {
    this.name = name;
  }

  getName () {
    return this.name;
  }

  setAge (age) {
    this.age = age;
  }

  getAge () {
    return this.age;
  }

  info () {
    return 'tao la class Employee'
  }  
};


class Male extends Employee {
  info () {
    return 'tao la class Male'
  }

  callInfo () {
    return super.info()
  }

};

var male = new Male("chi thong", 30);

console.log(male.name, male.age)
console.log(male.info())
console.log(male.callInfo())


