// comment one line
/*
	comment more lines...

*/

// dung back-tics `voi ${expression}`
var firstName = "John";
var lastName = "Doe";
var fullName = `Welcome ${firstName}, ${lastName}!`


var str = "i am a string";
console.log(str.length); //13

//new array
var str = "Luke, I am your Father";
// String.split(), default cat dau comma=,
console.log(str.split()); // 	['Luke, I am your Father' ]
console.log(str.split('')); //	["L", "u", "k", "e", ",", " ", "I", " ", "a", "m", " ", "y", "o", "u", "r", " ", "F", "a", "t", "h", "e", "r"]
console.log(str.split(' ')); // [ 'Luke,', 'I', 'am', 'your', 'Father' ]
console.log(str.split(',')); // [ 'Luke', ' I am your Father' ]


//new string, only replace match first
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
console.log(p.replace('dog', 'monkey'));
//The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"

const regex = /Dog/i;
console.log(p.replace(regex, 'ferret'));
//"The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"


"xxx".replaceAll("", "_"); // "_x_x_x_"
'aabbcc'.replaceAll('b', '.'); // 'aa..cc'
'aabbcc'.replaceAll(/b/g, '.'); //"aa..cc"

'aabbcc'.replaceAll(/b/, '.'); // error



//new string
var str = 'I find your lack of faith disturbing.';
console.log(str.toUpperCase()); //I FIND YOUR LACK OF FAITH DISTURBING.

var str = 'Help me, Obi-Wan Kenobi. You’re my only hope.';
console.log(str.toLowerCase()); //help me, obi-wan kenobi. you’re my only hope.


// join one or more strings
var text = "Hello" + " " + "World!";
var text = "Hello".concat(" ", "World!");


// new array
// cắt spaces first && last 
var text1 = "      Hello World!      ";
var text2 = text1.trim();
Array.trimStart()
Array.trimEnd()


// str.rjust(name, 20, "x")
var str = "5";
str = str.padStart(20,"x"); //xxx5

// str.ljust(name, 20, "s" )
var str = "5";
str = str.padEnd(20,"s"); //5sss


// -------------------------------------------slice------------------------------------------
//slice(start, end)
//substring(start, end)

/*
	If start equals stop: returns an empty string
	substring:
		If start > stop, then substring will swap those 2 arguments.
		If start vs stop so am or NaN thi cho ve 0.

	slice:
		If start > stop, slice() will return the empty string. ("")
		If start is negative: sets char from the end of string
		If stop is negative: sets stop to: string.length – Math.abs(stop) (original value), except bounded at 0 (thus, Math.max(0, string.length + stop)) as covered in the ECMA specification.

*/

const str = 'The morning is upon us.';
str.slice(5, 1);  // returns empty '' // start > stop
str.slice(5, 0);  // returns empty '' // start > stop
str.slice(-3, -5);  // returns empty '' // start > stop

str.slice(-3);     // returns 'us.'
str.slice(-3, -1); // returns 'us'
str.slice(0, -1);  // returns 'The morning is upon us'
str.slice(4, -1);  // returns 'morning is upon us'

console.log(str.slice(-11, 16)); // => "is u"
console.log(str.slice(11, -7)); // => " is u"
console.log(str.slice(-5, -1)); // => "n us"


const str = 'Mozilla';

// -3 ve 0; (0,4)
console.log(str.substring(-3, 4)); // 'Mozi'
// -2 ve 0; sau do swap (4,0) ve (0,4)
console.log(str.substring(4, -2)); // 'Mozi'

// Displays 'M'
console.log(str.substring(0, 1));
console.log(str.substring(1, 0));
// Displays 'Mozill'
console.log(str.substring(0, 6));
// Displays 'lla'
console.log(str.substring(4));
console.log(str.substring(4, 7));
console.log(str.substring(7, 4)); // swap stop start (7,4) thanh (4,7)

// Displays 'Mozilla'
console.log(str.substring(0, 7));
console.log(str.substring(0, 10));

// -------------------------------------------slice end--------------------------------------

// index[1]
var string = 'Fear leads to anger';
console.log(string.charAt(1));//e
console.log(string.charAt(string.length - 1));//r
console.log(string.charAt(string.length));//'' Chỉ số nằm ngoài phạm vi!
//Chú ý: Nếu không có chỉ số truyền vào thì mặc định sẽ là 0
console.log(string.charAt());//F


