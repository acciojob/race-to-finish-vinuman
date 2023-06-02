const p1 = new Promise((resolve, reject) =>{
	const time = Math.floor(Math.random()*5) + 1;
	setTimeout(() =>{
		const result = "p1";
		resolve(result);
	}, time)
});
const p2 = new Promise((resolve, reject) =>{
	const time = Math.floor(Math.random()*5) + 1;
	setTimeout(() =>{
		const result = "p2";
		resolve(result);
	}, time)
});
const p3 = new Promise((resolve, reject) =>{
	const time = Math.floor(Math.random()*5) + 1;
	setTimeout(() =>{
		const result = "p3";
		resolve(result);
	}, time)
});
const p4 = new Promise((resolve, reject) =>{
	const time = Math.floor(Math.random()*5) + 1;
	setTimeout(() =>{
		const result = "p4";
		resolve(result);
	}, time)
});
const p5 = new Promise((resolve, reject) =>{
	const time = Math.floor(Math.random()*5) + 1;
	setTimeout(() =>{
		const result = "p5";
		resolve(result);
	}, time)
});

const arr = [p1, p2, p3, p4, p5];

Promise.any(arr).then((values) =>{
	const output = document.getElementById('output');
	const p = document.createElement("p");
	p.textContent = values;
	output.appendChild(p);
})