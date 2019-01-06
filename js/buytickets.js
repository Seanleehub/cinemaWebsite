// JavaScript Document

//,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.
//  Begin Form Validation || for selectTicket
//,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.

//  Validate Characters || Numeric Only
function validateCharacters3 (field) {
	validChars = "0123456789";
	len = field.length;
	
	for(i=0 ; i<len ; i++) {
		letterPos = validChars.indexOf(field.charAt(i), 0);
		if(letterPos < 0) {
			alert("The entry " + field + " contains invalid characters");
			return false;
		}
	}
	return true;
}

function movieCheck(movie) {
	if (movie == "") {
		alert ("Please select a movie");
		return false;
	}
	else {
		return true;
	}
}

function totalQty() {
	if (qtyChild < 1 && qtyAdult < 1 && qtyStudent < 1 && qtyPensioner < 1 && qtyFamilyPass < 1) {
		alert ("You must buy (1) or more tickets to proceed");
		return false;
	}
	if (qtyChild > 0) {
		if (qtyAdult > 0) {
			return true; }
			else {
				if (qtyStudent > 0) {
					return true;}
					else {
						if (qtyPensioner > 0) {
							return true; }
							else {
							if (qtyFamilyPass > 0) {
								return true;
								}
								else {
									alert ("You must buy (1) or more \n Adult, Student, Pensioner or Family Pass \n tickets with a Child Ticket");
									return false;
								}
							}
					}
			}
	}
	else {
		return true;
	}
}

function validQtyA(qtyAdult) {
	if (!qtyAdult == "") {
		return validateCharacters3(qtyAdult);
	}
	return true;
}

function validQtyS(qtyStudent) {
	if (!qtyStudent == "") {
		return validateCharacters3(qtyStudent);
	}
	return true;
}

function validQtyC(qtyChild) {
	if (!qtyChild == "") {
		return validateCharacters3(qtyChild);
	}
	return true;
}

function validQtyP(qtyPensioner) {
	if (!qtyPensioner == "") {
		return validateCharacters3(qtyPensioner);
	}
	return true;
}

function validQtyFP(qtyFamilyPass) {
	if (!qtyFamilyPass == "") {
		return validateCharacters3(qtyFamilyPass);
	}
	return true;
}

function validateTicketForm(formObj) {
	qtyAdult = formObj.qtyAdult.value;
	qtyStudent = formObj.qtyStudent.value;
	qtyChild = formObj.qtyChild.value;
	qtyPensioner = formObj.qtyPensioner.value;
	qtyFamilyPass = formObj.qtyFamilyPass.value;
	x = document.getElementById("movieList").selectedIndex;
	movie = document.getElementsByTagName("option")[x].value;
	
// Validate Quantity Fields [[Adult, Student, Child, Pensioner, Family Pass]]
	if (!movieCheck(movie)) {
		return false;
	}
	if (!totalQty()) {
		return false;
	}
	if (!validQtyA(qtyAdult)) {
		formObj.qtyAdult.select();
		return false;
	}
	if (!validQtyS(qtyStudent)) {
		formObj.qtyStudent.select();
		return false;
	}
	if (!validQtyC(qtyChild)) {
		formObj.qtyChild.select();
		return false;
	}
	if (!validQtyP(qtyPensioner)) {
		formObj.qtyPensioner.select();
		return false;
	}
	if (!validQtyFP(qtyFamilyPass)) {
		formObj.qtyFamilyPass.select();
		return false;
	}
	return true;
}









//,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.
//  Calculate Total Prices
//,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.


//Allocate Ticket Prices
tixAdult = 12;
tixStudent = 10.5;
tixChild = 7.5;
tixPensioner = 7.5;
tixFamilyPass = 35;

