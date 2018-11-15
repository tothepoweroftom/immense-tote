var inputBox = document.getElementById('inputBox');
//var cypherString = 'qwertyuiopasdfghjklzxcvbnm';
var inputString = 'abcdefghijklmnopqrstuvwxyz ';
var cypherString = 'wumseyqpdhxrtcfijkzoalvbng ';

var oldValue, newValue;

var inputHandler = function(e){
	newValue = inputBox.value;
	console.log('inputBox Value', inputBox.value);
	inputLetter = difference(oldValue, newValue);
	console.log('letter', inputLetter);
	inputBox.value = inputBox.value.substring(0, newValue.length - 1);
	inputBox.value += transformLetter(inputLetter, cypherString);
	if(inputBox.value == 'open sesame'){
			setTimeout(()=>{alert("The answer is not the result, but how you got there instead");}, 100);
	}
};

var keydownHandler = function(e){
	console.log("keydown");
	if(e.keyCode >= 65 && e.keyCode <91){
		//preventDefault(e);
		//inputBox.value += transformKeyCode(e.keyCode, cypherString);
	}
	oldValue = inputBox.value;
	console.log('oldvalue: ', oldValue);
};

var preventDefault = function(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
};

// var transformKeyCode = function(keyCode, cypher){
// 	var letterIndex = keyCode - 65;
// 	var calculatedLetter = cypher.charAt(letterIndex);
// 	return calculatedLetter;
// };

var transformLetter = function(inputVal, cypher){
	for (i=0; i<inputString.length; i++){
		if (inputVal == inputString.charAt(i)){
			return (cypher.charAt(i));
		}
	}
};

var difference = function (val1, val2){
	console.log("finding diff", val1, val2);
	var output = [];
	for (i =0; i<val2.length; i++){
		if(val1[i] !== val2[i]){
			output.push(val2[i]);
		}
	}
	return output.join("");
};

inputBox.addEventListener('keydown', keydownHandler);
inputBox.addEventListener('input', inputHandler);







