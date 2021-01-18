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

  info () {
    return 'tao la class Employee'
  }  
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

// ...array = *tuple
console.log("...array parameter")
function getParam(a, b, ...c) {
    console.log("a = " + a);
    console.log("b = " + b);
    console.log("...c = *c python " + c);
}
getParam(1, "haha", 2, 5, 0, 3);


arrayOne = [1, 'dung', 3, 'thong'];
arrayTwo = [...arrayOne, 5, 6, 7, 8];
console.log("arrayOne: " + arrayOne);
console.log("arrayTwo = [...arrayOne, 5, 6, 7, 8]");
console.log("arrayTwo: " + arrayTwo);


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


// property shorthand
var name = "nguyen chi thong";
var age = 30;


// unpack variable
var getObject = () => {
    return {
        name : "Vũ Thanh Tài",
        age : 22,
        hometown: "Nam Định"
    }; //return object{}
}
// unpack {}
var {name, age, hometown} = getObject();
console.log("name: " + name,
             "age: " + age,
             "hometown: " + hometown);



var getObject = () => {
    return {
        name : "Vũ Thanh Tài",
        option: {
            age : 22,
            hometown: "Nam Định",
        }
    };
}
var {name, option: { age, hometown } } = getObject();
console.log("name: " + name,
           "age: " + age,
           "hometown: " + hometown);



var num = [1];
var [a = "Default", b = "Default"] = num;
console.log(a, b);
// a = 1
// b = Default

var student = { name: "Vũ Thanh Tài"};
var {name = "Not Set", age = "Not Set"} = student;
console.log(name, age);
// name = Vũ Thanh Tài
// age = Not Set
//
//
//
function logArray ([a, b]) {
    console.log(a, b);
}
logArray(["Tham Số A -", "- Tham số B"]);
//Tham Số A - - Tham số B


function logObject ({a, b}) {
    console.log(a, b);
}
logObject({a: "Tham Số A -", b: "- Tham số B"});
//Tham Số A - - Tham số B