//Calculate Total Cost Tickets Adult || Buy 4 tickets get 5% off Buy 7 Tickets and get 10% off
function totalTixAdult(qty) {
	if (qty > 6) {
		var groupTotal = 7
		var adultGroup = qty / groupTotal;
		var adultGroupRemainder = qty % groupTotal;
		var discounted = 0.9; // 10%
		var rate = 0.1;
	}
	else {
		var groupTotal = 4
		var adultGroup = qty / groupTotal;
		var adultGroupRemainder = qty % groupTotal;
		var discounted = 0.95; // 10%
		var rate = 0.05;
	}
		
	groupNumber = adultGroup.toFixed(0);
		
	if (adultGroup < 1 && qty < 4) {
		leftOver = adultGroupRemainder * tixAdult;
		return leftOver;
	}
	if (adultGroup > 0  && adultGroupRemainder == 0 ) {
		perGroup = tixAdult * groupTotal;
		groupTix = perGroup * adultGroup;
		Total = groupTix * discounted;
		discount = groupTix * rate;
		totalCost = Total.toFixed(2);
		return totalCost;
	}
	if (adultGroup > 0 && groupNumber > 0 && adultGroupRemainder > 0) {
		perGroup = tixAdult * groupTotal;
		groupTix = perGroup * groupNumber - perGroup;
		leftOver = adultGroupRemainder * tixAdult;
		total = groupTix + leftOver;
		Total = total * discounted;
		discount = total * rate;
		totalCost = Total;
		return totalCost;
	}
}

//For Students
function totalTixStudent(qty) {
	var groupTotal = 4
	var studentGroup = qty / groupTotal;
	var studentGroupRemainder = qty % groupTotal;
	var discounted = 0.95; // 5%
	var rate = 0.05;
		
	groupNumber = studentGroup.toFixed(0);
		
	if (studentGroup < 1 && qty < 4) {
		leftOver = studentGroupRemainder * tixStudent;
		return leftOver;
	}
	if (studentGroup > 0  && studentGroupRemainder == 0 ) {
		perGroup = tixStudent * groupTotal;
		groupTix = perGroup * studentGroup;
		Total = groupTix * discounted;
		discount = groupTix * rate;
		totalCost = Total.toFixed(2);
		return totalCost;
	}
	if (studentGroup > 0 && groupNumber > 0 && studentGroupRemainder > 0) {
		perGroup = tixStudent * groupTotal;
		groupTix = perGroup * groupNumber - perGroup;
		leftOver = studentGroupRemainder * tixStudent;
		total = groupTix + leftOver;
		Total = total * discounted;
		discount = total * rate;
		totalCost = Total.toFixed(2);
		return totalCost;
	}
}

//Calculate Total of Family Passes || Every 2 Passes for $60
function totalFamilyPassCalc(qtyFamilyPass) {
	var groupTotal = 2
	var FPGroup = qtyFamilyPass / groupTotal;
	var FPGroupRemainder = qtyFamilyPass % groupTotal;
	var discounted = 0.95; // 10%
	var rate = 0.05;
	var groupNumber = FPGroup.toFixed();	
	
	if (qtyFamilyPass > 1 && FPGroup > 0 && groupNumber > 0 && FPGroupRemainder > 0) {
		perGroup = 60;
		groupTix = perGroup * groupNumber - perGroup;
		leftOver = FPGroupRemainder * tixFamilyPass;
		total = groupTix + leftOver;
		totalCost = total.toFixed(2);
		return totalCost;
	}
	if (FPGroup > 0  && FPGroupRemainder == 0 ) {
		perGroup = 60;
		groupTix = perGroup * groupNumber;
		totalCost = groupTix.toFixed(2);
		return totalCost;
	}
	else {
		leftOver = qtyFamilyPass * tixFamilyPass;
		totalCost = leftOver.toFixed(2);
		return totalCost;
	}
}

