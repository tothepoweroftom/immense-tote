var inputBox = document.getElementById('inputBox');
//var cypherString = 'qwertyuiopasdfghjklzxcvbnm';
var originalOrder = 'abcdefghijklmnopqrstuvwxyz';
var cypherString = 'wumseyqpdhxrtcfijkzoalvbng';


inputBox.addEventListener("keydown", function(e){
	if(e.keyCode >= 65 && e.keyCode <91){
		preventDefault(e);
		inputBox.value += transformLetter(e.keyCode, cypherString);

		if(inputBox.value == 'open sesame'){
			setTimeout(()=>{alert("The answer is not the result, but how you got there instead");}, 100);
		}
	}

	else{
		inputBox.value += e.code;
	}
});

var preventDefault = function(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
};

var transformLetter = function(keyCode, cypher){
	var letterIndex = keyCode - 65;
	var calculatedLetter = cypher.charAt(letterIndex);
	return calculatedLetter;
};

var transformInputBoxVal = function(inputBoxVal, cypher){
	var newVal;
	for (i=0; i<inputBoxVal.length; i++){
		inputC = inputBoxVal.charAt(i);
		for (j=0; j<originalOrder.length; j++){
			if (inputC == originalOrder.charAt(j)){
				console.log("Match");
			}
		}
	}
};

