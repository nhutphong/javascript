// comment one line
/*
	comment more lines...

*/


// dung back-tics `voi ${expression}`
var firstName = "John";
var lastName = "Doe";
var fullName = `Welcome ${firstName}, ${lastName}!`;

var price = 10;
var VAT = 0.25;
var total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;


var str = "i am a string";
console.log(str.length); //13

//slice(start, end)
//substring(start, end)
//substr(start, length)

var string = 'I’m just a simple man trying to make my way in the universe.';
console.log(string.slice(1));
console.log(string.slice(0,10));
console.log(string.slice(-3));

var string = 'Darth Vader';
console.log(string.substring(0));//Darth Vader
console.log(string.substring(6));//Vader
console.log(string.substring(1,6));//arth

var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6); //Banana


// chỉ thây char || word xuất hiện đầu tiên 
var string = 'Fear is the path to the dark side.';
console.log(string.replace('Fear', 'Tears')); //Tears is the path to the dark side.
// /old/gi dung regular thay all <a> thanh all <A>
console.log(string.replace(/a/gi, 'A'));//FeAr is the pAth to the dArk side.


var str = 'I find your lack of faith disturbing.';
console.log(str.toUpperCase()); //I FIND YOUR LACK OF FAITH DISTURBING.

var str = 'Help me, Obi-Wan Kenobi. You’re my only hope.';
console.log(str.toLowerCase()); //help me, obi-wan kenobi. you’re my only hope.


// join one or more strings
var text = "Hello" + " " + "World!";
var text = "Hello".concat(" ", "World!");


// cắt spaces first && last 
var text1 = "      Hello World!      ";
var text2 = text1.trim();



// str.rjust(name, 20, "x")
var str = "5";
str = str.padStart(20,"x"); //xxx5

// str.ljust(name, 20, "s" )
var str = "5";
str = str.padEnd(20,"s"); //5sss


// index[1]
var string = 'Fear leads to anger';
console.log(string.charAt(1));//e
console.log(string.charAt(string.length - 1));//r
console.log(string.charAt(string.length));//'' Chỉ số nằm ngoài phạm vi!
//Chú ý: Nếu không có chỉ số truyền vào thì mặc định sẽ là 0
console.log(string.charAt());//F


var string = 'We must keep our faith in the Republic.';
// string[0] is 'W', ord('W') is 87 theo python
console.log(string.charCodeAt(0));//87
console.log(string.charCodeAt(5));//115 ord('s')=115 chr(115)='s'
//Nếu bạn muốn lấy tất cả giá trị UTF-8 của các ký tự trong chuỗi
//Tiến hành tách chuỗi để có một mảng ký tự
//Ánh xạ mảng và lấy giá trị UTF-8 bằng phương thức charCodeAt();
var utfValuesArr = string.split('').map(varter => varter.charCodeAt());
console.log(utfValuesArr);
//[87, 101, 32, 109, 117, 115, 116, 32, 107, 101, 101, 112, 32, 111, 117, 114, 32, 102, 97, 105, 116, 104, 32, 105, 110, 32, 116, 104, 101, 32, 82, 101, 112, 117, 98, 108, 105, 99, 46]


var str = "Luke, I am your Father";
// String.split(), default cat dau comma=,
console.log(str.split()); // 	['Luke, I am your Father' ]
console.log(str.split('')); //	["L", "u", "k", "e", ",", " ", "I", " ", "a", "m", " ", "y", "o", "u", "r", " ", "F", "a", "t", "h", "e", "r"]
console.log(str.split(' ')); // [ 'Luke,', 'I', 'am', 'your', 'Father' ]
console.log(str.split(',')); // [ 'Luke', ' I am your Father' ]



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
var str = "Please locate where 'locate' occurs!";
str.search("locate");

// string.match(regexp) return Array[...match_items]
var text = "The rain in SPAIN stays mainly in the plain";
var array = text.match(/ain/gi); // [ain,AIN,ain,ain]


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
// find return true false
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









// utf-16 to string
console.log(String.fromCharCode(65));//A
console.log(String.fromCharCode(105, 106, 107));//ijk
console.log(String.fromCharCode(32));//'' empty space!


var arr = [77, 97, 121, 32, 116, 104, 101, 32, 70, 111, 114, 99, 101, 32, 66, 101, 32, 87, 105, 116, 104, 32, 89, 111, 117];
var quotes = arr.map(n => String.fromCharCode(n));
console.log(quotes.join('')); //May the Force Be With You

