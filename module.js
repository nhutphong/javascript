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

export default getName;

/*file main.js*/
import name from "module.js";
//gọi hàm getName bên file module.js
name("Vũ Thanh Tài");
//Vũ Thanh Tài
