/*
  Displaying the Object Properties: obj.propertyName
  Displaying the Object Properties: for key in obj
  Displaying the Object using     : Object.values(obj)
  Displaying the Object using       JSON.stringify(obj)
   
  var obj = {}; //nen dung keyword var
*/

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
// dictObj.keys()
console.log(object.keys(arr)); // ['0', '1', '2']

var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(object.keys(obj)); // ['0', '1', '2']


// get values of object into array
var obj = {
  firstName: 'Hieu',
  lastName: 'Bui'
};
// dictObj.values()
console.log(Object.values(obj)); // [ 'Hieu', 'Bui' ]


const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42]
]);
// info = dict([('name', 'thong'), ('old', 30)])
const obj = Object.fromEntries(entries);
console.log(obj);
//{ foo: "bar", baz: 42 }

let pair = [['name', 'thong'], ['old', 33]]
const obj2 = Object.fromEntries(pair);
console.log(obj); // {name: 'thong', old:33}



const obj = {
  prop: 42
};

// cam obj set value cho prop
Object.freeze(obj);
// cam arr add them item
// Object.freeze(arr);

obj.prop = 33; //error

console.log(obj.prop);
// expected output: 42

// check obj co bi freeze
Object.isFrozen(obj); // === true



const object1 = {
  property1: 42
};

// cam khong cho delete prop, van co the set value cho prop
Object.seal(object1);
object1.property1 = 33;
console.log(object1.property1);
// expected output: 33

delete object1.property1; // cannot delete when sealed
console.log(object1.property1);
// expected output: 33



const object1 = {
  property1: 42
};
// check obj co the delete prop ko
console.log(Object.isSealed(object1));
//  false
Object.seal(object1);
console.log(Object.isSealed(object1));
//  true


const example = {};
example.prop = 'exists';
// only check prop:
Object.hasOwn(example, 'prop');             // returns true
Object.hasOwn(example, 'toString');         // returns false
Object.hasOwn(example, 'hasOwnProperty');   // returns false

// The `in` check ca props and methods:
'prop' in example;                          // returns true
'toString' in example;                      // returns true
'hasOwnProperty' in example;                // returns true


// Object.is(value1, value2)
// Case 2: Signed zero
// giong voi ===
Object.is(0, -0); // false
Object.is(+0, -0); // false
Object.is(-0, -0); // true

// Case 3: NaN
Object.is(NaN, 0 / 0); // true
Object.is(NaN, Number.NaN); // true


// giong format 
const obj = {
  toString() {
    return "My Object";
  }
};
console.log(obj.toLocaleString()); // "My Object"

const testArray = [4, 7, 10];
const euroPrices = testArray.toLocaleString("fr", {
  style: "currency",
  currency: "EUR",
});
// "4,00 €,7,00 €,10,00 €"

const testDate = new Date();
// "Fri May 29 2020 18:04:24 GMT+0100 (British Summer Time)"
const deDate = testDate.toLocaleString("de");
// "29.5.2020, 18:04:24"
const frDate = testDate.toLocaleString("fr");
// "29/05/2020, 18:04:24"

const testNumber = 2901234564;
// "2901234564"
const deNumber = testNumber.toLocaleString("de");
// "2.901.234.564"
const frNumber = testNumber.toLocaleString("fr");
// "2 901 234 564"



class Dog {
  constructor(name, breed, color, sex) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.sex = sex;
  }
  toString() {
    return `Dog ${this.name} is a ${this.sex} ${this.color} ${this.breed}`;
  }
}

// giong __str__(self)
const theDog = new Dog("Gabby", "Lab", "chocolate", "female");
// neu khong co define toString() thi kq giong ben duoi
theDog.toString(); // "[object Object]"
`${theDog}`; // "[object Object]"

// co defind toString()
const theDog = new Dog("Gabby", "Lab", "chocolate", "female");
`${theDog}`; // "Dog Gabby is a female chocolate Lab"


class Box {
  #value;
  constructor(value) {
    this.#value = value;
  }
  valueOf() {
    return this.#value;
  }
}
const box = new Box(123);
// khi box giong nhu run box.valueOf() = 123
// tuc box = 123
console.log(box + 456); // 579
console.log(box == 123); // true


