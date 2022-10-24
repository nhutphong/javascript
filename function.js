
/*
  arguments: 'la array chua args cua function'
  arguments[0] = 'arg1'
  arguments[1] = 'arg2'
  arguments[2] = 'arg3'
*/

function Person(firstName, lastName) {
  var fstName = firstName;
  var lstName = lastName;
  
  this.setFirstName = function(firstName) { 
      fstName = firstName; 
  };

  this.getFirstName = function() {
      return fstName; 
  };
  
  this.setLastName = function(lastName) { 
      lstName = lastName; 
  };

  this.getLastName = function() { 
      return lstName; 
  };
}

var person1 = new Person('Khoa', 'Nguyen');
console.log(person1.fstName); // Undefined, không thể truy cập được


console.log(person1.getFirstName()); // Khoa


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