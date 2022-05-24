// JavaScript Document

//The form part of the project.

///////////////////////NOTE
//Most of HTML5 new forms attributes help validate things, so less javascript will be used.

//To change Title
document.querySelector("title").innerHTML = "Form";

//To link the style for index
var cssLink = document.createElement('link');
cssLink.rel = "stylesheet";
cssLink.href = "css/style3.css";
document.querySelector("head").append(cssLink);

//To create a main element after the nav element

var formMain = document.createElement("main");

document.querySelector("nav").after(formMain);

/////////////Creating the form outline

formMain.innerHTML = `
	<h1>Form Intake Validation</h1>
	<form action="javascript:validateForm();">
		<span>Name: </span> 
		<input type="text" pattern="[a-zA-Z ]*" title="First Letter of each Name has to be Capitalize" required>

		<span>Address: </span> 
		<input type="text" pattern="[a-zA-Z0-9 ]*" title="Enter your Street Address, start with number, then a space, then the rest of the name with the first letter being capitalize." required>

		<span>City: </span> 
		<input type="text" pattern="[a-zA-Z ]*" title="Enter your City with First Letter of each Name is Capitalize" required>

		<span>State: </span>
		<input type="text" list="states2Letters" pattern='[A-Z]{2}' maxlength="2" title="Enter Your State in Two Uppercase Letters" required>
		<datalist id="states2Letters">
		</datalist>

		<span>Zip: </span>
		<input type="text" maxlength='5' pattern='[0-9]{5}' title="Enter Your Zip Code in 5 Digits" required>

		<span>Email: </span>
		<input type="email" title="Enter Your Email" required>

		<br><br>
		<input type="submit">



	</form>

`
//////////////////////////State Option Datalist Insert
//There are, I think, 50 states

var theStates = [ "AK","AL","AR","AS","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"];

var optionStates = "";
for (i=0; i<theStates.length; i++) {
	optionStates += `<option value=${theStates[i]}>`;
}

document.querySelector("datalist").innerHTML = optionStates;





//////////////Selecting all input tags 
theInputs = document.querySelectorAll("input");

//////////////Validate all inputs
//Besides zip code, since the HTML code for it covers practically everything

function validateForm() {
	if (validateEmail() == false) {
		alert("Reenter your Email");
	}
	else if (validateStates() == false) {
		alert("Reenter your State");
	}
	else if (validateName() == false) {
		alert("Reenter your Name");
	}
	else if (validateCity() ==false) {
		alert("Reenter your City");
	}
	else if (validateAddress() == false) {
		alert("Reenter your Address")
	}
	
	else {
		alert("Your Form is valid");
	}
}





////////////////////////Email Validation
//The email type input only validates if it has an "@" symbol
//It also makes sure there is only one @
//Other than that, it does nothing else.
//The require attribute makes sure there is no empty space

//Validation needed for email
//    -the dot has to be before three characters, like .com

function validateEmail() {
	var dotPlace = theInputs[5].value.lastIndexOf(".");
	if (dotPlace == theInputs[5].value.length-4) {
		return true;
	}
	else {
		return false;
	}
}

//////////////////////State Validation
//The state has to be uppercase with 2 letters
//The pattern help limit the characters that are out with the pattern
//The max length and amount of letters are kept to 2.
//That means the only  thing to validate is if they enter the correct state.

function validateStates() {
	for (i=0;i<theStates.length;i++) {
		if (theInputs[3].value == theStates[i]) {
			return true;
		}
	}
	return false;
	
}

////////////////////////City Validation
//Same as the name validation reasoning stated below the validate City.

function validateCity() {
	var theCity = theInputs[2].value.split(" ");
	for (i=0;i<theCity.length;i++) {
		if (theCity[i].charAt(0) != theCity[i].charAt(0).toUpperCase()) {
			return false;
		}
	}
	return true;
}

///////////////////////Name Validation
//The pattern: [a-zA-Z ]* Will include all lower case and uppercase and spaces.
//This means to validate only the upper case of the first letter of first, last, and whatever additional names.

function validateName() {
	var theName = theInputs[0].value.split(" ");
	for (i=0;i<theName.length;i++) {
		if (theName[i].charAt(0) != theName[i].charAt(0).toUpperCase()) {
			return false;
		}
	}
	return true;
}


///////////////////Address Validation
//The pattern: [a-zA-Z0-9 ]* Will accept numbers, letters both upper and lower.
//For validation, the address will be split, one will verify a number at the start
//the other will verify a letter on the name (which will see if it is capped)
//Addition spaces after the first name will be ignore.

function validateAddress() {
	var theAddress = theInputs[1].value.split(" ");
	if (theAddress.length < 2) {
		return false;
	}
	else if (isNaN(parseInt(theAddress[0].charAt(0)) == false)){
		return false;		 
	}
	else if (theAddress[1].charAt(0) != theAddress[1].charAt(0).toUpperCase()) {
		return false;
	}
	else {
		return true;
	}
			 
}



