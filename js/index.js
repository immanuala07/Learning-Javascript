// JS code for throttling
// Throttled functions execute on the first action/event and then wait a configurable duration before being eligible to fire again.
// All the actions gets ignored after the first action / event.
const throttle = (fn, delay) => {
	let lastTime = 0;

	// Higher order function which passes ...args which is PointerEvent
	return (...args) => {

		const nowTime = new Date().getTime();

		// This conditon is to ignore the button clicks in between the delay time.
		if (nowTime - lastTime < delay) {
			return;
		}

		// Assign the nowTime as lastTime 
		lastTime = nowTime;

		// Only the first click of button is recognized till the end of the delay.
		// If there are any clcik in betweeen the delay are not recognized.
		return fn(...args);
	};
};

document.getElementById("buttonId").addEventListener("click", throttle(() => {
	document.getElementById("demo").innerHTML = "Button Clicked..!";
	console.log("Button Clicked..!");
}, 5000));