//Regular Prices
function regularPrices () {
	if (qtyAdult > 0) {
		adultPrice1 = qtyAdult * tixAdult;
		adultPrice = parseInt(adultPrice1);
	}
	else {
		adultPrice = 0;
	}
	if (qtyStudent > 0) {
		studentPrice1 = qtyStudent * tixStudent;
		studentPrice = parseInt(studentPrice1);
	}
	else {
		studentPrice = 0;
	}
	if (qtyChild > 0) {
		childPrice1 = qtyChild * tixChild;
		childPrice = parseInt(childPrice1);
	}
	else {
		childPrice = 0;
	}
	if (qtyPensioner > 0) {
		pensionerPrice1 = qtyPensioner * tixPensioner;
		pensionerPrice = parseInt(pensionerPrice1);
	}
	else {
		pensionerPrice = 0;
	}
	if (qtyFamilyPass > 0) {
		familyPassPrice1 = qtyFamilyPass * tixFamilyPass;
		familyPassPrice = parseInt(familyPassPrice1);
	}
	else {
		familyPassPrice = 0;
		}
}

function totalQuantity() {
	if (qtyAdult > 0) {
		adultQTY = parseInt(qtyAdult);
	}
	else {
		adultQTY = 0;
	}
	if (qtyStudent > 0) {
		studentQTY = parseInt(qtyStudent);
	}
	else {
		studentQTY = 0;
	}
	if (qtyChild > 0) {
		childQTY = parseInt(qtyChild);
	}
	else {
		childQTY = 0;
	}
	if (qtyPensioner > 0) {
		pensionerQTY = parseInt(qtyPensioner);
	}
	else {
		pensionerQTY = 0;
	}
	if (qtyFamilyPass > 0) {
		familyPassQTY = parseInt(qtyFamilyPass);
	}
	else {
		familyPassQTY = 0;
	}
}


//Calculate the Totals of everything
function calculateTotal(formObj) {
	if (validateTicketForm(formObj)) {
		
		//Variables
		qtyAdult = formObj.qtyAdult.value;
		qtyStudent = formObj.qtyStudent.value;
		qtyChild = formObj.qtyChild.value;
		qtyPensioner = formObj.qtyPensioner.value;
		qtyFamilyPass = formObj.qtyFamilyPass.value;
					
		//Calculate Adult Tickets
		totalAdultTix = totalTixAdult(qtyAdult);
		formObj.totalAdult.value = "$ " + totalAdultTix.toFixed(2);
		
		//Calculate Student Tickets
		totalStudentTix = totalTixStudent(qtyStudent);
		formObj.totalStudent.value = "$ " + totalStudentTix;
		
		//Calculate Child Tickets
		totalChildTix = qtyChild * tixChild;
		formObj.totalChild.value = "$ " + totalChildTix.toFixed(2);
		
		//Calculate Pensioner Tickets
		totalPensionerTix = qtyPensioner * tixPensioner;
		formObj.totalPensioner.value = "$ " + totalPensionerTix.toFixed(2);
		
		//Calculate Family Passes
		totalFamilyPass = totalFamilyPassCalc(qtyFamilyPass);
		formObj.totalFamilyPass.value = "$ " + totalFamilyPass;
			
		//Get Regular Undiscounted and hopefully working price
		regularPrices();
		
		//Get Total Quantity
		totalQuantity();
		
		totalQTY = adultQTY + studentQTY + childQTY + pensionerQTY + familyPassQTY;
	
		totalCost = parseInt(totalAdultTix) + parseInt(totalStudentTix) + 
		parseInt(totalChildTix) + parseInt(totalPensionerTix) + parseInt(totalFamilyPass); 

		noDiscount = parseInt(adultPrice) + parseInt(studentPrice) + parseInt(childPrice) + 
		parseInt(pensionerPrice) + parseInt(familyPassPrice);
		
		discountGiven = noDiscount - totalCost;
		
		
		//Insert into text inputs
		formObj.totalQTY.value = totalQTY;
		formObj.noDiscount.value = "$ "+ noDiscount.toFixed(2);
		formObj.discountGiven.value = "$ " + discountGiven.toFixed(2);
		formObj.totalCost.value = "$ "+ totalCost.toFixed(2);
	}
}










//,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.
//  Customer Details Form Validation
//,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.
//------------------------------------------>>
//  Character Validation -------------------->>
//------------------------------------------>>

