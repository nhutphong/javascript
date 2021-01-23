// literal
const dog = { }

// constructor
const cat = new Object();

// static method
const horse = Object.create({ })

//------------------------------------------------------------------------------ 
let hello;
let world;

// Old way 
const obj = {
  hello: hello,
  world: world
}

// Modern way 
// nen dung
const obj = {
  hello,
  world,
}

delete obj.hello
delete obj.world


const x = 'khoa';

const obj = {
  [x]: 07
}
obj.khoa // 07


const obj1 = {
    firstName: 'Hieu',
    lastName: 'Bui'
};
const obj2 = { age: 23 };
const obj3 = { school: 'HUST' };

// Sao chép nhiều object vào một object:
// obj sau overrive obj truoc
const obj = Object.assign({}, obj1, obj2, obj3);

console.log(obj); // { firstName: 'Hieu', lastName: 'Bui', age: 23, school: 'HUST' }


const obj = {
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
const obj = {
  firstName: 'Hieu',
  lastName: 'Bui'
};
console.log(Object.values(obj)); // [ 'Hieu', 'Bui' ]


function MyAge(age) {
    this.age = age;
};

// valueOf giong gan value for obj
MyAge.prototype.valueOf  = function () {
    return this.age;
};

// khi new object thi myAge = 23 vi co definded valueOf
const myAge = new MyAge(23);
console.log('My age is', myAge - 1); // My age is 22
