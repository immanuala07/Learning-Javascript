// JS code for debounce
const debounce = (fn, delay) => {
	let timeoutID;

	// Higher order function which passes ...args which is PointerEvent
	return function (...args) {

		// If the timeoutID exist or declared then clear the timeout and set the timeout again in the below code
		if (timeoutID) {
			clearTimeout(timeoutID);
		}

		// SetTimeout is based on the delay passed on the function and call the event handler function by passing the PointerEvent.
		// Every time when debounce function is called, it is clearing the existing timeout and creating a new timeout to execute.
		timeoutID = setTimeout(() => {
			fn(...args)
		}, delay);
	};
};

document.getElementById("buttonId").addEventListener("click", debounce(() => {
	console.log("Button Clicked..!");
}, 2000));
