// function showMessage() {
// 	const message = document.querySelector("#message");
// 	message.textContent = "Function is useful!";
// } 




function userData() {
	let userName = document.getElementById('name').value;
	let userLanguage = document.getElementById('language').value;


	if (userName == '' && userLanguage == '') {
		document.getElementById('message').textContent = 'Please enter your name and programming language.';
	}	else if (userName == '') {
		document.getElementById('message').textContent = 'Please enter your name.';
	} else if (userLanguage == '') {
		document.getElementById('message').textContent = 'Please enter your programming language.';
	}	else {
		document.getElementById('message').textContent = 'Welcome ' + userName + '!';
		document.getElementById('userProgrammingLanguageMessage').textContent = 'Your favorite programming language is ' + userLanguage;
	}

}

function clearDataUser() {
	document.getElementById('name').value = '';
	document.getElementById('language').value = '';
	document.getElementById('message').textContent = '';
	document.getElementById('userProgrammingLanguageMessage').textContent = '';
}


function showWelcome(name) {
	let message = document.querySelector('#message');
	message.textContent = `Welcome ${name}`;
}
showWelcome("Aleksei");