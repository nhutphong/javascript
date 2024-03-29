/*
	callback: pass 1 function lam argument of 1 function khac
	
	Promise: code bat dong bo

	async: upgrade of Promise; code de nhin hon
	Await – tạm dừng việc thực hiện các hàm async. (Var result = await someAsyncCall ().
	Khi được đặt trước một Promise, nó sẽ đợi cho đến khi Promise kết thúc và trả về kết quả.
	Await chỉ làm việc với Promises, nó không hoạt động với callbacks.
	Await chỉ có thể được sử dụng bên trong các function async.

	async-await, lam cho code bat dong do, run dong bo( tu code run tu tren xuong duoi)
*/

/*

*/

setInterval(myFunction, 5000);

function myFunction() {
  let d = new Date();
  document.getElementById("callback").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}

// Promise
function myDisplayer(value) { // value='ok one two three four'
  document.getElementById("promise").innerHTML = value + " five=myDisplayer";
}

var promise = new Promise(function(resolve, reject) {
  let x = 0;

// some code (try to change x to 5)

  if (x == 0) {
    resolve("ok");
    // 'ok' pass to then((value='ok') => {})
  } else {
    reject("loi roi"); // 'loi roi' pass to .catch((err='loi roi') => {})
  }
});

/*
	callback = (value) => value //anonymous function
	.then(callback) 

	callback = (err) => err //anonymous function
	.catch(callback) 
*/
/* return cua function then truoc la 'value' cua function then sau  */
promise
	.then((value) => `${value} one`) // 	value='ok'
	.then((value) => `${value} two`) // 	value='ok one'
	.then((value) => `${value} three`) //	value='ok one two'
	.then((value) => `${value} four`) //	value='ok one two three'
	.then(myDisplayer) //					value='ok one thwo three four'
	.catch((err) => { // err='loi roi'
		console.error(err);
		});
/*
	
	nen dung chi 1 .catch((error) => {})
	myPromise
	  .then((value) => `${value} and bar`)
	  .then((value) => `${value} and bar again`)
	  .then((value) => `${value} and again`)
	  .then((value) => `${value} and again`)
	  .then((value) => {
	    console.log(value);
	  })
	  .catch((err) => {
	    console.error(err);
	  });


	default: .then(funcOK, funcError) co 2 function

	promise
	  .then(handleFulfilledA, handleRejectedA)
	  .then(handleFulfilledB, handleRejectedB)
	  .then(handleFulfilledC, handleRejectedC);
*/


// async await
/*
	// async fucntion getData() {}
	const getData = async() => {
		var data = "Hello World";
		return data; // pass data to resolve(data) of reject(data)
	}

	// khong co keyword:
		var data = await "hello world"; nen code them line duoi
	getData().then(data => console.log(data)); c1


	// async fucntion getData() {}
	const getData = async() => {
		var data = await "Hello World";
		return data;
	}
	// vi co await, nen da run ngam; getData().then(data => console.log(data)); c1
	// khong can code them .then
*/


const human = async() => {
	var value;
	for (let i = 1; i<6; i++) {
		console.log(`human start${i}`);

		let value = await i;

		console.log(`human end ${i}`);
		console.log(value);
	}
	return value
}

const animal = async() => {
	var value;
	for (let i = 1; i<6; i++) {
		console.log(`animal start${i}`);

		value = await i;

		console.log(`animal end ${i}`);
	}
	return value
}

const machine = async() => {
	var value;
	for (let i = 1; i<6; i++) {
		console.log(`machine start${i}`);

		value = await i;

		console.log(`machine end ${i}`);
		console.log(value);
	}
	return value
}

async function test() {
	let list = await Promise.all([animal(), human(), machine()]);
	return list;
}

async function main() {
	let data = await test();
	console.log(data);
}


console.log(1);
main();
console.log(2);
console.log(3);
console.log(4);


async function asynchronous_operational_method() {
	let first_promise = new Promise((resolve, reject) => {
		setTimeout(() => {
		resolve(" haha..");
		}, 1500);
	});

	let second_promise = new Promise((resolve, reject) => {
		setTimeout(() => {
		resolve(" GeeksforGeeks..");
		}, 1000);
	});

	let combined_promise = await Promise.all([first_promise, second_promise]);

	return combined_promise;
}

async function display() {
	let data = await asynchronous_operational_method();
	console.log(data);
}

display();


// a promise
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 4000); 
});

// async function, check try catch nen dung
async function asyncFunc() {
    try {
        // wait until the promise resolves 
        let result = await promise; 

        console.log(result);
    }   
    catch(error) {
        console.log(error);
    }
}
// calling the async function
asyncFunc(); // Promise resolved


//
/*
	  // Async function without a try/catch block.
    async function doSomethingAsync(){
        // This async call may fail.
        let result = await someAsyncCall();
        return result;
    }

    // We catch the error upon calling the function.
    doSomethingAsync().
        .then(okFunction)
        .catch(errorFunction);
*/


/*
	sync function getABC() {
    let A = await getValueA(); // cho run A xong moi toi B va toi C;
    let B = await getValueB();
    let C = await getValueC();
    return A * B * C;
    // vi B cung ko nhan value tu A, va C cung ko nhan value tu B
    // nen await nhu vay rat slow
    // nen dung c2
	}
  
  // c2
	async  function  getABC () {
      let results = await Promise.all([ getValueA, getValueB, getValueC ]); //run promise 1,2,3 cung luc
      return results.reduce((total,value) => total * value);
    }

*/

// declare promise; promise = one(); khi run moi la promise
// var one = async() => {
// 		var data = await "ONEEEEEEEEEEEEEEEEEE";
// 		return data;
// 	}

// var two = async() => {
// 		var data = await "TWOOOOOOOOOOOOOOO";
// 		return data;
// 	}

// var three = async() => {
// 		var data = await "THREEEEEEEEEEEEEEE";
// 		return data;
// 	}


// async function testOne() {
// 	let list = await Promise.all([one(), two(), three()]);
// 	return list;
// }

// async function mainOne() {
// 	let data = await testOne();
// 	console.log(data);
// }


console.log(1);
// mainOne();
console.log(2);
console.log(3);
console.log(4);

// one().then((value) => {console.log(value)});
// two().then((value) => {console.log(value)});
// three().then((value) => {console.log(value)});