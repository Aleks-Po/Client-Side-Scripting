// const answer = "paris";

// if (answer === "paris") {
// 	console.log("Correct!")	
// } else {
// 	console.log("Incorrect!")
	
// }

const quizForm = document.querySelector("#quizForm");

quizForm.addEventListener("submit", function(event) {
	event.preventDefault();

	let score = 0;
	
	const answer1 = document.querySelector("#answer1").value.trim().toLowerCase();

	const result1 = document.querySelector("#result1");

	if (answer1 === "edinburgh") {
		result1.textContent = "Correct!"
		result1.className = "result correct";

		score = score + 1;

	} else {
		result1.textContent = "Incorrect";
		result1.className = "result incorrect"
	}




	const answer2 = document.querySelector("#answer2").value.trim().toLowerCase();

	const result2 = document.querySelector("#result2");


	if (answer2 === "paris") {
		result2.textContent = "Correct!";
		result2.className = "result correct"

		score = score + 1;

	} else {
		result2.textContent = "Incorrect";
		result2.className = "result incorrect"
	}




	const answer3 = document.querySelector("#answer3").value.trim().toLowerCase();

	const result3 = document.querySelector("#result3");


	if (answer3 === "egypt") {
		result3.textContent = "Correct!";
		result3.className = "result correct"

		score = score + 1;

	} else {
		result3.textContent = "Incorrect";
		result3.className = "result incorrect"
	}




	const answer4 = document.querySelector("#answer4").value.trim().toLowerCase();

	const result4 = document.querySelector("#result4");


	if (answer4 === "pacific ocean" || answer4 === "pacific") {
		result4.textContent = "Correct!";
		result4.className = "result correct"

		score = score + 1;

	} else {
		result4.textContent = "Incorrect";
		result4.className = "result incorrect"
	}




	const answer5 = document.querySelector("#answer5").value.trim().toLowerCase();

	const result5 = document.querySelector("#result5");


	if (answer5 === "south america") {
		result5.textContent = "Correct!";
		result5.className = "result correct"

		score = score + 1;

	} else {
		result5.textContent = "Incorrect";
		result5.className = "result incorrect"
	}


	const finalScore = document.querySelector("#finalScore");

	finalScore.textContent = "Your score is " + score + " out of 5.";


	if (score >= 3) {
		finalScore.textContent = "Well Done. Pass!";
		finalScore.className = "result correct";

	} else {
		finalScore.textContent = "Unfortunately. Fail :(";
		finalScore.className = "result incorrect";
	}

});

