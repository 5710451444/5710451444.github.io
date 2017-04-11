// JavaScript Document
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
	  var x = this.responseText.split(".txt");
	  var pro = document.getElementById('province');
	  pro.innerHTML = "";
	  console.log(x);
	  
	  for(var values in x){
		  var newOp = document.createElement("option");
		  newOp.value = x[values];
		  newOp.innerHTML = x[values];
		  pro.options.add(newOp);
	  }
		  
    }
  };
  xhttp.open("GET", "province.txt", true);
  xhttp.send();
}
