/*


*/


var time = new Date().getHours();
var greeting;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}


switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break; // phai co break trong moi case de thoat swich
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    day = "tao la default:"
    // nen cac case khong dc chon, se run default
}

// for
var cars = ["BMW", "Volvo", "Saab", "Ford"];
let i, len, text;
for (i = 0, len = cars.length, text = ""; i < len; i++) {
  text += cars[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;
//
var cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 2;
let len = cars.length;
let text = "";

for (; i < len; i++) {
  text += cars[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;
//
var cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let len = cars.length;
let text = "";

for (; i < len; ) {
  text += cars[i] + "<br>";
  i++;
}
document.getElementById("demo").innerHTML = text;

// for in ; index cho array, key cho object{}
// nen dung array.foreach(myfunction)
var numbers = [45, 4, 9, 16, 25];
let txt = "";
for (let x in numbers) {
  txt += numbers[x] + "<br>"; 
}
document.getElementById("demo").innerHTML = txt;
//
//
var numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);
document.getElementById("demo").innerHTML = txt;

function myFunction(value, index, array) {
  txt += value + "<br>"; 
}


// for of ; item cho array, value cho object{}
var cars = ["BMW", "Volvo", "Mini"];
let text = "";
for (let x of cars) {
  text += x + "<br>";
}
document.getElementById("demo").innerHTML = text;


// while
let text = "";
let i = 0;
while (i < 10) {
  text += "<br>The number is " + i;
  i++;
}
document.getElementById("demo").innerHTML = text;


// for
var cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";
for (;cars[i];) {
  text += cars[i] + "<br>";
  i++;
}
document.getElementById("demo").innerHTML = text;

// while
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";
while (cars[i]) {
  text += cars[i] + "<br>";
  i++;
}
document.getElementById("demo").innerHTML = text;


// do while
let text = ""
let i = 0;
do {
  text += "<br>The number is " + i;
  i++;
}
while (i < 10);  
document.getElementById("demo").innerHTML = text;