//  Validate Characters || Alphabetic Only
function validateCharacters1(field) {
	validChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";
	len = field.length;
	
	for(i=0 ; i<len ; i++) {
		letterPos = validChars.indexOf(field.charAt(i), 0);
		if(letterPos < 0) {
			alert("The entry " + field + " contains invalid characters");
			return false;
		}
	}
	return true;
}

//  Validate Characters || for Emails
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
	return true;
}

//  Validate Characters || Numeric Only
function validateCharacters3 (field) {
	validChars = "0123456789";
	len = field.length;
	
	for(i=0 ; i<len ; i++) {
		letterPos = validChars.indexOf(field.charAt(i), 0);
		if(letterPos < 0) {
			alert("The entry " + field + " contains invalid characters");
			return false;
		}
	}
	return true;
}


//--------------------------------------->>
//  Field Validation --------------------->>
//--------------------------------------->>

//  Validate First Name Field
function validFirstName(firstName) {
	if (firstName == "") { alert("The First Name field cannot be empty"); return false; }
	return validateCharacters1(firstName);
}

//  Validate Last Name Field
function validLastName(lastName) {
	if (lastName == "") { alert("The Last Name field cannot be empty"); return false; }
	return validateCharacters1(lastName);
}

//  Validate Street Number Field
function validStreetNo(streetNo) {
	if (streetNo == "") { alert("The Street Number field cannot be empty"); return false; }
	return validateCharacters3(streetNo);
}

//  Validate Street Name Field
function validStreetName(streetName) {
	if (streetName == "") { alert("The Street Name field cannot be empty"); return false; }
	if (streetName.indexOf(" ") != streetName.lastIndexOf(" ")) {
		alert("Must contain only one [space] to separate street name and type \n eg: William Street");
		return false;
	}

	return validateCharacters1(streetName);
}

//  Validate Suburb Field
function validSuburb(suburb) {
	if (suburb == "") { alert("The Suburb field cannot be empty"); return false; }
	if (suburb.indexOf(" ") != suburb.lastIndexOf(" ")) {
		alert("Must contain only one [space] to separate suburb names if necessary");
		return false;
	}
	return validateCharacters1(suburb);
}

//  Validate Post Code
function validPostCode(postCode) {
	if (postCode == "") { alert("The Post Code field cannot be empty"); return false; }
	if (postCode.length != 4) { alert("The Post Code must contain (4) characters"); return false;}
	return validateCharacters3(postCode);
}

//  Validate State Field
function validState(state) {
	if (state == "") { alert("Please select a state"); return false; }
	return true;
}

//  Validate Country Field
function validCountry(country) {
	if (country == "") { alert("Please select a country"); return false; }
	return true;
}

//  Validate Home Number Field
function validHomeNo(homeNo) {
	if (homeNo !="") {
		if (homeNo.length != 8) { alert("The Home Phone No field must contain (8) characters"); return false;}
		return validateCharacters3(homeNo);
	}
	else { return true; }
}

//  Validate Fax Number Field
function validFaxNo(faxNo) {
	if (faxNo !="") {
		if (faxNo.length != 8) { alert("The Fax No field must contain (8) characters"); return false;}
		return validateCharacters3(faxNo);
	}
	else { return true; }
}

//  Validate Mobile Number Field
function validMobileNo(mobileNo) {
	if (mobileNo !="") {
		if (mobileNo.length != 10) { alert("The Mobile No field must contain (10) characters"); return false;}
		return validateCharacters3(mobileNo);
	}
	else { return true; }
}

//  Validate Email Field [here's the effing long code!!]
function validEmail (email) {
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
	
	// Last character cannot be a dot ( @ )
	if (email.lastIndexOf("@") == (email.length - 1)) {
		alert("Last character cannot be a dot ( @ )");
		return false;
	}

	return true;
}

//  Validate Credit Card Number Field
function validCcNo(ccNo) {
	if(ccNo == "") { alert("The Credit Card Number field cannot be empty"); return false; }
	if (ccNo.length != 16) { alert("The Credit Card Number field must contain (16) characters"); return false;}
	return validateCharacters3(ccNo);
}

