
/*
    global variable: use keyword var
        co the access,change value, giong pointer vay
    block variable: use keyword, chi access in block
        let, co the change value
        const, NOT change value
    local variable: la variable in function

    access atribute of global-object: use keyword this || window (variable outside function)
    access attribute of local-object: only use this (variable inside function)

*/

/*
set atributes for global-object phai dung key this or key window
*/
this.name = 'Sarah';
// console.log(this.name); // Sarah
// window.name = 'Sarah';
// console.log(this.name); // Sarah

// global variable: use keyword var
let city = 'old city' // NOT attribute of global-object

this.age = 'nam ngan';
this.agetwo = 7000
window.agethree = 9000

console.log(this)
// console.log(window)


// defined this
const person = {
    name : 'Jack',
    age: 25,


    // this in METHOD refers to the object itself=person
    greet() {
        console.log('method ref itself'.padStart(30,'-'))
        console.log(this);        // {name: "Jack", age ...}
        console.log(`this.age = ${this.age}`);  // 25
        console.log('method ref itself'.padStart(30,'-'))


        console.log('arrow ref parent-obj'.padStart(30,'-'))
        // arrow function
        let arrowFunc = () => {
        
            // this in ARROW-FUNCTION refers to the PARENT-object
            // this.age = person.age = 25
            console.log(this); // person = {name: 'Jack', age: 5}
            console.log(`parent this.age = ${this.age}`); //25
            
        }
        arrowFunc();
        console.log('arrow ref parent-obj'.padStart(30,'-'))


        console.log('function ref global-obj'.padStart(30,'-'))
        // this in FUNCTION lun la window-object
        function innerFunc() {
        
            // this refers to the global object
            //console.log(this);       // Window { ... }
            console.log(`window.agetwo = ${this.agetwo}`);   // window.agetwo = 7000
            console.log(`global-var city = ${city}`) // 'old city'
            
        }
        innerFunc();
        console.log('function ref global-obj'.padStart(30,'-'))

        city = "new city"
        console.log(`global-var city=${city}`) // 'new city'

    }
}

person.greet()
console.log(`global-var city=${city}`) // 'new city'
//global scope