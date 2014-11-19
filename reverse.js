var inputString = "building";
var newString = " ";

for(var i = inputString.length - 1; i >= 0; i--) {
	newString += inputString.substr(i, 1);
}
console.log(newString);