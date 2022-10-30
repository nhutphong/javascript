
/*
  arguments: 'la array chua args cua function'
  arguments[0] = 'arg1'
  arguments[1] = 'arg2'
  arguments[2] = 'arg3'
*/

// template literal use backtick ` ${varname} `
const name = 'Jack';
console.log(`Hello ${name}`); 
const result = 4 + 5;
// template literals used with expressions
console.log(`The sum of 4 + 5 is ${result}`);
console.log(`${result < 10 ? 'Too low': 'Very high'}`)


// tagged template
function tagExample(strings) {
    return strings;
}
// creating tagged template
const result = tagExample`Hello Jack`;
console.log(result); // ["Hello Jack"]


const name = 'Jack';
const greet = true;
function tagExample(strings, nameValue) {
    let str0 = strings[0]; // Hello
    let str1 = strings[1]; // , How are you?

    if(greet) {
        return `${str0}${nameValue}${str1}`;
    }
}
// creating tagged literal
// passing argument name
const result = tagExample`Hello ${name}, How are you?`;
console.log(result); // 'Hello Jack, How are you?'


// Hàm này dùng để xử lý khởi tạo
function initProduct(name, price) {
    this.name = name;
    this.price = price;
  //this = initProduct
}

// call(this, p1,p2, ...)
function Food(name, price) {
    // Khởi tạo
    // biến this chính là Food, vì vậy sau khi chạy xong đối tượng Food sẽ có hai
    // thuộc tính là name và price
    initProduct.call(this, name, price);
}
 
function Hat(name, price) {
    // Khởi tạo
    // biến this chính là Food, vì vậy sau khi chạy xong đối tượng Food sẽ có hai
    // thuộc tính là name và price
    initProduct.call(this, name, price);
}
// apply(this, [p1, p2, ,,,])
 
 
var food = new Food('Trái xoài', 5);
var hat = new Food('Cái mũ', 6);
 
console.log(food);
console.log(hat);



/*
apply(thisArg)
apply(thisArg, argsArray)
thisArg phai la obj || null || undefined
*/
var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
var person2 = {firstName: 'Kelly', lastName: 'King'};
function say(greeting1, greeting2) {
 console.log(greeting1 + ',' + greeting2 + ' ' + this.firstName + ' ' + this.lastName);
}
// fnName.call(argOne = this, two, three, four, ...) // da run
say.call(person1, 'Hello', 'Good morning'); // => Hello,Good morning Jon Kuperman
say.call(person2, 'Hello', 'Good morning'); // => Hello,Good morning Kelly King


var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
var person2 = {firstName: 'Kelly', lastName: 'King'};
function say(greeting0, greeting1) {
 console.log(greeting0 + ',' + greeting1 + ' ' + this.firstName + ' ' + this.lastName);
}
// fnName.apply(argOne = this, [two, three, four, ...]) // da run
say.apply(person1, ['Hello', 'Good moring']); // => Hello,Good moring Jon Kuperman
say.apply(person2, ['Hello', 'Good moring']); // => Hello,Good moring Kelly King

/*
 giong nhu null muon method max of Math
  Math.max(a1, a2, a3, ...)
  null.max(array) //vi dung apply nen la array
*/
const numbers = [5, 6, 2, 3, 7];
const max = Math.max.apply(null, numbers);
console.log(max);
// 7
const min = Math.min.apply(null, numbers);
console.log(min);
// 2


var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
var person2 = {firstName: 'Kelly', lastName: 'King'};
function say(greeting0, greeting1) {
 console.log(greeting0 + ',' + greeting1 + ' ' + this.firstName + ' ' + this.lastName);
}

// callback = fnName.bind(argOne = this, two, three, four, ...)
// callback()
var sayHelloJon = say.bind(person1, 'Hello', 'Good morning');
var sayHelloKelly = say.bind(person2, 'Hello', 'Good morning');

sayHelloJon(); // => Hello,Good morning Jon Kuperman
sayHelloKelly(); // => Hello,Good morning Kelly King

// ------------------------------call apply bind END---------------------------------------------

// return function
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12


// function expression
let x = function(x, y) {
   return x * y;
}

// function expression using arrow function
let x = (x, y) => x * y;

function sum(x, y = 5) {
    // take sum
    // the value of y is 5 if not passed
    console.log(x + y);
}
sum(5); // 10
sum(5, 15); // 20


