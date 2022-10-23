/*
  da so methods cho Array deu in-place = change = update = refernce-type = pointer
  const array
  const object
  nen declare const cho array, object
  tam thoi dung var cho testing

  All JavaScript objects have a toString() method.
  cac Objects deu convert to string khi render ra HTML
    
*/

/*
  for (let index in array) {}
  for (let value of array) {}

  for (let key in obj) {}
  for (let value of obj) {}

  const arr = Array(5) // arr.length=5
*/

// from(any) or from(any, function)
//python list('foo') = ['f','o', 'o']
console.log(Array.from('foo'));
//  Array ["f", "o", "o"]
console.log(Array.from([1, 2, 3], x => x + x));
//  Array [2, 4, 6]

const set = new Set(['foo', 'bar', 'baz', 'foo']);
Array.from(set);
// [ "foo", "bar", "baz" ]

const map = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(map);
// [[1, 2], [2, 4], [4, 8]]
const mapper = new Map([['1', 'a'], ['2', 'b']]);
Array.from(mapper.values());
// ['a', 'b'];
Array.from(mapper.keys());
// ['1', '2'];

function f() {
  return Array.from(arguments);
}
f(1, 2, 3);
// [ 1, 2, 3 ]

Array.from([1, 2, 3], (x) => x + x);
// [2, 4, 6]

// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`
Array.from({length: 5}, (v, i) => i);
// [0, 1, 2, 3, 4]


// all following calls return true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array("a", "b", "c", "d"));
Array.isArray(new Array(3));
// Little known fact: Array.prototype itself is an array:
Array.isArray(Array.prototype);

// all following calls return false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray("Array");
Array.isArray(true);
Array.isArray(false);
Array.isArray(new Uint8Array(32));
// This is not an array, because it was not created using the
// array literal syntax or the Array constructor
Array.isArray({ __proto__: Array.prototype });


Array.of(7); // [7]
Array(7); // array of 7 empty slots

Array.of(1, 2, 3); // [1, 2, 3]
Array(1, 2, 3);    // [1, 2, 3]

Array.of(1);         // [1]
Array.of(1, 2, 3);   // [1, 2, 3]
Array.of(undefined); // [undefined]


const arr = [1, 2];
console.log(arr);
// [ 1, 2 ]

arr.length = 5; // set array length to 5 while currently 2.
console.log(arr);
// [ 1, 2, <3 empty items> ]

arr.forEach((element) => console.log(element));
// 1
// 2


// at(index) == arr[index]


const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];
const numbers = num1.concat(num2, num3);
console.log(numbers);
// results in [1, 2, 3, 4, 5, 6, 7, 8, 9]

const letters = ["a", "b", "c"];
const alphaNumeric = letters.concat(1, [2, 3]);
console.log(alphaNumeric);
// results in ['a', 'b', 'c', 1, 2, 3]

const num1 = [[1]];
const num2 = [2, [3]];
// num1 vs num2 da pass pointer to numbers,
const numbers = num1.concat(num2);
console.log(numbers);
// results in [[1], 2, [3]]

// modify the first element of num1
num1[0].push(4); // numbers cung change=update
console.log(numbers);
// [[1, 4], 2, [3]]

//concat empty
console.log([1, , 3].concat([4, 5])); // [1, empty, 3, 4, 5]
console.log([1, 2].concat([3, , 5])); // [1, 2, 3, empty, 5]


// copyWithin(target), vi kho co start, end, nen copy from index=0 to end
// length lun = orgin array
// [1,2,3] + index=-2, copy tu value 1 to 5, vi co length=5 nen chi append [1,2]
// [1,2,3] + [1,2]
console.log([1, 2, 3, 4, 5].copyWithin(-2));
// [1, 2, 3, 1, 2]

// copy from index=3 lay [4,5] pass to index=0
console.log([1, 2, 3, 4, 5].copyWithin(0, 3));
// [4, 5, 3, 4, 5]

//copy index=[3:4] lay [4] pass to index=0
// [4] + [2,3,4,5]
console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
// [4, 2, 3, 4, 5]