//  Validate Credit Card Expiry Date Field
function validDD(dd) {
	if (dd == "") { alert("Please select a day"); return false; }
	return true;
}

function validMM(mm) {
	if (mm == "") { alert("Please select a Month"); return false; }
	return true;
}

function validYY(yy) {
	if (yy == "") { alert("Please select a Year"); return false; }
	return true;
}
function validCcExpiryDate() {
	if (!validDD(dd)) { return false; }
	if (!validMM(mm)) { return false; }
	if (!validYY(yy)) { return false; }
	return true;
}


//-------------------------------------->>
//  Form Validation --------------------->>
//-------------------------------------->>
function validateBooking(formObj) {
	firstName = formObj.firstName.value;
	lastName = formObj.lastName.value;
	streetNo = formObj.streetNo.value;
	streetName = formObj.streetName.value;
	suburb = formObj.suburb.value;
	postCode = formObj.postCode.value;
	state = formObj.state.value;
	country = formObj.country.value;
	homeNo = formObj.homeNo.value;
	faxNo = formObj.faxNo.value;
	mobileNo = formObj.mobileNo.value;
	email = formObj.email.value;
	
	//Credit Card Number
	ccNo1 = formObj.ccNo1.value;
	ccNo2 = formObj.ccNo2.value;
	ccNo3 = formObj.ccNo3.value;
	ccNo4 = formObj.ccNo4.value;
	ccNo = ccNo1 + ccNo2 + ccNo3 +ccNo4;

	//Credit Card Expiry Date
	dd = formObj.dd.value;
	mm = formObj.mm.value;
	yy = formObj.yy.value;
	ccExpiryDate = dd + "-" + mm + "-" + yy;
	
	//  Validate First Name
	if (!validFirstName(firstName)) {
		formObj.firstName.select();
		return false;
	}
	
	//  Validate Last Name
	if (!validLastName(lastName)) {
		formObj.lastName.select();
		return false;
	}
	
	//  Valid Street Number
	if (!validStreetNo(streetNo)) {
		formObj.streetNo.select();
		return false;
	}
	
	//  Valid Street Name
	if (!validStreetName(streetName)) {
		formObj.streetName.select();
		return false;
	}
	
	//  Valid Suburb
	if (!validSuburb(suburb)) {
		formObj.suburb.select();
		return false;
	}
	
	//  Valid Post Code
	if (!validPostCode(postCode)) {
		formObj.postCode.select();
		return false;
	}
	
	//  Valid State
	if (!validState(state)) {
		return false;
	}
	
	//  Valid Country
	if (!validCountry(country)) {
		return false;
	}
	
	//  Valid Home Phone Number
	if (!validHomeNo(homeNo)) {
		formObj.homeNo.select();
		return false;
	}
	
	//  Valid Fax Number
	if (!validFaxNo(faxNo)) {
		formObj.faxNo.select();
		return false;
	}
	
	//  Valid Mobile Number
	if (!validMobileNo(mobileNo)) {
		formObj.mobileNo.select();
		return false;
	}
	
	//  Valid Email
	if (!validEmail(email)) {
		formObj.email.select();
		return false;
	}
	
	//  Valid Credit Card Number
	if (!validCcNo(ccNo)) {
		formObj.ccNo1.select();
		return false;
	}
	
	//  Valid Credit Card Expiry Date
	if (!validCcExpiryDate()) {
		return false;
	}
	
	//You've made it!!!
	return true;
}


//,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.
//  Begin Execute Form || for selectTicket
//,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.,.-*'*-.