function show(a, b, ...args) {
  console.log(a); // one
  console.log(b); // two
  console.log(args); // ["three", "four", "five", "six"]
}
show('one', 'two', 'three', 'four', 'five', 'six')


let arr1 = ['one', 'two'];
let arr2 = [...arr1, 'three', 'four', 'five'];
console.log(arr2); // ["one", "two", "three", "four", "five"]

// -------------------------------------arrow function-----------------------------------------
let greet = () => console.log('Hello');
greet(); // Hello

let greet = x => console.log(x);
greet('Hello'); // Hello 

let age = 5;
let welcome = (age < 18) ?
  () => console.log('Baby') :
  () => console.log('Adult');
welcome(); // Baby

let sum = (a, b) => {
    let result = a + b;
    return result;
}
let result1 = sum(5,7);
console.log(result1); // 12


let x = function () {
    console.log(arguments);
}
x(4,6,7); // Arguments [4, 6, 7]


let x = () => {
    console.log(arguments); // NOT use arguments
}
x(4,6,7); 
// ReferenceError: Can't find variable: arguments


let x = (...n) => {
    console.log(n);
}
x(4,6,7); // [4, 6, 7]

// argument default
function sum(x = 1, y = x,  z = x + y) {
    console.log( x + y + z );
}
sum(); // 4


// using a function in default value expression

const sum = () => 15;
const calculate = function( x, y = x * sum() ) {
    return x + y;
}
const result = calculate(10);
console.log(result);            // 160


function test(x = 1) {
  console.log(x);
}
test(undefined); // 1

// -------------------------------------arrow function end-------------------------------------


// -------------------------------------destructuring-------------------------------------

// assigning object attributes to variables
const person = {
    name: 'Sara',
    age: 25,
    gender: 'female'    
}

// destructuring assignment
let { name, age, gender } = person;

console.log(name); // Sara
console.log(age); // 25
console.log(gender); // female




// Destructuring = phep gan manh me
// array string dung ngoac [ ]

/*
  destructuring hay dung, cho export default {}
  {name, old, city} = obj
  [one, two three] = [1,2,3]
*/
var a = 1;
var b = 2;
[a, b] = [b, a] // swap variable
console.log(a, b) ;//2, 1

var res = () => [1, 2, 3]
var [a, ,b] = res() // ignoring value
console.log(a, b) ;//1,3


// nested array elements
const arrValue = ['one', ['two', 'three']];
// nested destructuring assignment in arrays
const [x, [y, z]] = arrValue;
console.log(x); // one
console.log(y); // two
console.log(z); // three


var res = {blog: 'anonystick.com', type: 'javascript'}
// alias
var {blog: nameBlog, type: newType} = res;
console.log(nameBlog, newType);//anonystick.com, javascript


const person = {
    name: 'Sara',
    age: 25,
    gender: 'female'    
}
// destructuring assignment
// assigning remaining properties to rest
let { name, ...rest } = person;

console.log(name); // Sara
console.log(rest); // {age: 25, gender: "female"}


const person = {
    name: 'Jack',
    age: 26,
    hobbies: {
        read: true,
        playGame: true
    }
}
// nested destructuring 
const {name, hobbies: {read, playGame}} = person;
console.log(name); // Jack
console.log(read); // true
console.log(playGame); // true


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


const person = {
    name: 'Sara',
    age: 25,
    gender: 'female'    
}

// destructuring assignment
// assigning remaining properties to rest
let { name, ...rest } = person;

console.log(name); // Sara
console.log(rest); // {age: 25, gender: "female"}


var num = [1];
var [a = "Default", b = "Default"] = num;
// a = num[0], b = 'Default', vi num[1] not exist
console.log(a, b); // 1, 'Default' // num[]

var student = { name: "Vũ Thanh Tài"};
var {name = "Default name", age = "Default tuoi"} = student;
console.log(name, age);
// name = Vũ Thanh Tài
// age = "Defalut tuoi"
//
function logArray ([a, b]) {
    console.log(a, b);
}
logArray(['one', 'two']);
// one, two


function logObject({a, b}) {
    console.log(a, b);
}
logObject({a: "one", b: "two"});
// one, two


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
// -------------------------------------destructuring end---------------------------------
