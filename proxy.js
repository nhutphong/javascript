/*
// property: tên của thuộc tính được truy xuất
// receiver: đối tượng sau khi đã được gắn proxy
handler.get(target, property, receiver)

// value: giá trị sẽ được thiết lập cho thuộc tính
// handler.set() phải trả về một giá trị boolean. Nếu là true thì xem như thiết lập
// thành công, ngược lại nếu là false thì xảy ra lỗi TypeError.
handler.set(target, property, value, receiver)
*/

const u = { age: null }
const p = new Proxy(u, {
  set(target, prop, val) {
    // tartget=u 
    if (prop === 'age' && typeof val !== 'number') throw new TypeError('Age must be a number')

    target[prop] = val
    return true
  },
})
// run set(), khi gan value cho props
p.age = '10' // prop=age='age'
// run set()
p.age = 10 // OK!


// Phương thức này đòi hỏi phải trả về một giá trị boolean
const p = new Proxy(
  { foo: 1, bar: true },
  {
    defineProperty(target, property, descriptor) {
      if (property.startsWith('_')) throw new Error('Properties starting with _ are not allowed')
      return Object.defineProperty(...arguments)
    },
  },
)

// run khi defineProperty() khi set value cho prop, c1
p._hello = 1 // Error
// c2
Object.defineProperty(p, '_hello', { value: 1 }) // Error

p.hello = 1
Object.defineProperty(p, 'hello', { value: 1 })



const p = new Proxy(
  { foo: 1, bar: true },
  {
    deleteProperty(target, property) {
      delete target[property]
      console.log(`${property} was removed`)
      return true
    },
  },
)
// run khi delete prop foo
delete p.foo // foo was removed 
delete p.bar // bar was removed



//Phương thức này cũng đòi hỏi phải trả về một giá trị boolean
const p = new Proxy(
  { _foo: 1, bar: true },
  {
    has(target, property) {
      if (property.startsWith('_')) return false
      return property in target
    },
  },
)
// run khi dung keyword in
console.log('bar' in p) // true
console.log('_foo' in p) // true



// handler.apply(target, thisArg, args) là trap dành cho các hàm=function, sẽ được khởi động khi hàm được gọi.
const sum = (a, b) => a + b
const f = new Proxy(sum, {
  apply(target, thisArg, args) {
    const [a, b] = args
    return target.call(thisArg, a * 2, b * 2)
  },
})
// giong __call__
f(1, 2) // 6



//handler.construct(target, args) là trap sẽ được gọi khi khởi tạo đối tượng bằng new
class User {
  constructor(username) {
    this.username = username
  }
}

const PUser = new Proxy(User, {
  construct(target, args) {
    // username = thong = args[0]
    const [username] = args
    return new target(username.toUpperCase())
  },
})
// run khi use keyword new
const u = new PUser('thong')
console.log(u.username) // THONG


// -----------------------------------Reflect--------------------------------------------------

// Reflect.apply(target, thisArgument, argumentsList)
console.log(Reflect.apply(Math.floor, undefined, [2.75]));
// 1

console.log(Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]));
// "hello"

console.log(Reflect.apply(RegExp.prototype.exec, /ab/, ['confabulation']).index);
// 4

console.log(Reflect.apply(''.charAt, 'ponies', [3]));
// "i"


// quick create obj, NOT use keyword=new
const d = Reflect.construct(Date, [1776, 6, 4]);
d instanceof Date; // true
d.getFullYear(); // 1776


// Reflect.defineProperty(target, propertyKey, attributes)
// object1.property1 = 42
const object1 = {};
if (Reflect.defineProperty(object1, 'property1', { value: 42 })) {
  console.log('property1 created!');
  // "property1 created!"
} else {
  console.log('problem creating property1');
}
console.log(object1.property1);
// 42


const obj = { x: 1, y: 2 };
Reflect.deleteProperty(obj, "x"); // true
console.log(obj); // { y: 2 }

const arr = [1, 2, 3, 4, 5];
Reflect.deleteProperty(arr, "3"); // true; delete index=3
console.log(arr); // [1, 2, 3, undefined, 5]

// Returns true if no such property exists
Reflect.deleteProperty({}, "foo"); // true

// Returns false if a property is unconfigurable
Reflect.deleteProperty(Object.freeze({ foo: 1 }), "foo"); // false


// Reflect.getOwnPropertyDescriptor(target, propertyKey)
// return obj, cac permission co the lam tren props
Reflect.getOwnPropertyDescriptor({ x: "hello" }, "x");
// {value: "hello", writable: true, enumerable: true, configurable: true}
Reflect.getOwnPropertyDescriptor({ x: "hello" }, "y");
// undefined
Reflect.getOwnPropertyDescriptor([], "length");
// {value: 0, writable: true, enumerable: false, configurable: false}


Reflect.getOwnPropertyDescriptor("foo", 0);
// TypeError: "foo" is not non-null object

Object.getOwnPropertyDescriptor("foo", 0);
// { value: "f", writable: false, enumerable: true, configurable: false }


Reflect.has({x: 0}, 'x')  // true
Reflect.has({x: 0}, 'y')  // false

// returns true for properties in the prototype chain
Reflect.has({x: 0}, 'toString')

// Proxy with .has() handler method
obj = new Proxy({}, {
  has(t, k) { return k.startsWith('door') }
});
Reflect.has(obj, 'doorbell')  // true
Reflect.has(obj, 'dormitory')  // false


// = Object.keys(obj)
// return array chua props, keys cua obj
Reflect.ownKeys({z: 3, y: 2, x: 1}) // [ "z", "y", "x" ]
Reflect.ownKeys([]) // ["length"] //prop=length



const object1 = {};
// check obj co the add them prop khong
console.log(Reflect.isExtensible(object1));
// true

// NOT add prop
Reflect.preventExtensions(object1);

console.log(Reflect.isExtensible(object1));
// false


// Same result for Objects
Object.getPrototypeOf({}); // Object.prototype
Reflect.getPrototypeOf({}); // Object.prototype

// Both throw in ES5 for non-Objects
Object.getPrototypeOf("foo"); // Throws TypeError
Reflect.getPrototypeOf("foo"); // Throws TypeError

// In ES2015 only Reflect throws, Object coerces non-Objects
Object.getPrototypeOf("foo"); // String.prototype
Reflect.getPrototypeOf("foo"); // Throws TypeError

// To mimic the Object ES2015 behavior you need to coerce
Reflect.getPrototypeOf(Object("foo")); // String.prototype


Reflect.setPrototypeOf({}, Object.prototype); // true

// It can change an object's [[Prototype]] to null.
Reflect.setPrototypeOf({}, null); // true

// Returns false if target is not extensible.
Reflect.setPrototypeOf(Object.freeze({}), null); // false

// Returns false if it cause a prototype chain cycle.
const target = {};
const proto = Object.create(target);
Reflect.setPrototypeOf(target, proto); // false






// -----------------------------------Reflect end----------------------------------------------
// -----------------------------------Proxy vs Reflect----------------------------------------------

function effect() {
  console.log("xin chao trap get() set()")
}
// khi code function 
const reactive = obj => {
    return new Proxy(obj, {
        get(target, key, receiver) {
            return Reflect.get(...arguments) // arguments trong mỗi function đều có mn nhé :) 
        },
        set(target, key, value, receiver) {
            Reflect.set(...arguments)
            effect() //func chung ta muon run
        }
    })
}

let receiver = reactive({});

// run trap set() 
receiver.name = 'thong'




// -----------------------------------Proxy vs Reflect end----------------------------------------------