 function keyPress(e){
    var keyCode;
    if(window.event){ // IE					
    	keyCode = e.keyCode;
    } else {
	    if(e.which){ // Netscape/Firefox/Opera					
			keyCode = e.which;
	    }
    }
    //If 'enter' keypress
    if(keyCode == 13){
    	//Check to see if Username is entered
    	var username = document.getElementById("username").value;
    	if(username == ''){
    		alert("Please enter a Username");
    	} else {
	    	var pw = document.getElementById("password").value;
	    	alert(username + " your current password is: " + pw);
	    }
    }
}

 function submitLogin(){
	//Check to see if Username is entered
	var username = document.getElementById("username").value;
	if(username == ''){
		alert("Please enter a Username");
	} else {
    	var pw = document.getElementById("password").value;
    	alert(username + " your current password is: " + pw);
    }
}