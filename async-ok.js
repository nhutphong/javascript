/*
	giông hoàn toàn cách chạy của python, chỉ khác cách khai báo
	note: syntax Promise((resolve, reject) => { run resolve(); })
	
	giông lun 
	values = await Promise.all([animal(), human(), machine()]);
	values = await asyncio.gather(animal(), human(), machine())
	
	main() ; chứa đoạn code asyncio.gather(*coro)
	chi là python khi run cần qua asyncio.run(main())
*/

/*
	setTimeout(functionArrow, 5000); // sau 5s run, xong roi stop
	setInterval(functionArrow, 1000) // sau 1s run, roi cu run forever sau 1s 
*/



async function sleep(second) {
	return new Promise((resolve) => setTimeout(resolve, second * 1000));
}
// sleep(); //is 1 promise obj // use async
// sleep = Promise(); //is 1 promise obj


const animal = async() => {
	console.log(`animal start-------------------------------------------`);
	
	await dog();

	console.log(`animal end--------------------------------------------`);
	return "animal"
}

const dog = async() => {
	for (let i = 1; i<4; i++) {
		console.log(`dog start ${i}`);

		await sleep(1);

		console.log(`dog end ${i}`);
	}
}


const human = async() => {
	console.log(`human start-------------------------------------------`);
	
	await thong();

	console.log(`human end--------------------------------------------`);
	return "human"
}

const thong = async() => {
	var a;
	for (let i = 1; i<4; i++) {
		console.log(`thong start ${i}`);

		await sleep(1);

		console.log(`thong end ${i}`);
	}
}


const machine = async() => {
	console.log(`machine start-------------------------------------------`);
	
	await computer();

	console.log(`machine end--------------------------------------------`);
	return "machine"
}

const computer = async() => {
	for (let i = 1; i<4; i++) {
		console.log(`computer start ${i}`);

		await sleep(1);

		console.log(`computer end ${i}`);
	}
}



async function test() {
	let list = await Promise.all([animal(), human(), machine()]);
	return list;
}

async function main() {
	let data = await test();
	console.log("tao la main()", data);
}


console.log(1);
console.log(2);
main();
console.log(3);
console.log(4);