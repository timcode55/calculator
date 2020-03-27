let entryArea = document.getElementById('top-data');

function clickBtn(obj) {
	// console.log(this);
	var press = obj.innerHTML;

	if (press == '=') {
		// Calculate
		entryArea.innerHTML = eval(entryArea.innerHTML);
	} else if (press == 'AC') {
		// All Clear
		entryArea.innerHTML = '0';
	} else {
		if (entryArea.innerHTML == '0') {
			entryArea.innerHTML = press;
		} else {
			entryArea.innerHTML += press;
		}
	}
}
