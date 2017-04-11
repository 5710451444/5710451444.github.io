// JavaScript Document
function validateFname(){
	
	var fname = document.getElementById('firstname').value;
	
	if(fname.length == 0){
		produceErrMsg("First Name is required.","fNameErr","red");
		return false;
	}
	if(!fname.match(/^[A-Za-z]+$/)){
		produceErrMsg("Please fill your first name with characters.","fNameErr","red");
		return false;
	}
	
	produceErrMsg("First Name is correct.","fNameErr","green");
	return true;	

}

function validateLname(){
	var lname = document.getElementById('lastname').value;
	
	if(lname.length == 0){
		produceErrMsg("Last Name is required.","lNameErr","red");
		return false;
	}
	if(!lname.match(/^[A-Za-z]+$/)){
		produceErrMsg("Please fill your last name with characters.","lNameErr","red");
		return false;
	}
	
	produceErrMsg("Last Name is correct.","lNameErr","green");
	return true;
}

function validateHnum(){
	
	var hnum = document.getElementById('housenumber').value;
	
	if(hnum.length == 0){
		produceErrMsg("House number is required.","hNumErr","red");
		return false;
	}
	
	produceErrMsg("House number is correct.","hNumErr","green");
	return true;
}

function validateStreet(){
	var st = document.getElementById('street').value;
	
	if(st.length == 0){
		produceErrMsg("Street is required.","stErr","red");
		return false;
	}
	
	produceErrMsg("Street is correct.","stErr","green");
	return true;
}

function validateCity(){
	
	var cty = document.getElementById('city').value;
	
	if(cty.length == 0){
		produceErrMsg("City is required.","ctyErr","red");
		return false;
	}
	
	produceErrMsg("City is correct.","ctyErr","green");
	return true;
}
	
function validateProv(){
	
	var prov = document.getElementById('province').value;
	
	if(prov.length == 0){
		produceErrMsg("Province is required.","provinErr","red");
		return false;
	}
	
	produceErrMsg("Province is correct.","provinErr","green");
	return true;
}

function validateZip(){
	
	var zip = document.getElementById('zipcode').value;
	
	if(zip.length == 0){
		produceErrMsg("Zip code is required.","zipErr","red");
		return false;
	}
	if(!zip.match(/^[0-9]+$/)){
		produceErrMsg("Please fill a zip code with numbers.","zipErr","red");
		return false;
	}
	
	produceErrMsg("Zip code is correct.","zipErr","green");
	return true;
}

function validatePnum(){
	
	var pnum = document.getElementById('phonenum').value;
	
	if(pnum.length == 0){
		produceErrMsg("Phone number is required.","pNumErr","red");
		return false;
	}
	if(!pnum.match(/^[+]{1}[6]{2}[2]{1}[-]{1}[0-9]{3}[-]{1}[0-9]{3}$/)){
		produceErrMsg("Please fill your phone number with numbers and match with a form.","pNumErr","red");
		return false;
	}
	
	produceErrMsg("Phone number is correct.","pNumErr","green");
	return true;
	
}

function validateCnum(){
	
	var cnum = document.getElementById('cellnum').value;
	
	if(cnum.length == 0){
		produceErrMsg("Cell Phone number is required.","cNumErr","red");
		return false;
	}
	if(!cnum.match(/[+]{1}[6]{2}[0-9]{2}[-]{1}[0-9]{3}[-]{1}[0-9]{4}$/)){
		produceErrMsg("Please fill your cell phone number with numbers and match with a form.","cNumErr","red");
		return false;
	}
	
	produceErrMsg("Cell Phone number is correct.","cNumErr","green");
	return true;
	
}

function validateBday(){
	if(contactForm.birthDay.selectedIndex == 0){
		produceErrMsg("Birth Day is not select.","bdErr","red");
		contactForm.birthDay.focus();
		return false;
	}
	
	produceErrMsg("Birth Day is selected.","bdErr","green");
	return true;	
	
}

