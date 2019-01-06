//JavaScript Document
//The Extensively Long Processes so we can learn, (Michael's way of a cruel joke probably xD)
function validateCharacters1(field) {
	validChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	len = field.length;
	
	for(i=0 ; i<len ; i++) {
		letterPos = validChars.indexOf(field.charAt(i), 0);
		if(letterPos < 0) {
			alert("The entry " + field + " contains invalid characters");
			return false;
		}
	}
	return true
}
function validateCharacters2 (field) {
	validChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@.-_";
	len = field.length;
	
	for(i=0 ; i<len ; i++) {
		letterPos = validChars.indexOf(field.charAt(i), 0);
		if(letterPos < 0) {
			alert("The entry " + field + " contains invalid characters");
			return false;
		}
	}
	return true
}

function validateFirstName(firstName) {
	if(firstName == "") { alert("The First Name field cannot be empty"); return false; }
	return validateCharacters1(firstName);
}

function validateLastName(lastName) {
	if(lastName == "") { alert("The Last Name field cannot be empty"); return false; }
	return validateCharacters1(lastName);
}

function validateEmail (email) {
	if(email == null)				{ alert("Email address cannot contain a NULL value."); return false; }
	if(email == "")					{ alert("Email address cannot contain an EMPTY value."); return false; }
	if(!validateCharacters2(email))	{ return false; }

	//  @ symbol must not be the first character.
	if (email.indexOf("@") == 0) {
		alert("@ cannot be the first character.");
		return false;
	}
	
	
	//  @ symbol must contain at least 1 instance.
	if (email.indexOf("@") < 0) {
		alert("Must contain at least one (1) @ symbol.");
		return false;
	}

	//  Must contain only one @ symbol.
	if (email.indexOf("@") != email.lastIndexOf("@")) {
		alert("Must contain only one @ symbol.");
		return false;
	}
	
	//  Last dot ( . ) must be after the @ symbol.
	if (email.lastIndexOf(".") < email.indexOf("@")) {
		alert("The last dot ( . ) must be after the @ symbol.");
		return false;
	}

	//  Cannot have two dots ( .. ) together.
	if (email.indexOf("..") >= 0) {
		alert("Cannot have two dots ( .. ) together.");
		return false;
	}


	// Cannot have a dot ( . ) and @ symbol together.
	if (email.indexOf(".@") >= 0) {
		alert("Cannot have a dot ( . ) and @ symbol together.");
		return false;
	}

	//  Cannot have an @ symbol and dot ( . ) together.
	if (email.indexOf("@.") >= 0) {
		alert("Cannot have an @ symbol and dot ( . ) together.");
		return false;
	}

	// Last character cannot be a dot ( . )
	if (email.lastIndexOf(".") == (email.length - 1)) {
		alert("Last character cannot be a dot ( . )");
		return false;
	}
	return true;
}

function validateSubject(subject) {
	if(subject == "") { alert("The Subject field cannot be empty"); return false; }
	
	len = subject.length;
	if (len > 31) { alert("The Subject field is to long \n (max characters 31)"); return false}
	
	return true;
}

function validateMessage(message) {
	if(message == "") { alert("The Message field cannot be empty"); return false; }
	
	return true;
}

function validateForm(formObj) {
	//Extract the information from the form
	firstName = formObj.firstName.value;
	lastName = formObj.lastName.value;
	email = formObj.email.value;
	subject = formObj.subject.value;
	message = formObj.message.value;
	
	//Validate the First Name
	if (!validateFirstName(firstName)) {
		formObj.firstName.select();
		return false
	}
	
	//Validate the Last Name
	if (!validateLastName(lastName)) {
		formObj.lastName.select();
		return false
	}
	
	//Validate Email
	if (!validateEmail(email)) {
		formObj.email.select();
		return false
	}
	
	//Validate Subject
	if (!validateSubject(subject)) {
		formObj.subject.select();
		return false
	}

	//Validate Message
	if (!validateMessage(message)) {
		formObj.message.select();
		return false
	}

	return true
}

function formSent() {
	alert ("The following information has been sent \n\n First Name: " + firstName + "\n Last Name: " + lastName + "\n Email: " + email + "\n Subject: " + subject + "\n Message: " + message + "\n\n You will now be redirected to the home page");
	window.location = "index.html";
}
