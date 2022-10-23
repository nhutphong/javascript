

// Destructuring = phep gan manh me
// array stirng dung ngoac [ ]

/*
  destructuring hay dung, cho export default {}
  {name, old, city} = obj
  [one, two three] = [1,2,3]
*/
var a = 1;
var b = 2;
[a, b] = [b, a]
console.log(a, b) ;//2, 1

var res = () => [1, 2, 3]
var [a, ,b] = res() // ignoring value
console.log(a, b) ;//1,3


var res = {blog: 'anonystick.com', type: 'javascript'}
var {blog: nameBlog, type: newType} = res;
console.log(nameBlog, newType);//anonystick.com, javascript


var blogs = {
  anonystick: [
    {
      pageFacebook: 'Tip javascript Viet Nam',
      likes: 4789,
      daily: 1323
    }
  ]
}

var {
  anonystick: [
    {
      pageFacebook: namePage,
      likes: numLikes,
      daily: numDaily
    }
  ]
} = blogs;
console.log(namePage, numLikes, numDaily );//Tip javascript Viet Nam, 4789, 1323


let user = {
  name: "John",
  age: 30
};

// loop over keys-and-values
for (let [key, value] of Object.entries(user)) {
  alert(`${key}:${value}`); // name:John, then age:30
}

// Destructuring object dung ngoac {}
let options = {
  title: "Menu"
};

let {width = 100, height = 200, title} = options;
alert(title);  // Menu
alert(width);  // 100
alert(height); // 200

// title = property named title
// rest = object with the rest of properties
let {title, ...rest} = options;

// now title="Menu", rest={height: 200, width: 100}



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


// property shorthand

var name = "Vũ Thanh Tài";
var age = 22;
var student = {name, age};
console.log(student);
//{name: "Vũ Thanh Tài", age: 22}


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
var {name = "Default name", age = "Default tuoi"} = student;
console.log(name, age);
// name = Vũ Thanh Tài
// age = "Defalut tuoi"
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


// private data, use funciton scope
function carMonitor() {
    var speed = 0;

    return {
        accelerate: function () {
            return speed++;
        }
    }
}

var car = new carMonitor();
var redCar = new carMonitor()
console.log(car.accelerate()); // 0
console.log(car.accelerate()); // 1
console.log(redCar.accelerate()); // 0
console.log(redCar.accelerate()); // 1
console.log(car.accelerate()); // 2
console.log(redCar.accelerate()); // 2
console.log(speed); // speed is not defined


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