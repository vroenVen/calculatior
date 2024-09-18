
function copyInput(type=""){
	var copyied = document.getElementById("input").value
	if (type=="cut"){
		document.getElementById("input").value = ""
	} 
	if (type=="paste") {
		pasteTxt = navigator.clipboard.readText()
		document.getElementById("input").value = pasteTxt
	}
	
	copy(copyied)
}

function copyAnswer(input){
	copy(input)
}

function copy(input){
	navigator.clipboard.writeText(input)
	console.log("copied "+input+" to clipboard")
}

async function paste(input) {
  const text = await navigator.clipboard.readText();
  input.value = text;
}