/*
    const array
    const object
    nen declare const cho array, object
    tam thoi dung var cho testing

    All JavaScript objects have a toString() method.
    cac Objects deu convert to string khi render ra HTML
    
*/



var cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";

var myArray = [];
myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;

var fruits = ["Banana", "Orange", "Apple", "Mango"];

// array.indexOf(item, start)
// array.lastIndexOf(item, start)
var array = Array.from("ABCDEFG");
var indexs_arr = fruits.keys()
var pair_idx_value = fruits.entries()


cars.length   // Returns the number of elements
cars.sort()   // Sorts the array

var len = fruits.length;
var endItem = fruits[fruits.length -1]
fruits[fruits.length] = "Lemon";  // Adds "Lemon" to fruits co 5 item
fruits[6] = "KuKe";  // add "kuke",auto cac index empty = undefined


const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
// khi dung key, value cho array thi array do se duoc convert ve object; dung nhu object
person.length;     // Will return 0
person[0];  // NOT; object ma


Array.isArray(fruits); // true
fruits instanceof Array; // true



var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
//Banana,Orange,Apple,Mango


var string = fruits.join(" * ");
//Banana * Orange * Apple * Mango

// append "kiwi"
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var len = fruits.push("Kiwi");

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var del_end_item = fruits.pop(); // 'Mango'


// appfirst "Lemon"
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon"); // lenght=5

// xoa first item
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var del_first_item = fruits.shift(); "Banana"


// join arr, ...
var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren = arr1.concat(arr2, arr3, 'string');

var fruits = ["Banana", "Orange", "Apple", "Mango"];
// add "Lemon", "kiwi" vao pos=index=2 ; 0 del items nao
fruits.splice(2, 0, "Lemon", "Kiwi");

// add pos=3 ; del 2 item sau do
let removed = fruits.splice(3, 2, "Lemon", "Kiwi"); 

// del 1 item sau do ; tuc first items
fruits.splice(0, 1); // pos=0 ;  nhung ko add items nao

//
var slice = fruits.slice(1); // fruits[1:]


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();

// sort array co items la number phai co function
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b}); // increase = tang dan
points.sort(function(a, b){return a - b}); // decrease = giam dan

var max_number = Math.Max(points);
var min_number = Math.Min(points);


// sort objects array
var cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];
cars.sort(function(a, b){return a.year - b.year}); // increase


// loop array dung methods

var arr = [1, 2, 3, 4, 5, 6];
// Array.forEach(function)
arr.forEach(value => {
  console.log(value); // output: 1 2 3 4 5 6
});


var numbers = [45, 4, 9, 16, 25];
var txt = "";
numbers.forEach(myFunction);
document.getElementById("demo").innerHTML = txt;

function myFunction(value, index, array) {
  txt += value + "<br>"; 
}


// new array (item co the + - * /)
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);

function myFunction(value) {
  return value * 2;
}

function myFunction(value, index, array) {
  return value * 2;
}

// new array thoa man dieu kien(items co the se it hon)
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

// first item dau tien > 18
var first = numbers.find(myFunction);
var first_index = numbers.findIndex(myFunction);




var numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);
// let sum = numbers.reduce(myFunction, 100); // sum+100

document.getElementById("demo").innerHTML = "The sum is " + sum;

function myFunction(total, value, index, array) {
  return total + value;
}

function myFunction(total, value) {
  return total + value;
}


// bool
// all items phai > 18 thi moi true ; || false
// every() giong all() python
var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

var arr = [1, 2, 3, 4, 5, 6];
var greaterFour = arr.every(num => num > 4);

// bool
// chi 1 item > 18 thi true ;
let someOver18 = numbers.some(myFunction);


// bool
// check item co exist hay ko
var arr = ['Nam', 2, 3, 4, 5, 6];
arr.includes('Nam'); // output: true
arr.includes(7); // output: false


var name = 'javascript';
var nameArray = Array.from(name);
console.log(name); // output: javascript
console.log(nameArray); // output: ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']


var nums = Array.of(1, 2, 3, 4, 5, 6);
console.log(nums); // output: [1, 2, 3, 4, 5, 6]


var arr = ["a", "b", "c"];
var iterator = arr.entries(); // enumerate(iterable, 1) python
console.log(iterator);
/*
    Array Iterator {}
         __proto__:Array Iterator
         next:ƒ next()
         Symbol(Symbol.toStringTag):"Array Iterator"
         __proto__:Object
*/

for (let e of iterator) {
    console.log(e);
}
// [0, "a"]
// [1, "b"]
// [2, "c"]


let numbers = [1, 2, 3, 4, 5];
// copyWithin(to, start,end)
numbers.copyWithin(-2);
// [1, 2, 3, 1, 2]

numbers.copyWithin(0, 3);
// [4, 5, 3, 4, 5]

numbers.copyWithin(0, 3, 4);
// [4, 2, 3, 4, 5]

numbers.copyWithin(-2, -3, -1);
// [1, 2, 3, 3, 4]

[].copyWithin.call({ length: 5, 3: 1 }, 0, 3);
// {0: 1, 3: 1, length: 5}

// ES2015 Typed Arrays are subclasses of Array
var i32a = new Int32Array([1, 2, 3, 4, 5]);

i32a.copyWithin(0, 2);
// Int32Array [3, 4, 5, 4, 5]

// On platforms that are not yet ES2015 compliant:
[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);
// Int32Array [4, 2, 3, 4, 5]
