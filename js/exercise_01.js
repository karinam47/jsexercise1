
console.log ("Enter Door Number to retrieve the prize ");




function askfordoornumber(){
	var doornumber = prompt("Enter Door Number to retrieve the prize");


	switch (doornumber){
		case "28":
			console.log ("You just won a new home");
			//document.getElementby ID("displayPad").innerHTML = "You just won a new home";break;
			break;
		case "55":
			console.log ("You just won a cruise to the Alaska");
			//document.getElementby ID("displayPad").innerHTML = "You just won a cruise to Alaska";break;
			break;
		case "13":
			console.log ("You just won One Million dollars");
			//document.getElementby ID("displayPad").innerHTML = "You just won Million dollars";break;
			break;
		default:
			console.log( "Your "+ doornumber + ". Are a Not a Winner!!")
			//document.getElementById("displayPad").innerHTML = "Your "+ doornumber + "Are Not a Winner!!";
			break;
	}

}

askfordoornumber();
// var doornumber1= "28";
// var doornumber2= "55";
// var doornumber3 = "13"