// copy index=[-3:-1] lay [3,4] pass to index=-2
// [1,2,3] + [3,4]
console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1));
// [1, 2, 3, 3, 4]

//copyWithin empty
console.log([1, , 3].copyWithin(2, 1, 2)); // [1, empty, empty]


// python enumerate('abc', 0) or enumerate(['a', 'b', 'c'], 0)
const array = ['a', 'b', 'c'];
const iterator = array.entries(); // [[0, 'a'], [1, 'b'], [2, 'c']]
console.log(iterator.next().value);
// [0, "a"]
console.log(iterator.next().value);
// [1, "b"]

const a = ["a", "b", "c"];
for (const [index, element] of a.entries()) {
  console.log(index, element);
}
// 0 'a'
// 1 'b'
// 2 'c'

const array = ["a", "b", "c"];
const arrayEntries = array.entries();
for (const element of arrayEntries) {
  console.log(element);
}
// [0, 'a']
// [1, 'b']
// [2, 'c']

for (const element of [, "a"].entries()) {
  console.log(element);
}
// [0, undefined]
// [1, 'a']

//
const array1 = ['a', 'b', 'c'];
const iterator = array1.keys();

for (const key of iterator) {
  console.log(key);
}
// 0
// 1
// 2

const arr = ['a', , 'c'];
const sparseKeys = Object.keys(arr);
const denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys);  // [0, 1, 2]


const array1 = ['a', 'b', 'c'];
const iterator = array1.values();

for (const value of iterator) {
  console.log(value);
}

// "a"
// "b"
// "c"

const arr = ["a", "b", "c", "d", "e"];
const iterator = arr.values();
for (const letter of iterator) {
  console.log(letter);
} // "a" "b" "c" "d" "e"

const arr = ["a", "b", "c", "d", "e"];
const values = arr.values();
for (const letter of values) {
  console.log(letter);
  if (letter === "b") {
    break;
  }
}
// "a" "b"

for (const letter of values) {
  console.log(letter);
}
// "c" "d" "e"


//new array
const array1 = [1, 4, 9, 16];
// pass a function to map
const map1 = array1.map(x => x * 2);
console.log(map1);
// [2, 8, 18, 32]


// in-place
const array = [1, 2, 3, 4];
// fill with 0 from position 2 until position 4
console.log(array.fill(0, 2, 4));
// [1, 2, 0, 0]
// fill with 5 from position 1
console.log(array.fill(5, 1));
// [1, 5, 5, 5]
console.log(array.fill(6));
// [6, 6, 6, 6]

console.log([1, 2, 3].fill(4));                // [4, 4, 4]
console.log([1, 2, 3].fill(4, 1));             // [1, 4, 4]
console.log([1, 2, 3].fill(4, 1, 2));          // [1, 4, 3]
console.log([1, 2, 3].fill(4, 1, 1));          // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 3));          // [1, 2, 3]
console.log([1, 2, 3].fill(4, -3, -2));        // [4, 2, 3]
console.log([1, 2, 3].fill(4, NaN, NaN));      // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 5));          // [1, 2, 3]
console.log(Array(3).fill(4));                 // [4, 4, 4]

// A single object, referenced by each slot of the array:
const arr = Array(3).fill({}); // [{}, {}, {}]
arr[0].hi = "hi";              // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]


const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
// khi dung key, value cho array thi array do se duoc convert ve object; dung nhu object
person.length;     // Will return 0
person[0];  // NOT; object ma


// new string
const a = ['Wind', 'Water', 'Fire'];
a.join();      // 'Wind,Water,Fire'
a.join(', ');  // 'Wind, Water, Fire'
a.join(' + '); // 'Wind + Water + Fire'
a.join('');    // 'WindWaterFire'

console.log([1, , 3].join()); // '1,,3'
console.log([1, undefined, 3].join()); // '1,,3' 

// in-place
// add end "kiwi" into arr
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var len = fruits.push("Kiwi");

