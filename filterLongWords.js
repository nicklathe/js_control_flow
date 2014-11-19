var words = ["hello", "goodbye", "hi", "adios", "hola"];
var maxLength = 5;
var newWords = [];

for(var i = 0; i < words.length; i++) {
	if(words[i].length < maxLength) {
		newWords.push(words[i]);
	}
}
console.log(newWords);