function validateBmonth(){
	if(contactForm.birthMonth.selectedIndex == 0){
		produceErrMsg("Birth Month is not select.","bdErr","red");
		contactForm.birthMonth.focus();
		return false;
	}
	
	produceErrMsg("Birth Month is selected.","bdErr","green");
	return true;
	
}

function validateByear(){
	
	var byear = document.getElementById('birthyear').value;
	
	if(byear.length == 0){
		produceErrMsg("Birth Year is required.","bdErr","red");
		return false;
	}
	if(byear.length != 4){
		produceErrMsg("Birth Year is incorrect.","bdErr","red");
		return false;
	}
	if(!byear.match(/^[0-9]+$/)){
		produceErrMsg("Please fill your birth year with numbers.","bdErr","red");
		return false;
	}
	
	produceErrMsg("Birth Year is correct.","bdErr","green");
	return true;
	
}
function validateCitiId(){
	
	var citi= document.getElementById('idnumber').value;
	
	if(citi.length == 0){
		produceErrMsg("Citizenship number is required.","idErr","red");
		return false;
	}
	if(citi.length != 13){
		produceErrMsg("Citizenship number must have 13 letters.","idErr","red");
		return false;
	}
	if(!citi.match(/^[0-9]{13}$/)){
		produceErrMsg("Please fill your citizenship number with numbers.","idErr","red");
		return false;
	}
	
	produceErrMsg("Citizenship number is correct.","idErr","green");
	return true;
}

function validateZosign(){
	
	if(contactForm.zodsign.selectedIndex == 0){
		produceErrMsg("Zodiac Sign is not select.","zodsErr","red");
		contactForm.zodsign.focus();
		return false;
	}
	
	produceErrMsg("Zodiac Sign is selected.","zodsErr","green");
	return true;
	
}

function validateZoyear(){
	
	if(contactForm.zodyear.selectedIndex == 0){
		produceErrMsg("Zodiac Year is not select.","zodyErr","red");
		contactForm.zodyear.focus();
		return false;
	}
	
	produceErrMsg("Zodiac Year is selected.","zodyErr","green");
	return true;
	
}

function validateDayWeek(){
	
	if(contactForm.bdayweek.selectedIndex == 0){
		produceErrMsg("Birth Day of Week is not select.","daywErr","red");
		contactForm.zodyear.focus();
		return false;
	}
	
	produceErrMsg("Birth Day of Week is selected.","daywErr","green");
	return true;
	
}

function validateForm(){
	
	if(!validateFname() || !validateLname() || !validateHnum() || !validateStreet() || !validateCity() || !validateProv() || !validateZip() || !validatePnum() || !validateCnum() || !validateBday() || !validateBmonth() || !validateByear() || !validateCitiId() || !validateZosign() || !validateZoyear() || !validateDayWeek()){
		alert("Have a problem!,please check your form again.");
		return false;
		
	}
	alert("Success.");
	saveCookies();
	alert("_firstname="+myCookies._firstname+"_lastname="+myCookies._lastname);
	insertToTable();
	return true;
}

var myCookies = {}; 

function saveCookies(){
	
	myCookies["_firstname"] = document.getElementById("firstname").value;
	myCookies["_lastname"] = document.getElementById("lastname").value;
	myCookies["_hnum"] = document.getElementById("housenumber").value;
	myCookies["_st"] = document.getElementById("street").value;
	myCookies["_cty"] = document.getElementById("city").value;
	myCookies["_prov"] = document.getElementById("province").value;
	myCookies["_zip"] = document.getElementById("zipcode").value;
	myCookies["_pnum"] = document.getElementById("phonenum").value;
	myCookies["_cnum"] = document.getElementById("cellnum").value;
	myCookies["_day"] = document.getElementById("bday").value;
	myCookies["_month"] = document.getElementById("bmonth").value;
	myCookies["_byear"] = document.getElementById("birthyear").value;
	myCookies["_citi"] = document.getElementById("idnumber").value;
	myCookies["_zsign"] = document.getElementById("zosign").value;
	myCookies["_zyear"] = document.getElementById("zoyear").value;
	myCookies["_dayw"] = document.getElementById("dweek").value;
	
	document.cookie = "";
	var expires = new Date(Date.now()+60*1000).toString;
	var cookieString = "";
	for(var key in myCookies){
		cookieString = key+"="+myCookies[key]+";"+expires+";";
		document.cookie = cookieString;
	}
	
}

