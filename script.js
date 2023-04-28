window.promises = [
	new Promise(resolve => setTimeout(() => resolve(1), Math.floor(Math.random() * 5000) + 1000)),
			new Promise(resolve => setTimeout(() => resolve(2), Math.floor(Math.random() * 5000) + 1000)),
			new Promise(resolve => setTimeout(() => resolve(3), Math.floor(Math.random() * 5000) + 1000)),
			new Promise(resolve => setTimeout(() => resolve(4), Math.floor(Math.random() * 5000) + 1000)),
			new Promise(resolve => setTimeout(() => resolve(5), Math.floor(Math.random() * 5000) + 1000)),
];

// Do not change the code above this
// add your promises to the array `promises`
Promise.any(promises)
			.then(result => {
				document.getElementById("output").textContent = `The first resolved promise is ${result}`;
			})
			.catch(error => console.log(error));
