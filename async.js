/*
	callback: pass 1 function lam argument of 1 function khac
	
	Promise: code bat dong bo

	async: upgrade of Promise; code de nhin hon

*/

setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("callback").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}

// Promise

function myDisplayer(some) {
  document.getElementById("promise").innerHTML = some + " five=myDisplayer";
}

var promise = new Promise(function(resolve, reject) {
  let x = 0;

// some code (try to change x to 5)

  if (x == 0) {
    resolve("resolve");
    // "OK" pass to fuction .then((value="OK")) dau tien
    /* return cua function then truoc la value cua function then sau  */
  } else {
    reject("Error"); // "Error cung vay"
  }
});

promise
	.then((value) => `${value} one`)
	.then((value) => `${value} two`)
	.then((value) => `${value} three`)
	.then((value) => `${value} four`)
	.then(myDisplayer)
	.catch((err) => {
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
	const getData = async() => {
		var data = "Hello World";
		return data; // pass data to then((data) => {})
	}

	// ngam run resolve(data)
	getData().then(data => console.log(data)); c1
*/

const getData = async() => {
	var y = await "Hello World";  // pass data ngam to c1
	console.log(y);
}

console.log(1);
getData();
console.log(2);
console.log(3);
console.log(4);



function asynchronous_operational_method() {
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

	let combined_promise = Promise.all([first_promise, second_promise]);
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

// async function
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



