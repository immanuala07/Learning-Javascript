// JS code for debounce
const debounce = (fn, delay) => {
	let timeoutID;

	// Higher order function which passes ...args which is PointerEvent
	return function (...args) {

		// If the timeoutID exist then clear the timeout and set the timeout again in the below code
		if (timeoutID) {
			clearTimeout(timeoutID);
		}

		// setTimeout based on the delay passed on the function and call the  event handler function by passing the PointerEvent
		timeoutID = setTimeout(() => {
			fn(...args)
		}, delay);
	};
};

document.getElementById("buttonId").addEventListener("click", debounce(() => {
	console.log("Button Clicked..!");
}, 2000));
