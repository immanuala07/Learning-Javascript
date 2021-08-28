// JS code for debounce
const debounce = (fn, delay) => {
	let timeoutID;

	// Higher order function
	return function (...args) {

		if (timeoutID) {
			clearTimeout(timeoutID);
		}

		timeoutID = setTimeout(() => {
			fn(...args)
		}, delay);
	};
};

document.getElementById("buttonId").addEventListener("click", debounce(() => {
	console.log("Button Clicked..!");
}, 2000));
