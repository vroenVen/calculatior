window.onload = function () {
	
	var input  = document.getElementById('input');
	var output = document.getElementById('output');
	if (localStorage.save) input.value = localStorage.save;




	window.calque = new Calque(input, output);
	input.focus();

	var saveTimer = null;
	input.oninput = function() {
		//console.log(this.value);
		var text = this.value;
		if (saveTimer) {
			clearTimeout(saveTimer);
			saveTimer = null;
		}
		saveTimer = setTimeout(function() {
			localStorage.save = text;
			//console.log('saved');
			saveTimer = null;
		}, 1000);
	}
	
}