function movieTitleConverter() {
	if (movie == "babylonAD") {
		var movieTitle = "Babylon A.D";
	}
	if (movie == "beverlyHillsChihuahua") {
		var movieTitle = "Beverly Hills Chihuahua";
	}
	if (movie == "burnAfterReading") {
		var movieTitle = "Burn After Reading";
	}
	if (movie == "darkKnight") {
		var movieTitle = "The Dark Knight";
	}
	if (movie == "disasterMovie") {
		var movieTitle = "Disaster Movie";
	}
	if (movie == "duchess") {
		var movieTitle = "The Duchess";
	}
	if (movie == "hellboyII") {
		var movieTitle = "Hellboy II: The Golden Army";
	}
	if (movie == "houseBunny") {
		var movieTitle = "The House Bunny";
	}
	if (movie == "journeyToCenter") {
		var movieTitle = "Journey to the Center of the Earth";
	}
	if (movie == "journeyToCenter3D") {
		var movieTitle = "Journey to the Center of the Earth 3D";
	}
	if (movie == "makeItHappen") {
		var movieTitle = "Make it Happen";
	}
	if (movie == "mummy3") {
		var movieTitle = "Mummy: Tomb of the Dragon Emperor";
	}
	if (movie == "wallE") {
		var movieTitle = "Wall-e";
	}
	return movieTitle
}




