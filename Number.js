
/*
	NaN Infinity -Infinity
	typeOf NaN is number
	typeOf Infinty is number
	
	100 / 0 = Infinty
	100 / "apple" = NaN
*/

var x = "10";
var y = 20;
var z = x + y; // "1020"

// rieng chi + la join string
var x = "100";
var y = "10";
var z = x / y; // z=10 ; OK
var z = x * y; // z=1000 ; OK
var z = x - y; // z=90 ; Ok

var x = 100 / "Apple"; // x = NaN
isNaN(x); // true

var x = NaN;
var y = "5";
var z = x + y; // z=NaN5



// convert to string
var x = 123;
x.toString();
(123).toString();
(100 + 23).toString();


let x = 123;
x.valueOf();
(123).valueOf();
(100 + 23).valueOf();


// lam tron so; (4) thi co 9.6560
var x = 9.656;
x.toFixed(0);
x.toFixed(2);
x.toFixed(4);
x.toFixed(6);

var x = 9.656;
x.toPrecision();
x.toPrecision(2);
x.toPrecision(4); // 9.656 co length=4, tuc co 4 so
x.toPrecision(6);


// convert to number
Number(true); //1
Number(false); //0
Number("10");
Number("  10");
Number("10  ");
Number(" 10  ");
Number("10.33"); //ok
Number("10,33"); // NaN
Number("10 33"); // NaN
Number("John"); // NaN
Number(new Date("1970-01-01")) // 0 ; ngay bat dau
Number(new Date("1970-01-02")) // 86400000 milliseconds

parseInt("-10"); // ok het
parseInt("-10.33");
parseInt("10");
parseInt("10.33");
parseInt("10 20 30");
parseInt("10 years"); // ok het
parseInt("years 10"); // NaN

parseFloat("10"); // ok het
parseFloat("10.33");
parseFloat("10 20 30");
parseFloat("10 years"); //ok het
parseFloat("years 10"); // NaN