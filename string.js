let str = "i am a string";
console.log(str.length); //13


const str = "Luke, I am your Father";
// String.split(), default cat dau comma=,
console.log(str.split());//[ 'Luke, I am your Father' ]
console.log(str.split(''));//["L", "u", "k", "e", ",", " ", "I", " ", "a", "m", " ", "y", "o", "u", "r", " ", "F", "a", "t", "h", "e", "r"]
console.log(str.split(' '));//[ 'Luke,', 'I', 'am', 'your', 'Father' ]
console.log(str.split(','));//[ 'Luke', ' I am your Father' ]


const str = 'I find your lack of faith disturbing.';
console.log(str.toUpperCase()); //I FIND YOUR LACK OF FAITH DISTURBING.


const str = 'Help me, Obi-Wan Kenobi. You’re my only hope.';
console.log(str.toLowerCase()); //help me, obi-wan kenobi. you’re my only hope.


// find return true false
const str = 'The Force will be with you. Always.';
console.log(str.includes('Force')); //true
//Chú ý: includes Phân biệt hoa thường!
console.log(str.includes('force')); //false
//Thông thường sẽ tốt hơn khi chuyển đổi chuỗi thành chuỗi viết thường 
//Sau đó mới bắt đầu kiểm tra chuỗi bằng phương thức includes.
const newStr = str.toLowerCase();
console.log(newStr.includes('force')); //true
//Thêm vị trí chỉ định bắt đầu tìm kiếm
console.log(str.includes('w', 0)); //true
console.log(str.includes('T', 1)); //false


// co phan biet Hoa thuong
const str = 'Never tell me the odds!';
console.log(str.startsWith('Never')); //true
console.log(str.startsWith('Never', 1)); //false
console.log(str.startsWith('never', 0)); //false

const str = 'Do. Or do not. There is no try.';
console.log(str.endsWith('try.')); //true
console.log(str.endsWith('Try.')); //false
console.log(str.endsWith('try', 30)); //true
console.log(str.endsWith('try.', 30)); //false


// find tu left to right return -1 neu ko tiem thay
const str = 'When gone am I, the last of the Jedi will you be. The Force runs strong in your family. Pass on what you have learned.';
console.log(str.indexOf('h')); //1
console.log(str.indexOf('H')); //-1
console.log(str.indexOf('h', 2)); //17
console.log(str.indexOf('J', str.length)); //-1


// tu right to left
const str = 'When gone am I, the last of the Jedi will you be. The Force runs strong in your family. Pass on what you have learned.';
console.log(str.lastIndexOf('h')); //105
console.log(str.lastIndexOf('h', 100)); //97
console.log(str.lastIndexOf('.')); //117
console.log(str.lastIndexOf('.', 0)); //-1


// Chú ý: Nếu các thay thế hoặc mẫu là một chuỗi thì chỉ có lần xuất hiện đầu tiên được thay thế.
const string = 'Fear is the path to the dark side.';
console.log(string.replace('Fear', 'Tears')); //Tears is the path to the dark side.
console.log(string.replace(/a/gi, 'A'));//FeAr is the pAth to the dArk side.


// index [0]
const string = 'Fear leads to anger';
console.log(string.charAt(1));//e
console.log(string.charAt(string.length - 1));//r
console.log(string.charAt(string.length));//'' Chỉ số nằm ngoài phạm vi!
//Chú ý: Nếu không có chỉ số truyền vào thì mặc định sẽ là 0
console.log(string.charAt());//F


const string = 'We must keep our faith in the Republic.';
// charCodeAt(index_string)
// string to utf-16
console.log(string.charCodeAt(0));//87
console.log(string.charCodeAt(5));//115 ord('s')=115 chr(115)='s'
//Nếu bạn muốn lấy tất cả giá trị UTF-8 của các ký tự trong chuỗi
//Tiến hành tách chuỗi để có một mảng ký tự
//Ánh xạ mảng và lấy giá trị UTF-8 bằng phương thức charCodeAt();
const utfValuesArr = string.split('').map(letter => letter.charCodeAt());
console.log(utfValuesArr);
//[87, 101, 32, 109, 117, 115, 116, 32, 107, 101, 101, 112, 32, 111, 117, 114, 32, 102, 97, 105, 116, 104, 32, 105, 110, 32, 116, 104, 101, 32, 82, 101, 112, 117, 98, 108, 105, 99, 46]


// utf-16 to string
console.log(String.fromCharCode(65));//A
console.log(String.fromCharCode(105, 106, 107));//ijk
console.log(String.fromCharCode(32));//'' empty space!


const arr = [77, 97, 121, 32, 116, 104, 101, 32, 70, 111, 114, 99, 101, 32, 66, 101, 32, 87, 105, 116, 104, 32, 89, 111, 117];
const quotes = arr.map(n => String.fromCharCode(n));
console.log(quotes.join('')); //May the Force Be With You


//slice(start, end)
//substring(start, end)
//substr(start, length)

const string = 'I’m just a simple man trying to make my way in the universe.';
console.log(string.slice(1));//’m just a simple man trying to make my way in the universe.
console.log(string.slice(0,10));//I’m just a
console.log(string.slice(-3));//se.

const string = 'Darth Vader';
console.log(string.substring(0));//Darth Vader
console.log(string.substring(6));//Vader
console.log(string.substring(1,6));//arth

var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6); //Banana


// join one or more strings
var text = "Hello" + " " + "World!";
var text = "Hello".concat(" ", "World!");


// del spaces
const string = '      Yoda     ';
console.log(string.trim());//Yoda


// add 000+5 la 4 '0005'
let str = "5";
str = str.padStart(4,0); //0005

let str = "5";
str = str.padEnd(4,0); //5000