function submitted(formObj) {
	function calculateTotal(formObj) {
		if (validateTicketForm(formObj)) {
			
			//Variables
			qtyAdult = formObj.qtyAdult.value;
			qtyStudent = formObj.qtyStudent.value;
			qtyChild = formObj.qtyChild.value;
			qtyPensioner = formObj.qtyPensioner.value;
			qtyFamilyPass = formObj.qtyFamilyPass.value;
						
			//Calculate Adult Tickets
			totalAdultTix = totalTixAdult(qtyAdult);
			formObj.totalAdult.value = "$ " + totalAdultTix;
			
			//Calculate Student Tickets
			totalStudentTix = totalTixStudent(qtyStudent);
			formObj.totalStudent.value = "$ " + totalStudentTix;
			
			//Calculate Child Tickets
			totalChildTix = qtyChild * tixChild;
			formObj.totalChild.value = "$ " + totalChildTix.toFixed(2);
			
			//Calculate Pensioner Tickets
			totalPensionerTix = qtyPensioner * tixPensioner;
			formObj.totalPensioner.value = "$ " + totalPensionerTix.toFixed(2);
			
			//Calculate Family Passes
			totalFamilyPass = totalFamilyPassCalc(qtyFamilyPass);
			formObj.totalFamilyPass.value = "$ " + totalFamilyPass;
				
			//Get Regular Undiscounted and hopefully working price
			regularPrices();
			
			//Get Total Quantity
			totalQuantity();
			
			totalQTY = adultQTY + studentQTY + childQTY + pensionerQTY + familyPassQTY;
		
			totalCost = parseInt(totalAdultTix) + parseInt(totalStudentTix) + 
			parseInt(totalChildTix) + parseInt(totalPensionerTix) + parseInt(totalFamilyPass); 
	
			noDiscount = parseInt(adultPrice) + parseInt(studentPrice) + parseInt(childPrice) + 
			parseInt(pensionerPrice) + parseInt(familyPassPrice);
			
			discountGiven = noDiscount - totalCost;
			
			
			//Insert into text inputs
			formObj.totalQTY.value = totalQTY;
			formObj.noDiscount.value = "$ "+ noDiscount.toFixed(2);
			formObj.discountGiven.value = "$ " + discountGiven.toFixed(2);
			formObj.totalCost.value = "$ "+ totalCost.toFixed(2);
		}
	}
	if (validateBooking(formObj)) {
		
		//Call Back Variables xD
		qtyA = formObj.qtyAdult.value;
		qtyS = formObj.qtyStudent.value;
		qtyC = formObj.qtyChild.value;
		qtyP = formObj.qtyPensioner.value;
		qtyFP = formObj.qtyFamilyPass.value;
		x = document.getElementById("movieList").selectedIndex;
		movie = document.getElementsByTagName("option")[x].value;
	
		// Remove the Empty Fields here || Ticket Quantity
		if (qtyA != "") {
			var qtyAdult = "Adult: " + qtyA + "\n";
		}
		else {
			var qtyAdult = "";
		}
		if (qtyS != "") {
			var qtyStudent = "Student: " + qtyS + "\n";
		}
		else {
			var qtyStudent = "";
		}
		if (qtyC != "") {
			var qtyChild = "Child: " + qtyC + "\n";
		}
		else {
			var qtyChild = "";
		}
		if (qtyP != "") {
			var qtyPensioner = "Pensioner:" + qtyP + "\n";
		}
		else {
			var qtyPensioner = "";
		}
		if (qtyFP != "") {
			var qtyFamilyPass = "Family Pass: " + qtyFP + "\n";
		}
		else {
			var qtyFamilyPass = "";
		}
			
		//The Ticket List
		tixList = qtyAdult + qtyStudent + qtyChild + qtyPensioner + qtyFamilyPass;
	
		//Change Movie Title Name
		movieTitle = movieTitleConverter ();
		
		//Get Cost Breakdown
		calculateTotal(formObj);
		allTickets = formObj.totalQTY.value;
		undiscounted = noDiscount;
		amountPayable = formObj.totalCost.value;
		amountPayableInt = totalCost
		youSaved = undiscounted - amountPayableInt;
	
		//Get Mailin details
		firstName = formObj.firstName.value;
		lastName = formObj.lastName.value;
		streetNo = formObj.streetNo.value;
		streetName = formObj.streetName.value;
		suburb = formObj.suburb.value;
		postCode = formObj.postCode.value;
		state = formObj.state.value;
		country = formObj.country.value;
		homeNo = formObj.homeNo.value;
		faxNo = formObj.faxNo.value;
		mobileNo = formObj.mobileNo.value;
		email = formObj.email.value;
		
		//Credit Card Number
		ccNo1 = formObj.ccNo1.value;
		ccNo2 = formObj.ccNo2.value;
		ccNo3 = formObj.ccNo3.value;
		ccNo4 = formObj.ccNo4.value;
		ccNo = ccNo1 + " " + ccNo2 + " " + ccNo3 + " " + ccNo4;
		
		//Credit Card Expiry Date
		dd = formObj.dd.value;
		mm = formObj.mm.value;
		yy = formObj.yy.value;
		ccExpiryDate = dd + "-" + mm + "-" + yy;

		//Remove Empty Phone Numbers
		if (homeNo != "") {
			var homeNumber = "Home Phone No: " + homeNo + "\n";
		}
		else {
			var homeNumber = "";
		}
		if (faxNo != "") {
			var faxNumber = "Fax No: " + faxNo + "\n";
		}
		else {
			var faxNumber = "";
		}
		if (mobileNo != "") {
			var mobileNumber = "Mobile No: " + mobileNo + "\n";
		}
		else {
			var mobileNumber = "";
		}
		
		contactNumbers = homeNumber + faxNumber + mobileNumber;
		
		mailingDetails = firstName + " " + lastName + "\n" + streetNo + " " + streetName + "\n" + suburb + " " + state + ", " + postCode + "\n" + country + "\n\n";


		summary1 = "Your order has been sent \n\n\n" + 
				":::|| Summary ||::: \n\n" + 
				"Movie: " + movieTitle + "\n\n" + 
				"--Tickets Purchased--\n" + 
				tixList + 
				"Total Number of tickets purchased: " + allTickets + "\n\n" + 
				"--Cost Breakdown--\n" + 
				"Regular Price: $" + undiscounted.toFixed(2) + "\n" +
				"You saved: $" + youSaved.toFixed(2) + "\n\n" + 
				"||--Final Price: " + amountPayable + "--||\n\n\n" +
				"--Mailing Details-- \n" + 
				mailingDetails + 
				"--Contact Details--\n" +
				contactNumbers + "\n";
		summary2 = "Email: " + email;
		summary3 = "---------------------\n\n\n --Credit Card Details--\n Credit Card No: " + ccNo + "\n Expiry Date: " + ccExpiryDate;

		msg = summary1 + summary2 + summary3;
		return true;
		return msg;
	}
	else {
		return false;
	}
}