// del last item of arr
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var del_end_item = fruits.pop(); // 'Mango'

// add first "Lemon" into arr
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon"); // lenght=5

// xoa first item
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var del_first_item = fruits.shift(); "Banana"


// in-place
const myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
const removed = myFish.splice(2, 0, 'drum');

// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed is [], no elements removed

const myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
const removed = myFish.splice(2, 0, 'drum', 'guitar');
// insert tai index=2, NOT delete
//["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// removed is [], no elements removed

const myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
const removed = myFish.splice(3, 1);
// myFish is ["angel", "clown", "drum", "sturgeon"]
// removed is ["mandarin"]

const myFish = ['angel', 'clown', 'drum', 'sturgeon'];
const removed = myFish.splice(2, 1, 'trumpet');
// myFish is ["angel", "clown", "trumpet", "sturgeon"]
// removed is ["drum"]

const myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
const removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');
// myFish is ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// removed is ["angel", "clown"]

const myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon'];
const removed = myFish.splice(2, 2);
// myFish is ["parrot", "anemone", "sturgeon"]
// removed is ["blue", "trumpet"]

const myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
const removed = myFish.splice(-2, 1);
// myFish is ["angel", "clown", "sturgeon"]
// removed is ["mandarin"]

const myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
const removed = myFish.splice(2);
// myFish is ["angel", "clown"]
// removed is ["mandarin", "sturgeon"]

const arr = [1, , 3, 4, , 6];
console.log(arr.splice(1, 2)); // [empty, 3]
console.log(arr); // [1, 4, empty, 6]


//
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// arr[2:]
console.log(animals.slice(2));
// ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// ["camel", "duck"]

console.log(animals.slice(1, 5));
// ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// ["duck", "elephant"]

console.log(animals.slice(2, -1));
// ["camel", "duck"]

console.log(animals.slice());
// ["ant", "bison", "camel", "duck", "elephant"]

console.log([1, 2, , 4, 5].slice(1, 4)); // [2, empty, 4]


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); // in-place
fruits.reverse(); // in-place

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
var over18 = numbers.filter(funcBool);

function funcBool(value, index, array) {
  return value > 18;
}

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
// ["exuberant", "destruction", "present"]

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]

// searching in array
const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}
console.log(filterItems(fruits, 'ap')); // ['apple', 'grapes']
console.log(filterItems(fruits, 'an')); // ['banana', 'mango', 'orange']

//filter() will skip empty slots.
console.log([1, , undefined].filter((x) => x === undefined)); // [undefined]
console.log([1, , undefined].filter((x) => x !== 2)); // [1, undefined]


//searching
// return item dau tien thoa man dieu kien = left to right
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found); // 12

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];
function isCherries(fruit) {
  return fruit.name === "cherries";
}
console.log(inventory.find(isCherries));
// { name: 'cherries', quantity: 5 }

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

// use dectructor;  {name, old, city} = obj ; [one, two, three] = array
const result = inventory.find(({ name }) => name === "cherries");

console.log(result); // { name: 'cherries', quantity: 5 }

// return index of item thoa man dieu kien dau iten = left to right
// item = empty = undefined
console.log([1, , 3].findIndex((x) => x === undefined)); // 1
var first_index = numbers.findIndex(funcBool);


// right to left, return item thoa man dk
// 
const array1 = [5, 12, 50, 130, 44];
const found = array1.findLast((element) => element > 45);
console.log(found); // 130

const inventory = [
  { name: 'apples', quantity: 2 },
  { name: 'bananas', quantity: 0 },
  { name: 'fish', quantity: 1 },
  { name: 'cherries', quantity: 5 }
];
// return true inventory stock is low
function isNotEnough(item) {
  return item.quantity < 2;
}
console.log(inventory.findLast(isNotEnough));
// { name: "fish", quantity: 1 }


// right to left, return index of item thoa man dk
const array1 = [5, 12, 50, 130, 44];
const isLargeNumber = (element) => element > 45;
console.log(array1.findLastIndex(isLargeNumber));
// index=3  (of element with value: 130)