function loadCookies(){
	
	myCookies = {};
	
	if(document.cookie == ""){
		
		alert("Please fill all the fields.");
		return false
		
	}
	
	var kv = document.cookie.split(";");
	for(var id in kv){
		
		var cookie = kv[id].split("=");
		myCookies[cookie[0].trim()] = cookie[1];
		
	}
	
	document.getElementById("firstname").value = myCookies["_firstname"];
	document.getElementById("lastname").value = myCookies["_lastname"];
	document.getElementById("housenumber").value = myCookies["_hnum"];
	document.getElementById("street").value = myCookies["_st"];
	document.getElementById("city").value = myCookies["_cty"];
	document.getElementById("province").value = myCookies["_prov"];
	document.getElementById("zipcode").value = myCookies["_zip"];
	document.getElementById("phonenum").value = myCookies["_pnum"];
	document.getElementById("cellnum").value = myCookies["_cnum"];
	document.getElementById("bday").value = myCookies["_day"];
	document.getElementById("bmonth").value = myCookies["_month"];
	document.getElementById("birthyear").value = myCookies["_byear"];
	document.getElementById("idnumber").value = myCookies["_citi"];
	document.getElementById("zosign").value = myCookies["_zsign"];
	document.getElementById("zoyear").value = myCookies["_zyear"];
	document.getElementById("dweek").value = myCookies["_dayw"];
	return true
	
}

function insertToTable(){
	
	var fname = document.getElementById('firstname').value;
	var lname = document.getElementById('lastname').value;
	var hnum = document.getElementById('housenumber').value;
	var st = document.getElementById('street').value;
	var cty = document.getElementById('city').value;
	var prov = document.getElementById('province').value;
	var zip = document.getElementById('zipcode').value;
	var pnum = document.getElementById('phonenum').value;
	var cnum = document.getElementById('cellnum').value;
	var day = document.getElementById('bday').value;
	var month = document.getElementById('bmonth').value;
	var byear = document.getElementById('birthyear').value;
	var citi= document.getElementById('idnumber').value;
	var zsign= document.getElementById('zosign').value;
	var zyear = document.getElementById('zoyear').value;
	var dayw = document.getElementById('dweek').value;
	
	var table = document.getElementById('contable');
	var row = table.insertRow();
	var fnamecell = row.insertCell(0);
	var lnamecell = row.insertCell(1);
	var hnumcell = row.insertCell(2);
	var stcell = row.insertCell(3);
	var ctycell = row.insertCell(4);
	var provcell = row.insertCell(5);
	var zipcell = row.insertCell(6);
	var pnumcell = row.insertCell(7);
	var cnumcell = row.insertCell(8);
	var daycell = row.insertCell(9);
	var monthcell = row.insertCell(10);
	var byearcell = row.insertCell(11);
	var citicell = row.insertCell(12);
	var zsigncell = row.insertCell(13);
	var zyearcell = row.insertCell(14);
	var daywcell = row.insertCell(15);
	
	fnamecell.innerHTML = fname;
	lnamecell.innerHTML = lname;
	hnumcell.innerHTML = hnum;
	stcell.innerHTML = st;
	ctycell.innerHTML = cty;
	provcell.innerHTML = prov;
	zipcell.innerHTML = zip;
	pnumcell.innerHTML = pnum;
	cnumcell.innerHTML = cnum;
	daycell.innerHTML = day;
	monthcell.innerHTML = month;
	byearcell.innerHTML = byear;
	citicell.innerHTML = citi;
	zsigncell.innerHTML = zsign;
	zyearcell.innerHTML = zyear;
	daywcell.innerHTML = dayw;
	
	
	
}
function produceErrMsg(message,location,color){
	document.getElementById(location).innerHTML = message;
	document.getElementById(location).style.color = color;
}



		