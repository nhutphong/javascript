/*file module.js*/
var getName = function () {
    return "Vũ Thanh Tài";
}
var domain = "https://toidicode.com";
//xuát hàm getName
export getName; // giong __all__ python
//xuát biến domain
export domain;


/*file main.js*/
import * as name from "module.js";
//gọi hàm getName bên file module.js
name.getName();
//gọi biến domain
name.domain;


/*file module.js*/
var getName = function () {
    return "Vũ Thanh Tài";
}
var domain = "https://toidicode.com";
export {getName, domain} //object{}

/*file main.js*/
import {getName, domain} from "module.js";
//gọi hàm getName bên file module.js
getName();
//gọi biến domain
domain;


/*file module.js*/
var getName = function (name) {
    return name;
}
// export default dung 1 lan trong file
// export default 1 funciton or 1 class or 1 object{}
export default getName;

export default function () {
  alert("Hello Default Export")
}



//  say.js
function sayHi(user) {
  alert(`Hello, ${user}!`);
}

function sayBye(user) {
  alert(`Bye, ${user}!`);
}

export {sayHi, sayBye}; // a list of exported variables


//  main.js
import {sayHi as hi, sayBye as bye} from './say.js';

hi('John'); // Hello, John!
bye('John'); // Bye, John!
