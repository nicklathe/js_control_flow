var inputString = "building";
var newString = " ";

for(var i = inputString.length; i > 0; i--) {
	newString += inputString.substring(i - 1, i);
}
console.log(newString);