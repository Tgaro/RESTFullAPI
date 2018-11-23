
const btnSubmmit = document.getElementById("btnRegister")
const fieldToken = document.getElementById("token")
const fieldUser = document.getElementById("user")

if(btnSubmmit)
	btnSubmmit.onclick = function() {
	    fieldToken.value = "12345";
	}