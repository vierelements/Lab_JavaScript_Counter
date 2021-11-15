const add = () => {
	let counter = 0;
	return function () {
	counter++;
	console.log(counter);
	if(counter >= 10) {
		clearInterval(a);
	}
	}
};

let b = add();
 
let a = setInterval(b,1000);


