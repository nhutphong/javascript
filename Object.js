/*
  Displaying the Object Properties: obj.propertyName
  Displaying the Object Properties: for key in obj
  Displaying the Object using     : Object.values(obj)
  Displaying the Object using       JSON.stringify(obj)
   
  var obj = {}; //nen dung keyword var
*/

var person = {
  name: "John",
  age: 30,
  city: "New York"
};
document.getElementById("demo").innerHTML = person.name + "," + person.age + "," + person.city; //c1

//
let txt = "";
for (let key in person) { //c2
  txt += person[key] + " ";
};
document.getElementById("demo").innerHTML = txt;

//
var myArray = Object.values(person); //c3
document.getElementById("demo").innerHTML = myArray; // John,30,New York

//
let myString = JSON.stringify(person); //c4
document.getElementById("demo").innerHTML = myString; // {"name":"John","age":30,"city":"New York"}

//
var person = {
  name: "John",
  age: function () {return 30;} // hidden by JSON
};
person.age = person.age.toString(); // convert to string se hien function

//
let myString = JSON.stringify(person);
document.getElementById("demo").innerHTML = myString; // {"name":"John","age":"function () {return 30;}"}


// getter setter


// 
function MyAge(age) {
    this.age = age;
};

//valueOf() == __str__
MyAge.prototype.valueOf  = function () {
    return this.age;
};

var myAge = new MyAge(23); 
// myAge ; run myAge.valueOf()=23
// myAge=23
console.log('My age is', myAge - 1); // My age is 22


// Object.create({}) ; // value_type and ref_type=pointer
const job = {
    position: 'haha',
    type: 'hourly',
    isAvailable: true,
    showDetails() {
        const accepting = this.isAvailable ? 'is accepting applications' : "is not currently accepting applications";

        console.log(`The ${this.position} position is ${this.type} and ${accepting}.`);
    }
};

// ref_type = job; // khi ref_type change value cho property thi job property cung change theo
const value_type = Object.create(job); 

value_type.position = "value_type"; // job.position = 'haha'; NOT change
value_type.showDetails();


// Object.defineProperty(obj, prop, descriptor)
// 
const user = { }

Object.defineProperty(user, 'age', {
  value: 23,
  enumerable: true,
})

// Khai báo một thuộc tính để chứa dữ liệu ẩn
Object.defineProperty(user, 'internalName', {
  writable: true, // co the change value ; defalut=false
  enumerable: false, // Không hiển thị thuộc tính này ; defalut=false
})

// `this` trong getter/ setter là biến `user`
Object.defineProperty(user, 'name', {
  enumerable: true,
  get() {
    return this.internalName
  },
  set(name) {
    this.internalName = name
  },
})

internalName.name = 'Doan Phu'
console.log(internalName) // { age: 23, name: 'Doan Phu', internalName: 'Doan Phu' }


// Object.defineProperties(obj, props)
var user = { }
Object.defineProperties(user, {
  age: { value: 23 },
  name: { value: 'Doan Phu' },
})


//------------------------------------------------------------------------------ 
let hello;
let world;

// Modern way 
// nen dung
var obj = {
  hello,
  world,
}

delete obj.hello
delete obj.world


var x = 'khoa';

var obj = {
  [x]: 'thong'
}
obj.khoa; // 'thong'


var obj1 = {
    firstName: 'Hieu',
    lastName: 'Bui'
};
var obj2 = { age: 23 };
var obj3 = { school: 'HUST' };

// Sao chép nhiều object vào một object:
// obj sau overrive obj truoc
var obj = Object.assign({}, obj1, obj2, obj3);

// object spread dung 3dot, unpacking cho nhanh
var obj4 = {...obj1, ...obj2, ...obj3}

console.log(obj); // { firstName: 'Hieu', lastName: 'Bui', age: 23, school: 'HUST' }


// Object.entries(obj) == obj.items() python
var obj = {
  firstName: 'Hieu',
  lastName: 'Bui'
};
console.log(Object.entries(obj)); // [ [ 'firstName', 'Hieu' ], [ 'lastName', 'Bui' ] ]


// get keys of object into array
var arr = ['a', 'b', 'c'];
console.log(object.keys(arr)); // ['0', '1', '2']

var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(object.keys(obj)); // ['0', '1', '2']


// get values of object into array
var obj = {
  firstName: 'Hieu',
  lastName: 'Bui'
};
console.log(Object.values(obj)); // [ 'Hieu', 'Bui' ]
