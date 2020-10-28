const btn = document.getElementById('logbtn');
let user = document.getElementById('user');
let psw = document.getElementById('psw');
const err = document.querySelector('.error');
btn.addEventListener('click',login)

function login(e){
	e.preventDefault()	
	
	if ((user.value == 'admin') && (psw.value == 'gotham20')) {
		document.cookie = "logged=si";
		location.href = "home.html"
	} 
	else {
		err.innerHTML = "Username o Password errati<br><br>"
		
	}  
}