// new array
const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());
// [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];
console.log(arr2.flat(2));
// [0, 1, 2, [3, 4]]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const arr5 = [1, 2, , 4, 5];
console.log(arr5.flat()); // [1, 2, 4, 5]

const array = [1, , 3, ["a", , "c"]];
console.log(array.flat()); // [ 1, 3, "a", "c" ]

const array2 = [1, , 3, ["a", , ["d", , "e"]]];
console.log(array2.flat()); // [ 1, 3, "a", ["d", empty, "e"] ]
console.log(array2.flat(2)); // [ 1, 3, "a", "d", "e"]


const arr1 = [1, 2, [3], [4, 5], 6, []];
const flattened = arr1.flatMap(num => num);
console.log(flattened);
//  [1, 2, 3, 4, 5, 6]


const arr = [1, 2, [3, 4]];
// To flat single level array
arr.flat();
// is equivalent to
arr.reduce((acc, val) => acc.concat(val), []);
// [1, 2, 3, 4]
// or with decomposition syntax
const flattened = (arr) => [].concat(...arr);

const arr1 = [1, 2, 3, 4];

arr1.map((x) => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap((x) => [x * 2]);
// [2, 4, 6, 8]

// only one level is flattened
arr1.flatMap((x) => [[x * 2]]);
// [[2], [4], [6], [8]]

const arr1 = ["it's Sunny in", "", "California"];
arr1.map((x) => x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]
arr1.flatMap((x) => x.split(" "));
// ["it's","Sunny","in", "", "California"]

console.log([1, 2, , 4, 5].flatMap(x => [x, x * 2])); // [1, 2, 2, 4, 4, 8, 5, 10]
console.log([1, 2, 3, 4].flatMap(x => [, x * 2])); // [2, 4, 6, 8]

// reduce
var numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(reduceFn);
// let sum = numbers.reduce(reduceFn, 100); // sum+100

document.getElementById("demo").innerHTML = "The sum is " + sum;

function reduceFn(total, value, index, array) {
  return total + value;
}

function reduceFn(total, value) {
  return total + value;
}


const array1 = [[0, 1], [2, 3], [4, 5]];
const result = array1.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));
console.log(result);
// expected output: Array [4, 5, 2, 3, 0, 1]

const sum = [0, 1, 2, 3].reduceRight((a, b) => a + b);
// sum is 6

const arrays = [
  [0, 1],
  [2, 3],
  [4, 5],
];
const flattened = arrays.reduceRight((a, b) => a.concat(b), []);
// flattened is [4, 5, 2, 3, 0, 1]


// bool
// all items phai > 18 thi moi true ; || false
var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
var arr = [1, 2, 3, 4, 5, 6];
var greaterFour = arr.every(num => num > 4);

// bool
// chi 1 item > 10 thi true ;
function isBiggerThan10(element, index, array) {
  return element > 10;
}
[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true

const fruits = ['apple', 'banana', 'mango', 'guava'];
function checkAvailability(arr, val) {
  return arr.some((arrVal) => val === arrVal);
}
checkAvailability(fruits, 'kela');   // false
checkAvailability(fruits, 'banana'); // true


// bool
// check item co exist hay ko
var arr = ['Nam', 2, 3, 4, 5, 6];
arr.includes('Nam'); // true
arr.includes(7); // false
[1, 2, 3].includes(2)         // true
[1, 2, 3].includes(4)         // false
[1, 2, 3].includes(3, 3)      // false
[1, 2, 3].includes(3, -1)     // true
[1, 2, NaN].includes(NaN)     // true
["1", "2", "3"].includes(3)   // false
console.log([1, , 3].includes(undefined)); // true

// return -1 if NOT found else (index of item)
const array = [2, 9, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0

// Finding all the occurrences of an element
const indices = [];
const array = ['a', 'b', 'a', 'c', 'a', 'd'];
const element = 'a';
let idx = array.indexOf(element);
while (idx !== -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]