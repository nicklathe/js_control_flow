var testScore = Math.ceil(Math.random() * 100);
console.log(testScore);

switch(true) {
	case testScore >= 90:
		console.log("A");
		break;
	case testScore >= 80:
		console.log("B");
		break;
	case testScore >= 70:
		console.log("C");
		break;
	case testScore >= 60:
		console.log("D");
		break;
	default:
		console.log("D");

}