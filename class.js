


class Employee {

  constructor (name, age) {
    console.log("tao la constructor Employee")
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

  static info () {
    return 'chi co the access = class ; NOT instance'
  }//  Employee.info() ; not employ.info()
};


class Male extends Employee {

  constructor (name,age,wifeName) {
    console.log('tao la constructor Male')
    super(name,age); // run constructor Employee
    this.wifeName = wifeName;
  }

  info () {
    return 'tao la class Male'
  }

  callInfo () {
    return super.info()
  }

};

console.log("class and inheritance")
var male = new Male("chi thong", 30);

console.log(male.name, male.age)
console.log(male.info())
console.log(male.callInfo())


// template literals (use backtick=``)
console.log("template literals use backtick")
const website = {
    blog: "toidicode.com",
    resume: "thanhtai.info"
};
var content = `
  <div>
    Học lập trình online miễn phí
    <font color="red">${website.blog}</font>
  </div> `;
document.write(content);


console.log("array function")
console.log(`
  var nameFunction = (param1, param2,...,paramN) => {
    //content function
  }
`)

var getName = () => {
    return "nguyen thanh dung";
}
console.log(getName());

var getName = name => console.log(name);
getName("nguyen chi thong");

var listData = [
    'nguyen chi thong',
    'gia lai',
    30,
    'Độc Thân'
];
listData.map(value => console.log(isNaN(value) === false ? value + 1 : value.toUpperCase()));
console.log(listData);


/* 
  dung #variable_name
  khong the access outside class
  this.myVar is inside class
  myObj.myVar is outsite class
*/
class ObjectCreator {
    #meaningOfLife;

    constructor(name) {
        this.#meaningOfLife = 42;
    }

    returnMeaningOfLife() {
        return this.#meaningOfLife;
    }

    #returnAMessage() {
        return "You will do great things in life";
    }
}

const myObject = new ObjectCreator("Parwinder");
console.log(myObject.returnMeaningOfLife()); // 42
console.log(myObject["#meaningOfLife"]); // undefined
console.log(myObject.#meaningOfLife); // SyntaxError
console.log(myObject.#returnAMessage); // SyntaxError


/*
  without a setter

*/
class NameGenerator {
    _name;

    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

let nameGenerator = new NameGenerator("John");
console.log(`My name is ${nameGenerator.name}`); // My name is John
nameGenerator.name = "Jane"; // Cannot assign to 'name' because it is a read-only property.