var string = 'We must keep our faith in the Republic.';
// string[0] is 'W', ord('W') is 87 theo python
// string.charCodeAt(index)
console.log(string.charCodeAt(0));//87
console.log(string.charCodeAt(5));//115 ord('s')=115 chr(115)='s'
//Nếu bạn muốn lấy tất cả giá trị UTF-8 của các ký tự trong chuỗi
//Tiến hành tách chuỗi để có một mảng ký tự
//Ánh xạ mảng và lấy giá trị UTF-8 bằng phương thức charCodeAt();
var utfValuesArr = string.split('').map(varter => varter.charCodeAt());
console.log(utfValuesArr);
//[87, 101, 32, 109, 117, 115, 116, 32, 107, 101, 101, 112, 32, 111, 117, 114, 32, 102, 97, 105, 116, 104, 32, 105, 110, 32, 116, 104, 101, 32, 82, 101, 112, 117, 98, 108, 105, 99, 46]


// utf-16 to string, python: chr(65) = 'A'
console.log(String.fromCharCode(65));//A
console.log(String.fromCharCode(105, 106, 107));//ijk
console.log(String.fromCharCode(32));//'' empty space!
var arr = [77, 97, 121, 32, 116, 104, 101, 32, 70, 111, 114, 99, 101, 32, 66, 101, 32, 87, 105, 116, 104, 32, 89, 111, 117];
var quotes = arr.map(n => String.fromCharCode(n));
console.log(quotes.join('')); //May the Force Be With You


// indexOf() co 2 arguments, NOT regex
// các search methods 
// find tu left to right return -1 neu ko tiem thay
var str = 'When gone am I, the last of the Jedi will you be. The Force runs strong in your family. Pass on what you have learned.';
console.log(str.indexOf('h')); //1
console.log(str.indexOf('H')); //-1
console.log(str.indexOf('h', 2)); //17 index[2] tim từ left to right 
console.log(str.indexOf('J', str.length)); //-1

// tu right to left
var str = 'When gone am I, the last of the Jedi will you be. The Force runs strong in your family. Pass on what you have learned.';
console.log(str.lastIndexOf('h')); //105
console.log(str.lastIndexOf('h', 100)); //97 index[100] tim từ rigth to left 
console.log(str.lastIndexOf('.')); //117
console.log(str.lastIndexOf('.', 0)); //-1


// search() chi co 1 argument, va dung duoc regex //g
// return index of 'sub' if found
var str = "Please locate where 'locate' occurs!";
str.search("locate"); // return index if found else -1


/*
	/<regex>/g 	/g global
	/<regex>/i 	/i khong phan biet hoa thuong
*/

// return array
// string.match(regexp) return Array[...match_items]
var text = "The rain in SPAIN stays mainly in the plain";
var array = text.match(/ain/gi); // [ain,AIN,ain,ain]

const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);
console.log(found); // ["T", "I"]


const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';

const array = [...str.matchAll(regexp)];

console.log(array[0]);
// ["test1", "e", "st1", "1"] ; // [fullgroup, g1,g2,g3, groupsub ,...]

console.log(array[1]);
// ["test2", "e", "st2", "2"]


const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';
str.match(regexp);
// Array ['test1', 'test2']

const array = [...str.matchAll(regexp)];
array[0];
// ['test1', 'e', 'st1', '1', index: 0, input: 'test1test2', length: 4]
array[1];
// ['test2', 'e', 'st2', '2', index: 5, input: 'test1test2', length: 4]


// -----------------------------------------bool---------------------------------------------
// co phan biet Hoa thuong
var str = 'Never tell me the odds!';
console.log(str.startsWith('Never')); //true
console.log(str.startsWith('Never', 1)); //false
console.log(str.startsWith('never', 0)); //false

var str = 'Do. Or do not. There is no try.';
console.log(str.endsWith('try.')); //true
console.log(str.endsWith('Try.')); //false
console.log(str.endsWith('try', 30)); //true
console.log(str.endsWith('try.', 30)); //false

// string.includes(searchvalue, start)
// 'sub' in string;  string co chua 'sub' ko
var str = 'The Force will be with you. Always.';
console.log(str.includes('Force')); //true
//Chú ý: includes Phân biệt hoa thường!
console.log(str.includes('force')); //false
//Thông thường sẽ tốt hơn khi chuyển đổi chuỗi thành chuỗi viết thường 
//Sau đó mới bắt đầu kiểm tra chuỗi bằng phương thức includes.
var newStr = str.toLowerCase();
console.log(newStr.includes('force')); //true
//Thêm vị trí chỉ định bắt đầu tìm kiếm
console.log(str.includes('w', 0)); //true
console.log(str.includes('T', 1)); //false

// -----------------------------------------bool end-----------------------------------------
