const arr = [1, 2, 3, 4, 5, 6];
// forEach(function)
arr.forEach(item => {
  console.log(item); // output: 1 2 3 4 5 6
});


// check item co exist hay ko
const arr = ['Nam', 2, 3, 4, 5, 6];
arr.includes('Nam'); // output: true
arr.includes(7); // output: false


const arr = [1, 2, 3, 4, 5, 6];
// thằng nào lớn hơn 2 thì chơi 
const filtered = arr.filter(num => num > 2);
console.log(filtered); // output: [3, 4, 5, 6]


const arr = [1, 2, 3, 4, 5, 6];
// bonus cho mỗi em một kẹo mút
const oneAdded = arr.map(num => num + 1);
console.log(oneAdded); // output [2, 3, 4, 5, 6, 7]

console.log(arr); // output: [1, 2, 3, 4, 5, 6]


//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
const arr = [1, 2, 3, 4, 5, 6];
const sum = arr.reduce((total, value) => total + value, 0);
console.log(sum); // 21


const arr = [3, 9, 7, 6];
// thằng nào thi < 5 trượt 
// chi can 1 item < 5 thi true
const idiot = arr.some(num => num < 5);
console.log(idiot); // output: true // có thằng trượt :D


const arr = [1, 2, 3, 4, 5, 6];
// check tất cả có > 4 không
const greaterFour = arr.every(num => num > 4);
console.log(greaterFour); // output: false sai rồi

// vậy thì nhỏ hơn 10 
const lessTen = arr.every(num => num < 10);
console.log(lessTen); // output: true đúng vl 


const arr = [1, 2, 3, 4, 5, 6];
const alpha = ['e', 'a', 'c', 'u', 'y'];

// sắp xếp theo thứ tự giảm dần
descOrder = arr.sort((a, b) => a > b ? -1 : 1);
console.log(descOrder); // output: [6, 5, 4, 3, 2, 1]

// sắp xếp theo thứ tự tăng dần
ascOrder = alpha.sort((a, b) => a > b ? 1 : -1);
console.log(ascOrder); // output: ['a', 'c', 'e', 'u', 'y']


const name = 'javascript';
const nameArray = Array.from(name);
console.log(name); // output: javascript
console.log(nameArray); // output: ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']


const nums = Array.of(1, 2, 3, 4, 5, 6);
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
