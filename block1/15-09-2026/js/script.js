function showWelcome() {
	const studentName = "John";
	const courseTitle = "HND Web Development";

	const welcomeMessage = document.querySelector("#welcomeMessage");
	welcomeMessage.textContent = `Welcome ${studentName} to ${courseTitle}.`;
}


function checkResult() {
	const score = "84";
	const resultMesage = document.querySelector("#resultMessage");
	
	if (score >= 70) {
		resultMesage.textContent = `Yor score is ${score}. Excellent.`;
	} else if (score >= 50 && score <= 69) {
		resultMesage.textContent = `Your score is ${score}. Pass.`;
	} else if (score < 50) {
		resultMesage.textContent = `Your score is ${score}. Keep practising.`;
	}
}


function checkAccess() {
	const age = "16";
	const hasID = true;
	const accessMessage = document.querySelector(".accessMessage");
	
	

	if (age >= 18 && hasID === true) {
		accessMessage.textContent = `Your age is ${age} / ID is ${hasID}. You have full access.`
		accessMessage.style.color = "green";
		accessMessage.style.fontWeight = "bold";
	} else {
		accessMessage.textContent = `Your age is ${age} / ID is ${hasID}. You don't have an access.`
		accessMessage.style.color = "red";
		accessMessage.style.fontStyle = "italic";
	}
}